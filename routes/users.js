const express = require('express');
const { getAllUsers, setAvatar } = require('../controllers/userController');

const router = express.Router();

router.get('/allusers/:id', getAllUsers);
router.post('/setavatar/:id', setAvatar);

module.exports = router;
