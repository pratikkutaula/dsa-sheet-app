import React from 'react';
import '../styles/ProblemCard.css';

const ProblemCard = ({ problem, isCompleted, onToggleProgress }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'easy':
        return 'easy';
      case 'medium':
        return 'medium';
      case 'hard':
        return 'hard';
      default:
        return '';
    }
  };

  return (
    <div className={`problem-card ${isCompleted ? 'completed' : ''}`}>
      <div className="problem-header">
        <h3>{problem.title}</h3>
        <div className="level-badge" style={{ color: getLevelColor(problem.level) }}>
          {problem.level}
        </div>
      </div>

      <p className="problem-description">{problem.description}</p>

      <div className="problem-links">
        {problem.youtubeLink && (
          <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="link-btn youtube">
            📺 YouTube
          </a>
        )}
        {problem.leetcodeLink && (
          <a href={problem.leetcodeLink} target="_blank" rel="noopener noreferrer" className="link-btn leetcode">
            💻 LeetCode
          </a>
        )}
        {problem.codeforcesLink && (
          <a href={problem.codeforcesLink} target="_blank" rel="noopener noreferrer" className="link-btn codeforces">
            🔧 Codeforces
          </a>
        )}
        {problem.articleLink && (
          <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="link-btn article">
            📖 Article
          </a>
        )}
      </div>

      <div className="problem-footer">
        <button
          className={`checkbox-btn ${isCompleted ? 'checked' : ''}`}
          onClick={() => onToggleProgress(problem._id, isCompleted)}
          title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isCompleted ? '✓ Completed' : '☐ Mark Complete'}
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
