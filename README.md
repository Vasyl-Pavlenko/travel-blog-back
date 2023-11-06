# MERN Blog Backend

Welcome to the MERN (MongoDB, Express, React, Node.js) Blog Backend repository! This repository contains the backend code for the MERN blog application. The backend is responsible for handling user authentication, managing blog posts, comments, and image uploads.

## Prerequisites

Before you begin, make sure you meet the following requirements:

- Node.js (v14 or higher) is installed on your machine.
- Access to a MongoDB instance or connection URL.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/vasyl-pavlenko/travel-blog-back.git
cd travel-blog-back
npm install
MONGO_URI=your-mongodb-connection-url
npm start
```

2. The server will start on the specified port (default: 4444) and will be ready to handle API requests.

## Features
#### User authentication (registration, login)
#### CRUD operations for blog posts
#### Adding and retrieving comments for blog posts
#### File uploads for post images

## API Endpoints
### Authentication:
#### POST /api/auth/registration: Register a new user.
#### POST /api/auth/login: Login with existing user credentials.
#### GET /api/auth/me: Retrieve user information (requires authentication).

### Posts:
#### POST /api/posts: Create a new post (requires authentication).
#### GET /api/posts: Retrieve all blog posts.
#### GET /api/posts/:id: Retrieve a specific blog post by its id.
#### PUT /api/posts/:id: Update a blogpost (requires authentication).
#### DELETE /api/posts/:id: Delete a blogpost (requires authentication).
#### GET /api/posts/user/me: Retrieve all posts created by the current user (requires authentication).

### Comments:
#### POST /api/comments/:id: Add a new comment to a blog post (requires authentication).
#### GET /api/comments/:id: Retrieve all comments for a specific blogpost.

### File Upload:
#### POST /api/upload: Upload an image (requires authentication).

## Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request. Please ensure your code follows best practices and includes appropriate tests.

