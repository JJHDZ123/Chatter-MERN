const express = require('express');
const authRoutes = require('./auth.js');
const userRoutes = require('./users.js');
const messagesRoutes = require('./messages.js');
const checkAuth = require('../utils/checkAuth.js');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', checkAuth, userRoutes);
router.use('/messages', checkAuth, messagesRoutes);

module.exports = router;
