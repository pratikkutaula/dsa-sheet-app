import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { contentAPI, progressAPI } from '../services/api';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [chapters, setChapters] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [chaptersRes, statsRes] = await Promise.all([
        contentAPI.getChapters(),
        progressAPI.getProgressStats(),
      ]);
      setChapters(chaptersRes.data);
      setStats(statsRes.data);
    } catch (err) {
      setError('Failed to load chapters');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openChapter = (chapterId) => {
    navigate(`/chapter/${chapterId}`);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const progressPercentage =
    stats && stats.overall.total > 0
      ? Math.round((stats.overall.completed / stats.overall.total) * 100)
      : 0;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>DSA Sheet</h1>
        <div className="user-section">
          <span>Welcome, {user?.name}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        {error && <div className="error-banner">{error}</div>}

        <div className="stats-container">
          <div className="stat-card">
            <h3>Overall Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p>{stats?.overall.completed}/{stats?.overall.total} completed</p>
            <p className="percentage">{progressPercentage}%</p>
          </div>

          {stats?.byLevel && (
            <div className="level-breakdown">
              <h3>By Level</h3>
              {stats.byLevel.map((level) => (
                <div key={level._id} className="level-stat">
                  <span className={`level-badge ${level._id}`}>{level._id}</span>
                  <span>{level.completed}/{level.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="chapters-section">
          <h2>DSA Topics</h2>
          <div className="chapters-grid">
            {chapters.map((chapter) => (
              <div
                key={chapter._id}
                className="chapter-card"
                onClick={() => openChapter(chapter._id)}
              >
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <button className="view-btn">View Topics →</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
