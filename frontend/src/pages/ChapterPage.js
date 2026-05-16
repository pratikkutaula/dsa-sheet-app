import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { contentAPI } from '../services/api';
import '../styles/ChapterPage.css';

const ChapterPage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState(null);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchChapterData();
  }, [chapterId]);

  const fetchChapterData = async () => {
    try {
      setLoading(true);
      const response = await contentAPI.getChapterWithTopics(chapterId);
      setChapter(response.data);
      setTopics(response.data.topics || []);
    } catch (err) {
      setError('Failed to load chapter data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="chapter-page">
      <header className="chapter-header">
        <button onClick={() => navigate('/dashboard')} className="back-btn">
          ← Back to Dashboard
        </button>
        <h1>{chapter?.title}</h1>
      </header>

      <main className="chapter-content">
        <p className="chapter-description">{chapter?.description}</p>

        <section className="topics-section">
          <h2>Topics</h2>
          <div className="topics-list">
            {topics.map((topic) => (
              <div
                key={topic._id}
                className="topic-item"
                onClick={() => navigate(`/topic/${topic._id}`)}
              >
                <h3>{topic.title}</h3>
                <button className="view-problems-btn">
                  View Problems →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChapterPage;
