# AI Resume Builder

AI Resume Builder is a web application that leverages artificial intelligence to help users craft professional resumes. 


## Tech Stack

- **Frontend:** React.js, TailwindCSS, Redux Toolkit  
- **Backend:** Node.js, Express.js,
- **Database:** MongoDB  


## Project Approach 

This project was developed using a modern full-stack approach, focusing on performance, scalability, and user experience. The frontend is built with React, Tailwind CSS, and Radix UI components for a clean and responsive interface. The backend is powered by Node.js with Express/NestJS and MongoDB for efficient data storage and retrieval. State management is handled using Redux, and authentication is implemented with secure JWT-based flows.

---
## Installation

**Frontend Setup**

1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd Frontend/
    npm install
    ```
🔹 Frontend (`Frontend/.env.local`)  

    Create a `.env.local` file inside the `Frontend/` directory and add the following:  

 
      VITE_GEMENI_API_KEY={Your Gemini API Key}
      VITE_APP_URL=http://localhost:5001/

2. Start the frontend server:
    ```bash
    npm run dev
    ```

**Backend Setup**

1. Navigate to the backend directory and install dependencies:
    ```bash
    cd Backend/
    npm install
    ```

2. Start the backend server:
    ```bash
    npm run dev
    ```
🔹 Backend (`Backend/.env`)  

Create a `.env` file inside the `Backend/` directory and add the following:  

 
MONGODB_URI={Your MongoDB URI} # If using Docker: mongodb://mongodb:27017/ai-resume-builder
PORT=5001
JWT_SECRET_KEY={Your Secret Key} #example "secret"
JWT_SECRET_EXPIRES_IN="1d"
NODE_ENV=Dev
ALLOWED_SITE=http://localhost:5173
 
---


Improvements if Given More Time:

Implement a dark mode and theme customization for user preference.

Add analytics to track resume views and downloads.

Enhance performance optimizations for large-scale user data.

Improve unit and integration tests to cover all critical flows.

Expand AI-powered features for resume suggestions and automated formatting.


