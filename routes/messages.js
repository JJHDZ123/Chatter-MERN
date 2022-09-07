const express = require('express');
const { addMessage, getMessages } = require('../controllers/messageController.js');

const router = express.Router();

router.post('/getmsg', getMessages);
router.post('/addmsg', addMessage);

module.exports = router;
