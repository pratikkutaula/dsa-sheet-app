const Progress = require('../models/Progress');
const Problem = require('../models/Problem');
const mongoose = require('mongoose');

// Toggle problem completion status
exports.toggleProgress = async (req, res) => {
  try {
    const { problemId } = req.params;
    const { isCompleted } = req.body;
    const userId = req.userId;

    // Check if problem exists
    const problem = await Problem.findById(problemId);
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    // Find or create progress record
    let progress = await Progress.findOne({ userId, problemId });

    if (progress) {
      progress.isCompleted = isCompleted;
      progress.completedAt = isCompleted ? new Date() : null;
      await progress.save();
    } else {
      progress = new Progress({
        userId,
        problemId,
        isCompleted,
        completedAt: isCompleted ? new Date() : null,
      });
      await progress.save();
    }

    res.json({
      message: 'Progress updated successfully',
      progress,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get user's progress
exports.getUserProgress = async (req, res) => {
  try {
    const userId = req.userId;
    const progress = await Progress.find({ userId }).populate('problemId');
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get progress stats
exports.getProgressStats = async (req, res) => {
  try {
    const userId = req.userId;

    const stats = await Progress.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          completed: {
            $sum: { $cond: [{ $eq: ['$isCompleted', true] }, 1, 0] },
          },
        },
      },
    ]);

    const result = stats.length > 0 ? stats[0] : { total: 0, completed: 0 };

    // Get level-wise breakdown
    const levelStats = await Progress.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: 'problems',
          localField: 'problemId',
          foreignField: '_id',
          as: 'problem',
        },
      },
      { $unwind: '$problem' },
      {
        $group: {
          _id: '$problem.level',
          total: { $sum: 1 },
          completed: {
            $sum: { $cond: [{ $eq: ['$isCompleted', true] }, 1, 0] },
          },
        },
      },
    ]);

    res.json({
      overall: result,
      byLevel: levelStats,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get topic progress
exports.getTopicProgress = async (req, res) => {
  try {
    const { topicId } = req.params;
    const userId = req.userId;

    const progress = await Progress.find({ userId })
      .populate({
        path: 'problemId',
        match: { topicId },
      });

    const filteredProgress = progress.filter((p) => p.problemId);

    res.json(filteredProgress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
