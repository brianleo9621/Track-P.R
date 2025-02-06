# Personal Record Tracking Application

A MERN stack application for tracking personal records in exercises, with plans to expand to custom workout creation and tracking.

## Project Overview

This application allows users to:
- Record and track personal records for different exercises
- Store exercise data including name, weight, reps, and date
- View history of personal records
- Delete records as needed

## Technology Stack

- **MongoDB**: Database for storing personal records
- **Express.js**: Backend framework
- **React.js**: Frontend framework (upcoming)
- **Node.js**: Runtime environment

## Project Structure

```
project-root/
├── server/
│   ├── config/
│   │   └── db.js         # Database configuration
│   ├── models/
│   │   └── PR.js         # Personal Record schema
│   ├── routes/
│   │   └── pr.js         # API routes
│   ├── server.js         # Main server file
│   ├── .env              # Environment variables
│   └── package.json      # Server dependencies
└── client/              # React frontend (upcoming)
```

## API Endpoints

- `GET /api/pr`: Retrieve all personal records
- `POST /api/pr`: Create a new personal record
- `DELETE /api/pr/:id`: Delete a specific personal record

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
cd server
npm install
```

3. Create a .env file in the server directory with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:
```bash
npm start
```

## Required Dependencies

Server-side dependencies:
- express
- mongoose
- dotenv
- cors

## Future Features

- Custom workout creation
- Workout checklist functionality
- User authentication
- Progress tracking and analytics

## Contributing

This is a personal project for tracking exercise progress. Feel free to fork and modify for your own use.
