# Full-Stack CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application that allows you to manage user information. It consists of a backend API built with Node.js and Express.js and a frontend interface created using React.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, and Delete user records.
- A user-friendly and responsive web interface.
- Proper input validation and error handling.
- Separation of frontend and backend code.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine.
- Git to clone the repository (optional).

## Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>

1. Navigate to the backend directory:

Open a terminal and navigate to the directory where your backend code is located.

```bash
cd backend

```
2. Install backend dependencies:

Install the required dependencies for the backend (assuming you are using Node.js).

```bash
 npm install

```
3. Set up the database:

Initialize the SQLite database in the backend directory.
Create the users table to store user information.

```bash
// backend/app.js (or index.js)
// Database setup code here

```
4. Start the backend server:

Start the backend server to listen for incoming API requests. This will vary depending on the command you use to start your server (e.g., node app.js, npm start, etc.). Make sure it runs on the specified port (e.g., 3001).

```bash
node app.js

```
The backend API will be available at 'http://localhost:3001'


## Frontend Setup
1. oNavigate to the frontend directory:

Open a new terminal window/tab and navigate to the directory where your frontend code is located.

```bash
cd frontend

```
2. Install frontend dependencies:

Install the required dependencies for the frontend (assuming you are using React).

```bash
npm install

```
3. Update API URL:

In your frontend code, update the API_URL variable in your Axios or fetch calls to match the URL of your backend API (e.g., ' http://localhost:3001 ').

```bash
const API_URL = 'http://localhost:3001'; // Update this URL

```
4. Start the frontend application:

Start the frontend development server to run your React application.

```bash
npm start

```
The frontend application will be available at ' http://localhost:3000 '.

## Usage

 - Access the frontend application in your web browser at ' http://localhost:3000 '.
 - You should be able to interact with the CRUD operations through the user interface you've created. Use the form to add and edit 
    users, and the table to display and delete users.
 - The application will make API requests to the backend to perform these operations.






















