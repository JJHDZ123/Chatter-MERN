const express = require('express');
const { register, login, logout, handleRefreshToken } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/refresh', handleRefreshToken);
router.get('/logout/:id', logout);

module.exports = router;
