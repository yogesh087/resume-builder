# AI Resume Builder

AI Resume Builder is a web application that leverages artificial intelligence to help users craft professional resumes. 

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


