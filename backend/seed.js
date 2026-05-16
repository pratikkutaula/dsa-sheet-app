require('dotenv').config();
const mongoose = require('mongoose');
const Chapter = require('./models/Chapter');
const Topic = require('./models/Topic');
const Problem = require('./models/Problem');
const connectDB = require('./config/database');

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Chapter.deleteMany();
    await Topic.deleteMany();
    await Problem.deleteMany();

    // Create Chapters
    const chapters = await Chapter.insertMany([
      {
        title: 'Fundamentals',
        description: 'Core programming concepts and basics',
        order: 1,
      },
      {
        title: 'Arrays & Strings',
        description: 'Work with arrays and string manipulation',
        order: 2,
      },
      {
        title: 'Linked Lists',
        description: 'Singly and doubly linked lists',
        order: 3,
      },
      {
        title: 'Stacks & Queues',
        description: 'Stack and queue data structures',
        order: 4,
      },
      {
        title: 'Trees',
        description: 'Binary trees, BST, and Tree traversals',
        order: 5,
      },
      {
        title: 'Graphs',
        description: 'Graph algorithms and representations',
        order: 6,
      },
      {
        title: 'Dynamic Programming',
        description: 'DP problems and optimizations',
        order: 7,
      },
    ]);

    // Create Topics for Fundamentals
    const fundamentalsTopics = await Topic.insertMany([
      {
        title: 'Big O Notation',
        chapterId: chapters[0]._id,
        order: 1,
      },
      {
        title: 'Recursion',
        chapterId: chapters[0]._id,
        order: 2,
      },
    ]);

    // Create Topics for Arrays & Strings
    const arrayTopics = await Topic.insertMany([
      {
        title: 'Array Basics',
        chapterId: chapters[1]._id,
        order: 1,
      },
      {
        title: 'String Manipulation',
        chapterId: chapters[1]._id,
        order: 2,
      },
      {
        title: 'Two Pointers',
        chapterId: chapters[1]._id,
        order: 3,
      },
    ]);

    // Create Topics for Linked Lists
    const linkedListTopics = await Topic.insertMany([
      {
        title: 'Singly Linked List',
        chapterId: chapters[2]._id,
        order: 1,
      },
      {
        title: 'Doubly Linked List',
        chapterId: chapters[2]._id,
        order: 2,
      },
    ]);

    // Create Topics for Stacks & Queues
    const stackQueueTopics = await Topic.insertMany([
      {
        title: 'Stack Implementation',
        chapterId: chapters[3]._id,
        order: 1,
      },
      {
        title: 'Queue Implementation',
        chapterId: chapters[3]._id,
        order: 2,
      },
    ]);

    // Create Topics for Trees
    const treeTopics = await Topic.insertMany([
      {
        title: 'Binary Tree Basics',
        chapterId: chapters[4]._id,
        order: 1,
      },
      {
        title: 'Binary Search Tree',
        chapterId: chapters[4]._id,
        order: 2,
      },
      {
        title: 'Tree Traversals',
        chapterId: chapters[4]._id,
        order: 3,
      },
    ]);

    // Create Problems for Arrays
    await Problem.insertMany([
      {
        title: 'Two Sum',
        topicId: arrayTopics[0]._id,
        level: 'easy',
        description: 'Find two numbers that add up to target',
        youtubeLink: 'https://www.youtube.com/results?search_query=two+sum+leetcode',
        leetcodeLink: 'https://leetcode.com/problems/two-sum/',
        articleLink: 'https://www.geeksforgeeks.org/two-sum/',
        order: 1,
      },
      {
        title: 'Reverse Array',
        topicId: arrayTopics[0]._id,
        level: 'easy',
        description: 'Reverse an array in-place',
        youtubeLink: 'https://www.youtube.com/results?search_query=reverse+array',
        leetcodeLink: 'https://leetcode.com/problems/reverse-string/',
        articleLink: 'https://www.geeksforgeeks.org/reverse-an-array/',
        order: 2,
      },
      {
        title: 'Longest Substring Without Repeating',
        topicId: arrayTopics[1]._id,
        level: 'medium',
        description: 'Find longest substring without repeating characters',
        youtubeLink: 'https://www.youtube.com/results?search_query=longest+substring+without+repeating',
        leetcodeLink: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
        articleLink: 'https://www.geeksforgeeks.org/longest-substring-without-repeating-characters/',
        order: 1,
      },
      {
        title: 'Container With Most Water',
        topicId: arrayTopics[2]._id,
        level: 'medium',
        description: 'Find container with most water using two pointers',
        youtubeLink: 'https://www.youtube.com/results?search_query=container+most+water',
        codeforcesLink: 'https://codeforces.com/',
        articleLink: 'https://www.geeksforgeeks.org/container-with-most-water/',
        order: 1,
      },
      {
        title: '3Sum',
        topicId: arrayTopics[2]._id,
        level: 'hard',
        description: 'Find all unique triplets that sum to zero',
        youtubeLink: 'https://www.youtube.com/results?search_query=3sum+leetcode',
        leetcodeLink: 'https://leetcode.com/problems/3sum/',
        articleLink: 'https://www.geeksforgeeks.org/find-triplets-array-sum-given-number/',
        order: 2,
      },
    ]);

    // Create Problems for Linked Lists
    await Problem.insertMany([
      {
        title: 'Reverse Linked List',
        topicId: linkedListTopics[0]._id,
        level: 'easy',
        description: 'Reverse a singly linked list',
        youtubeLink: 'https://www.youtube.com/results?search_query=reverse+linked+list',
        leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/',
        articleLink: 'https://www.geeksforgeeks.org/reverse-a-linked-list/',
        order: 1,
      },
      {
        title: 'Detect Cycle in Linked List',
        topicId: linkedListTopics[0]._id,
        level: 'medium',
        description: 'Detect if a linked list has a cycle',
        youtubeLink: 'https://www.youtube.com/results?search_query=detect+cycle+linked+list',
        leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/',
        articleLink: 'https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/',
        order: 2,
      },
    ]);

    // Create Problems for Stacks
    await Problem.insertMany([
      {
        title: 'Valid Parentheses',
        topicId: stackQueueTopics[0]._id,
        level: 'easy',
        description: 'Check if parentheses are balanced',
        youtubeLink: 'https://www.youtube.com/results?search_query=valid+parentheses',
        leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/',
        articleLink: 'https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/',
        order: 1,
      },
      {
        title: 'Largest Rectangle in Histogram',
        topicId: stackQueueTopics[0]._id,
        level: 'hard',
        description: 'Find largest rectangle area in histogram',
        youtubeLink: 'https://www.youtube.com/results?search_query=largest+rectangle+histogram',
        leetcodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
        articleLink: 'https://www.geeksforgeeks.org/largest-rectangle-in-histogram/',
        order: 2,
      },
    ]);

    // Create Problems for Trees
    await Problem.insertMany([
      {
        title: 'Inorder Traversal',
        topicId: treeTopics[2]._id,
        level: 'easy',
        description: 'Inorder traversal of binary tree',
        youtubeLink: 'https://www.youtube.com/results?search_query=inorder+traversal',
        leetcodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
        articleLink: 'https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/',
        order: 1,
      },
      {
        title: 'Validate BST',
        topicId: treeTopics[1]._id,
        level: 'medium',
        description: 'Validate if binary tree is a valid BST',
        youtubeLink: 'https://www.youtube.com/results?search_query=validate+bst',
        leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/',
        articleLink: 'https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/',
        order: 2,
      },
    ]);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
