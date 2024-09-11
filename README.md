# sivtheng's Todo List App

A simple and elegant todo list application built with Vue.js and Firebase, allowing Sivtheng to manage their tasks with real-time updates.

## Features

- Add new tasks
- Mark tasks as completed or pending
- Delete tasks
- Real-time updates across devices

## Technologies Used

- Vue.js 3
- Firebase (Firestore)
- Vite

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sivtheng-todo-list.git
   cd sivtheng-todo-list
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `src/firebase.js` file with your Firebase configuration:
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

   Replace the placeholders with your actual Firebase configuration values.

4. Update `.gitignore` to exclude the Firebase configuration:
   ```
   # Firebase
   src/firebase.js
   ```

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/sivtheng-todo-list.git
   cd sivtheng-todo-list
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```