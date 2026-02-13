const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false,
        allowedHeaders: ["*"]
    },
    allowEIO3: true,
    transports: ['websocket', 'polling']
});

// iframe対応のためのヘッダー設定
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('X-Frame-Options', 'ALLOWALL'); // iframeでの表示を許可
    res.removeHeader('X-Frame-Options'); // 完全に削除
    next();
});

app.use(express.static('public'));

const rooms = new Map();

io.on('connection', (socket) => {
    console.log('接続:', socket.id);

    socket.on('join-room', (roomId, userName) => {
        socket.join(roomId);
        
        if (!rooms.has(roomId)) {
            rooms.set(roomId, new Map());
        }
        
        const roomUsers = rooms.get(roomId);
        roomUsers.set(socket.id, { userName, socketId: socket.id });
        
        console.log(`${userName} が ${roomId} に参加`);
        
        socket.to(roomId).emit('user-connected', socket.id, userName);
        
        const existingUsers = Array.from(roomUsers.entries())
            .filter(([id]) => id !== socket.id)
            .map(([id, data]) => ({ socketId: id, userName: data.userName }));
        
        socket.emit('existing-users', existingUsers);
    });

    socket.on('offer', (offer, toSocketId) => {
        socket.to(toSocketId).emit('offer', offer, socket.id);
    });

    socket.on('answer', (answer, toSocketId) => {
        socket.to(toSocketId).emit('answer', answer, socket.id);
    });

    socket.on('ice-candidate', (candidate, toSocketId) => {
        socket.to(toSocketId).emit('ice-candidate', candidate, socket.id);
    });

    socket.on('chat-message', (roomId, message, userName) => {
        io.to(roomId).emit('chat-message', message, userName, socket.id);
    });

    socket.on('disconnect', () => {
        console.log('切断:', socket.id);
        
        rooms.forEach((roomUsers, roomId) => {
            if (roomUsers.has(socket.id)) {
                roomUsers.delete(socket.id);
                socket.to(roomId).emit('user-disconnected', socket.id);
                
                if (roomUsers.size === 0) {
                    rooms.delete(roomId);
                }
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`サーバー起動: ${PORT}`);
});

