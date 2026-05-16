# DSA Sheet Application - MERN Stack

A comprehensive Data Structures and Algorithms learning platform built with MERN stack (MongoDB, Express, React, Node.js).

## Features

✅ **User Authentication**
- Secure login/signup with JWT
- Password hashing with bcryptjs
- Session persistence

✅ **Structured DSA Content**
- Organized by chapters and topics
- 7+ chapters covering DSA fundamentals
- Multiple problems per topic

✅ **Problem Resources**
- YouTube tutorial links
- LeetCode practice links
- Codeforces problem links
- Article/theory references

✅ **Difficulty Levels**
- Easy, Medium, Hard classifications
- Filter problems by difficulty

✅ **Progress Tracking**
- Mark problems as completed
- Checkbox-based progress tracking
- Progress persists across sessions
- User-specific progress data
- Overall progress statistics
- Level-wise completion breakdown

## Project Structure

```
dsa-sheet-app/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Chapter.js
│   │   ├── Topic.js
│   │   ├── Problem.js
│   │   └── Progress.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── contentController.js
│   │   └── progressController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── contentRoutes.js
│   │   └── progressRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── package.json
│   ├── .env
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProblemCard.js
│   │   │   └── ProtectedRoute.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── Dashboard.js
│   │   │   ├── ChapterPage.js
│   │   │   └── TopicPage.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── LoginPage.css
│   │   │   ├── Dashboard.css
│   │   │   ├── ChapterPage.css
│   │   │   ├── TopicPage.css
│   │   │   └── ProblemCard.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (`.env`):
```
MONGO_URI=mongodb://localhost:27017/dsa-sheet-db
JWT_SECRET=your_secret_key_change_in_production
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
```

4. Seed the database with sample data:
```bash
node seed.js
```

5. Start the backend server:
```bash
npm run dev
```
The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```
The application will open on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Content
- `GET /api/content/chapters` - Get all chapters
- `GET /api/content/chapters/:chapterId` - Get chapter with topics
- `GET /api/content/topics` - Get all topics
- `GET /api/content/topics/:topicId` - Get topic with problems
- `GET /api/content/problems` - Get all problems (query: ?level=easy|medium|hard)
- `GET /api/content/problems/:problemId` - Get specific problem

### Progress Tracking
- `POST /api/progress/toggle/:problemId` - Toggle problem completion (Protected)
- `GET /api/progress/user-progress` - Get user's progress (Protected)
- `GET /api/progress/stats` - Get progress statistics (Protected)
- `GET /api/progress/topic/:topicId` - Get topic-specific progress (Protected)

## How to Use

1. **Register/Login**: Create an account or login with existing credentials
2. **Browse Topics**: View DSA chapters and topics on the dashboard
3. **View Problems**: Click on a topic to see all related problems
4. **Track Progress**: Click "Mark Complete" checkbox to track your progress
5. **Resume Learning**: Your progress is automatically saved and visible on next login
6. **Access Resources**: Click on YouTube, LeetCode, Codeforces, or Article buttons for learning resources

## Sample Data

The application comes with pre-populated sample data:
- 7 DSA chapters (Fundamentals, Arrays, Linked Lists, Stacks, Trees, Graphs, DP)
- 12+ topics across all chapters
- 15+ problems with varying difficulty levels
- Complete links to YouTube tutorials, LeetCode, Codeforces, and articles

## Technologies Used

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-Origin Resource Sharing
- **helmet** - Security headers

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

## Features Breakdown

### 1. Login Page
- Secure authentication
- Form validation
- Toggle between login and signup
- Error handling

### 2. Dashboard
- Welcome message
- Overall progress statistics
- Level-wise breakdown
- All chapters grid with navigation

### 3. Chapter Page
- Chapter details
- List of topics
- Navigation to topics

### 4. Topic Page
- Problem grid layout
- Difficulty indicators
- Progress counter
- Problem cards with all resources

### 5. Problem Card
- Title and difficulty level
- Problem description
- Links to:
  - YouTube tutorials
  - LeetCode problems
  - Codeforces problems
  - Article references
- Completion checkbox
- Toggle status with one click

### 6. Progress Tracking
- Checkbox-based marking
- Persistent storage in database
- User-specific tracking
- Resume on next login
- Progress statistics
- Level-wise analytics

## Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes with authentication middleware
- CORS configuration
- Helmet for security headers
- Input validation

## Future Enhancements

- Discussion forum for each problem
- Code editor integration
- Solution submissions
- Leaderboard
- Mobile app
- Advanced filtering and search
- Problem difficulty ratings
- Community contributions

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check MONGO_URI in .env file
- Verify connection string format

### CORS Errors
- Ensure backend is running on port 5000
- Check frontend proxy setting in package.json

### Port Already in Use
- Change PORT in .env file for backend
- Use different port for frontend: `PORT=3001 npm start`

## License

MIT License

## Support

For issues and questions, please create an issue in the repository.
