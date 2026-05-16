const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const auth = require('../middleware/auth');

router.post('/toggle/:problemId', auth, progressController.toggleProgress);
router.get('/user-progress', auth, progressController.getUserProgress);
router.get('/stats', auth, progressController.getProgressStats);
router.get('/topic/:topicId', auth, progressController.getTopicProgress);

module.exports = router;
