# Short-URL

Short-URL is a URL shortening service with user authentication, allowing users to create, manage, and track shortened URLs within a secure, authenticated interface. This project combines **Node.js**, **Express.js**, and **MongoDB** for server-side operations, data management, and user authentication, providing a reliable and scalable URL management system.

## Technologies Used
- **Node.js**: Backend JavaScript runtime for server-side operations.
- **Express.js**: Web application framework for managing routes and middleware.
- **MongoDB**: Database for storing user data and URL mappings.
- **EJS (Embedded JavaScript)**: Templating engine for rendering dynamic HTML content.
- **Passport.js**: Authentication middleware to handle secure user login and session management.

## Features
1. **User Authentication**: Supports user registration and login, protecting URL management features with authentication.
2. **URL Shortening**: Creates unique short URLs for long URLs, enabling efficient redirection and easy sharing.
3. **Database Integration**: Stores user credentials and URL mappings in MongoDB for data persistence and scalability.
4. **Dynamic Templating**: Uses EJS to render responsive and interactive web pages.

## Installation Guide

### Prerequisites
- **Node.js** and **npm** installed on your machine
- **MongoDB** instance (local or cloud-based) for storing data

### Steps

1. **Clone the Repository**  
   Clone the repository to your local environment:
   ```bash
   git clone https://github.com/vansh-2905/Short-URL.git
   cd Short-URL
   ```

2. **Install Dependencies**  
   Install the project dependencies:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```
   - Replace `your_mongodb_connection_string` with your MongoDB connection string.
   - Replace `your_session_secret` with a secret key for session handling.

4. **Start the Application**  
   Run the application:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`, where you can access the Short-URL service.

## Usage
- **User Registration and Login**: Register a new user or log in with existing credentials to access URL management features.
- **Create Short URLs**: Enter long URLs to generate unique short links.
- **Manage URLs**: View and manage your URLs within the authenticated interface.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or additional features.
