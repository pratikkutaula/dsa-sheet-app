# Quick Start Guide - DSA Sheet Application

## Prerequisites
Ensure you have installed:
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **MongoDB** ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** (comes with Node.js)

## Step-by-Step Setup

### Step 1: Start MongoDB
If using local MongoDB:
```bash
# On Windows
mongod

# On macOS/Linux
brew services start mongodb-community
# or
mongod
```

If using MongoDB Atlas, skip this step (cloud database).

---

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Seed database with sample data
node seed.js

# Start backend server
npm run dev
```

✅ Backend should run on `http://localhost:5000`

You'll see: `Server running on port 5000`

---

### Step 3: Frontend Setup (in a new terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

✅ Frontend will automatically open on `http://localhost:3000`

---

## Using the Application

### 1. Create Account or Login

- **New User**: Click "Register" tab
  - Enter your name, email, and password
  - Click "Register"
  
- **Existing User**: 
  - Enter your email and password
  - Click "Login"

### 2. Explore DSA Topics

- You'll see the **Dashboard** with:
  - Your overall progress
  - Progress by difficulty level
  - All DSA chapters available

### 3. Browse Topics

- Click on any chapter to see its topics
- Topics include: Big O, Recursion, Arrays, Linked Lists, etc.

### 4. Solve Problems

- Click "View Problems" on any topic
- See all problems with difficulty labels (Easy/Medium/Hard)
- Each problem card shows:
  - Problem title and difficulty level
  - Description
  - Links to:
    - 📺 YouTube Tutorial
    - 💻 LeetCode
    - 🔧 Codeforces
    - 📖 Article

### 5. Track Progress

- Click "Mark Complete" button on each problem
- Your progress is **automatically saved**
- Completed problems show a green checkmark
- On next login, you'll see exactly where you left off

### 6. Monitor Your Progress

- Dashboard shows overall completion percentage
- See problems solved by difficulty level
- Visual progress bar updates in real-time

---

## Sample Data Included

When you run `node seed.js`, the database is populated with:

### 7 DSA Chapters:
1. **Fundamentals** - Basic concepts and problem-solving
2. **Arrays & Strings** - Array operations and string manipulation
3. **Linked Lists** - Singly and doubly linked lists
4. **Stacks & Queues** - Stack and queue implementations
5. **Trees** - Binary trees and tree traversals
6. **Graphs** - Graph algorithms
7. **Dynamic Programming** - DP problems

### 15+ Sample Problems:
- Two Sum (Easy)
- Reverse Array (Easy)
- Longest Substring Without Repeating (Medium)
- Container With Most Water (Medium)
- 3Sum (Hard)
- Reverse Linked List (Easy)
- Detect Cycle in Linked List (Medium)
- Valid Parentheses (Easy)
- Largest Rectangle in Histogram (Hard)
- Inorder Traversal (Easy)
- Validate BST (Medium)
- And more...

Each problem includes:
- Detailed description
- Links to YouTube tutorials
- Links to LeetCode problems
- Links to Codeforces
- Strategic articles for learning

---

## Testing User Accounts

After running `seed.js`, you can test with these sample accounts:

You can register new accounts anytime, or use any registered account to test the application.

---

## Troubleshooting

### Issue: "Cannot connect to MongoDB"
- **Solution 1**: Make sure MongoDB is running
- **Solution 2**: Change `MONGO_URI` in `.env` to use MongoDB Atlas connection string

### Issue: "Port 5000 is already in use"
- **Solution**: Change PORT in `backend/.env` to another port (e.g., 5001)

### Issue: "Port 3000 is already in use"
- **Solution**: Run frontend on different port: `PORT=3001 npm start`

### Issue: "npm install fails"
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: "CORS errors in console"
- **Solution**: Make sure backend is running on port 5000
- **Solution 2**: Check that frontend proxy is set to `"proxy": "http://localhost:5000"`

### Issue: "Seeding database fails"
- **Solution**: 
  1. Check MongoDB is running
  2. Verify `MONGO_URI` in `.env`
  3. Make sure the database is accessible

---

## Common Tasks

### Reset Database and Reseed
```bash
# In backend directory
node seed.js
```
This deletes all existing data and creates fresh sample data.

### Create New User for Testing
1. Open the app (`http://localhost:3000`)
2. Click "Register"
3. Fill in name, email, password
4. Click "Register"

### Check API in Browser
- Test backend health: `http://localhost:5000/health`
- Get chapters: `http://localhost:5000/api/content/chapters`

---

## File Structure Reminder

```
dsa-sheet-app/
├── backend/          ← Backend server
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── seed.js       ← Run this to seed database
│
└── frontend/         ← React app
    ├── package.json
    ├── public/
    └── src/
```

---

## What's Included in This Application?

✅ **Authentication System**
- Secure login/signup
- JWT tokens
- Password hashing

✅ **DSA Content Management**
- 7 organized chapters
- Multiple topics per chapter
- 15+ problems with varied difficulty

✅ **Resource Links**
- YouTube for video tutorials
- LeetCode for coding practice
- Codeforces for advanced problems
- Articles for theoretical understanding

✅ **Progress Tracking**
- Mark problems as completed
- Progress saved to database
- Resume from where you left off
- View completion statistics
- Filter by difficulty level

✅ **User Experience**
- Beautiful gradient UI
- Responsive design
- Smooth animations
- Intuitive navigation
- Error handling

---

## Support & Questions

For more detailed information, refer to the main [README.md](../README.md)

Happy learning! 🚀
