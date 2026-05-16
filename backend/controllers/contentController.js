const Chapter = require('../models/Chapter');
const Topic = require('../models/Topic');
const Problem = require('../models/Problem');

// Get all chapters
exports.getChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().sort('order');
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get chapter by ID with topics
exports.getChapterWithTopics = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const chapter = await Chapter.findById(chapterId);

    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }

    const topics = await Topic.find({ chapterId }).sort('order');
    res.json({ ...chapter.toObject(), topics });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get topic with problems
exports.getTopicWithProblems = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topic = await Topic.findById(topicId).populate('chapterId');

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    const problems = await Problem.find({ topicId }).sort('order');
    res.json({ ...topic.toObject(), problems });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get problem by ID
exports.getProblem = async (req, res) => {
  try {
    const { problemId } = req.params;
    const problem = await Problem.findById(problemId).populate('topicId');

    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all topics
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find().populate('chapterId').sort('order');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all problems
exports.getAllProblems = async (req, res) => {
  try {
    const { level } = req.query;
    let query = {};
    
    if (level) {
      query.level = level;
    }

    const problems = await Problem.find(query)
      .populate('topicId')
      .sort('order');
    
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
