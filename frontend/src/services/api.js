import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  login: (email, password) => api.post('/auth/login', { email, password }),
  getCurrentUser: () => api.get('/auth/me'),
};

// Content APIs
export const contentAPI = {
  getChapters: () => api.get('/content/chapters'),
  getChapterWithTopics: (chapterId) => api.get(`/content/chapters/${chapterId}`),
  getAllTopics: () => api.get('/content/topics'),
  getTopicWithProblems: (topicId) => api.get(`/content/topics/${topicId}`),
  getProblem: (problemId) => api.get(`/content/problems/${problemId}`),
  getAllProblems: (level) =>
    api.get('/content/problems', { params: level ? { level } : {} }),
};

// Progress APIs
export const progressAPI = {
  toggleProgress: (problemId, isCompleted) =>
    api.post(`/progress/toggle/${problemId}`, { isCompleted }),
  getUserProgress: () => api.get('/progress/user-progress'),
  getProgressStats: () => api.get('/progress/stats'),
  getTopicProgress: (topicId) => api.get(`/progress/topic/${topicId}`),
};

export default api;
