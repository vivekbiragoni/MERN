
# Backend Overview

Welcome to the backend documentation of our MERN application! This document will guide you through the structure, key components, and operations of the backend codebase.

## Table of Contents

1. [Introduction](#introduction)
2. [Folder Structure](#folder-structure)
3. [Key Components](#key-components)
   - [app.js](#appjs)
   - [Controllers](#controllers)
   - [Models](#models)
   - [Routes](#routes)
   - [Utilities](#utilities)
4. [Database](#database)
5. [Error Handling](#error-handling)
6. [API Documentation](#api-documentation)
   - [Places Endpoints](#places-endpoints)
   - [Users Endpoints](#users-endpoints)
7. [Environment Variables](#environment-variables)
8. [Running the Backend](#running-the-backend)
9. [Conclusion](#conclusion)

---

## Introduction

Our backend is built using Node.js, Express.js, and MongoDB (via Mongoose). It provides a RESTful API to manage places and user data for our MERN application. This README aims to explain how each part of the backend works together to deliver the required functionality.

---

## Folder Structure

```
/backend
│
├── app.js
├── Controllers
│   ├── places-controllers.js
│   └── users-controllers.js
├── docs
│   ├── README.md
│   ├── app.md
│   ├── places
│   │   ├── getPlaceById.md
│   │   ├── getPlacesByUserId.md
│   │   ├── createPlace.md
│   │   ├── updatePlaceById.md
│   │   └── deletePlaceById.md
│   └── users
│       ├── getUsers.md
│       ├── signup.md
│       └── login.md
├── Models
│   ├── http-error.js
│   ├── place.js
│   └── user.js
├── routes
│   ├── places-routes.js
│   └── users-routes.js
└── util
    └── location.js
```

### Explanation:
- **app.js**: Entry point of the backend, sets up middleware, connects to MongoDB, and starts the server.
- **Controllers**: Contains functions handling business logic for places and users.
- **Models**: Defines schemas for Place and User using Mongoose.
- **Routes**: Defines API endpoints and associates them with controller functions.
- **Utilities**: Contains helper functions like `getCoordsForAddress` for geocoding addresses.

---

## Key Components

### app.js

`app.js` is the heart of our backend application. It initializes Express, sets up middleware, defines routes, and connects to MongoDB using Mongoose.

### Controllers

Controllers (`places-controllers.js` and `users-controllers.js`) contain the business logic for handling requests related to places and users, respectively. They interact with models to perform CRUD operations and manage data flow.

### Models

Models (`place.js` and `user.js`) define the schemas for Place and User using Mongoose's schema definition. They represent how data is structured in the MongoDB database.

### Routes

Routes (`places-routes.js` and `users-routes.js`) define the API endpoints for places and users using Express Router. They validate incoming requests, call corresponding controller functions, and return responses to clients.

### Utilities

Utilities (`location.js`) contain helper functions such as `getCoordsForAddress`, which interacts with external APIs (like Google Maps Geocoding API) to fetch coordinates based on an address.

---

## Database

The backend uses MongoDB as the database, managed through Mongoose. Each collection (places and users) corresponds to a model schema defined in the `Models` directory. MongoDB stores data persistently, allowing efficient retrieval and manipulation.

---

## Error Handling

Errors are managed using custom error handling (`http-error.js`) and middleware in `app.js`. HTTP errors with specific status codes (`404`, `422`, `500`) are generated and returned to clients when operations fail or conditions aren't met.

---

## API Documentation

### Places Endpoints

- **GET `/api/places/:pid`**: Retrieves a specific place by its ID.
- **GET `/api/places/user/:uid`**: Retrieves all places created by a specific user.
- **POST `/api/places`**: Creates a new place.
- **PATCH `/api/places/:pid`**: Updates a specific place by its ID.
- **DELETE `/api/places/:pid`**: Deletes a specific place by its ID.

### Users Endpoints

- **GET `/api/users`**: Retrieves all users.
- **POST `/api/users/signup`**: Registers a new user.
- **POST `/api/users/login`**: Authenticates and logs in a user.

---

## Environment Variables

Environment variables, managed through a `.env` file, store sensitive data such as API keys (`API_KEY`) and database connection URI (`MONGO_URI`). They are loaded using `dotenv` for security and configuration purposes.

---

## Running the Backend

To run the backend:
1. Ensure Node.js and MongoDB are installed.
2. Clone the repository and navigate to the backend directory.
3. Install dependencies using `npm install`.
4. Set up a `.env` file with required variables (`API_KEY`, `MONGO_URI`).
5. Start the server with `npm start`.

