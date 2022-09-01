const express = require('express');
const authRoutes = require('./auth.js');
const userRoutes = require('./users.js');
const messagesRoutes = require('./messages.js');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;
