const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a problem title'],
      trim: true,
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
      required: true,
    },
    level: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    youtubeLink: {
      type: String,
      default: '',
    },
    leetcodeLink: {
      type: String,
      default: '',
    },
    codeforcesLink: {
      type: String,
      default: '',
    },
    articleLink: {
      type: String,
      default: '',
    },
    order: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Problem', problemSchema);
