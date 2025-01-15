
# Crude Server - User Management

This is a simple CRUD backend server built using ExpressJS and TypeScript, with MongoDB as the database. It includes validation for user input using Joi.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Setup Instructions](#setup-instructions)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Setup MongoDB](#setup-mongodb)
   - [Configure Environment Variables](#configure-environment-variables)
   - [Run the Server](#run-the-server)
4. [Endpoints](#endpoints)
5. [Development Scripts](#development-scripts)
6. [Validation](#validation)
7. [Error Handling](#error-handling)
8. [Dependencies](#dependencies)
9. [Example API Usage](#example-api-usage)
   - [Create a User (POST /api/users)](#create-a-user-post-apiousers)
   - [Get All Users (GET /api/users)](#get-all-users-get-apiousers)
   - [Update a User (PUT /api/users:id)](#update-a-user-put-apiousersid)
   - [Delete a User (DELETE /api/users:id)](#delete-a-user-delete-apiousersid)
10. [Troubleshooting](#troubleshooting)
   - [MongoDB Connection Error](#mongodb-connection-error)
   - [Validation Errors](#validation-errors)
   - [500 Server Errors](#500-server-errors)

## Project Structure

```plaintext
crude-server/
├── src/
│   ├── app.ts                # Express app initialization
│   ├── db/
│   │   └── connection.ts     # MongoDB connection setup
│   ├── routes/
│   │   └── user.routes.ts    # Routes for user CRUD
│   ├── controllers/
│   │   └── user.controller.ts # User CRUD logic
│   ├── models/
│   │   └── user.model.ts     # Mongoose schema and model
│   ├── services/
│   │   └── user.service.ts   # User service for handling CRUD operations
│   ├── validate/
│   │   └── user.validation.ts # Validation schema for user
├── package.json
├── tsconfig.json
└── README.md
```
## Features

- **Create a User:** Allows users to add a new user with a name, email, and optional age.
- **Get All Users:** Fetches a list of all users.
- **Get User By ID:** Fetches a user by their unique ID.
- **Update User:** Allows updating a user's details (name, email, age).
- **Delete User:** Allows deleting a user by their ID.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd crude-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup MongoDB:
   - Install MongoDB and start the MongoDB server.
   - Create a database named `crude-server` by default or change it in the `.env` file.

4. Configure Environment Variables:
   Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/crud-server?readPreference=primary&directConnection=true&ssl=false
   ```

5. Run the server:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

6. Endpoints:
   - `POST /api/users` - Create a user. Requires `name`, `email`, and optional `age`.
   - `GET /api/users` - List all users.
   - `GET /api/users/:id` - Get a specific user by ID.
   - `PUT /api/users/:id` - Update a user. Requires at least one of `name`, `email`, or `age`.
   - `DELETE /api/users/:id` - Delete a user by ID.

## Development Scripts

- `npm run dev` - Starts the server in development mode using `nodemon`.
- `npm start` - Runs the compiled JavaScript (production mode).

## Validation

This server uses Joi for validating user input:
- **Create User** (`POST /api/users`): Requires `name` (string, min length 3), `email` (valid email format), and optional `age` (number, greater than or equal to 0).
- **Update User** (`PUT /api/users/:id`): Allows partial updates, validating `name`, `email`, and `age` with the same criteria as creating a user.

## Error Handling

- 400 Bad Request: Invalid input data (e.g., missing required fields or incorrect format).
- 404 Not Found: Resource not found (e.g., user with the provided ID does not exist).
- 500 Internal Server Error: Server-side errors (e.g., database connection failure).

## Dependencies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB ODM for managing data in MongoDB.
- **Joi**: Input validation library.
- **TypeScript**: TypeScript for type safety and better development experience.
- **Nodemon** (optional for development): Tool to automatically restart the server when files change.

## Example API Usage

1. **Create a User (POST /api/users)**
   Request Body:
   ```json
   {
     "name": "John Doe",
     "email": "john.doe@example.com",
     "age": 30
   }
   ```

   Response:
   ```json
   {
      "message": "User created successfully"
   }
   ```

2. **Get All Users (GET /api/users)**
   Response:
   ```json
   [
     {
       "_id": "60f8c8d9e4b0e84cda6479a2",
       "name": "John Doe",
       "email": "john.doe@example.com",
       "age": 30
     },
     {
       "_id": "60f8c8d9e4b0e84cda6479a3",
       "name": "Jane Doe",
       "email": "jane.doe@example.com",
       "age": 25
     }
   ]
   ```

3. **Update a User (PUT /api/users/:id)**
   Request Body:
   ```json
   {
     "name": "John Smith"
   }
   ```

   Response:
   ```json
   {
     "message": "User updated successfully",
     "updatedUser": {
         "_id": "60f8c8d9e4b0e84cda6479a2",
         "name": "John Smith",
         "email": "john.doe@example.com",
         "age": 30
     }
   }
   ```

4. **Delete a User (DELETE /api/users/:id)**
   Response:
   ```json
   {
     "message": "User deleted successfully"
   }
   ```

## Troubleshooting

1. **MongoDB Connection Error**: 
   Ensure that your MongoDB server is running and accessible. You can verify the connection in the `database.ts` file by checking the `MONGO_URI` variable.

2. **Validation Errors**: 
   If you're getting validation errors, double-check that the request body follows the required structure (e.g., correct types for `name`, `email`, and `age`).

3. **500 Server Errors**: 
   Check server logs for more detailed error messages, which might point to issues with database queries or unexpected bugs in the code.