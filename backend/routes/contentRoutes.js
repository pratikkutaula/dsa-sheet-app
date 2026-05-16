const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/chapters', contentController.getChapters);
router.get('/chapters/:chapterId', contentController.getChapterWithTopics);
router.get('/topics', contentController.getAllTopics);
router.get('/topics/:topicId', contentController.getTopicWithProblems);
router.get('/problems', contentController.getAllProblems);
router.get('/problems/:problemId', contentController.getProblem);

module.exports = router;
