# blog-api-nodejs
# blog-api
# blog-api

# Blog-Api with node.js, express, monngoDB.

simple RESTful API to create, get, update, and delete blog posts using node.js, express, and mongodb.


Project Structure :-

blog-api-nodejs/
|-- controller/ postController.js #handles logic 
|-- models/postModel.js # Mongoose schema
|--routers/postRouter.js # Route definitions for API endpoints
|-- .env #mongodb_url
|-- index.js # Main server setup
|--package.json # Project metadata and dependencies
|--README.md # Project documentation
|--package-lock.json 


## Features
- Create a blog post
- Fetch all posts or a single post by ID
- Update a post by ID
- Delete a post by ID

## API Endpoints
Method | Endpoint         | Description              

POST   | `/create`        | Create a new post        
GET    | `/get`           | Get all posts            
GET    | `/get/:id`       | Get a single post by ID  
PUT    | `/update/:id`    | Update a post by ID      
DELETE | `/delete/:id`    | Delete a post by ID      

## Post Schema

{
  "title": "Post Title",
  "content": "Post content",
  "author": "Author name",
  "tags": ["tag1", "tag2"]
}

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- Nodemon (for development)