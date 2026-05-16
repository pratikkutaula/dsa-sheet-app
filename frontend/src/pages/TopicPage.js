import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contentAPI, progressAPI } from '../services/api';
import ProblemCard from '../components/ProblemCard';
import '../styles/TopicPage.css';

const TopicPage = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [problems, setProblems] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTopicData();
  }, [topicId]);

  const fetchTopicData = async () => {
    try {
      setLoading(true);
      const [topicRes, progressRes] = await Promise.all([
        contentAPI.getTopicWithProblems(topicId),
        progressAPI.getTopicProgress(topicId),
      ]);

      setTopic(topicRes.data);
      setProblems(topicRes.data.problems || []);

      // Create progress map
      const progressMap = {};
      progressRes.data.forEach((p) => {
        if (p.problemId?._id) {
          progressMap[p.problemId._id] = p.isCompleted;
        }
      });
      setProgress(progressMap);
    } catch (err) {
      setError('Failed to load topic data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleProgress = async (problemId, currentStatus) => {
    try {
      await progressAPI.toggleProgress(problemId, !currentStatus);
      setProgress((prev) => ({
        ...prev,
        [problemId]: !prev[problemId],
      }));
    } catch (err) {
      console.error('Failed to update progress:', err);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const completedCount = Object.values(progress).filter(Boolean).length;

  return (
    <div className="topic-page">
      <header className="topic-header">
        <button onClick={() => navigate('/dashboard')} className="back-btn">
          ← Back to Dashboard
        </button>
        <h1>{topic?.title}</h1>
        <p className="progress-text">
          Progress: {completedCount}/{problems.length} problems solved
        </p>
      </header>

      <main className="topic-content">
        {problems.length === 0 ? (
          <p className="no-problems">No problems available for this topic yet.</p>
        ) : (
          <div className="problems-grid">
            {problems.map((problem) => (
              <ProblemCard
                key={problem._id}
                problem={problem}
                isCompleted={progress[problem._id] || false}
                onToggleProgress={handleToggleProgress}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default TopicPage;
