### Documentation for `users-routes.js`

#### Overview
The `users-routes.js` file defines the API routes related to user management in the application using Express.js. It handles HTTP requests for retrieving users, user sign-up, and user login.

#### Detailed Explanation

1. **Imports**:
   - `express`: Framework for building web applications with Node.js.
   - `express-validator/check`: Middleware for validating and sanitizing input data.
   - Controllers: Imported functions (`getUsers`, `signup`, `login`) from `users-controllers.js` to handle specific route operations.

2. **Router Initialization**:
   - `const router = express.Router()`: Creates an instance of an Express router to define routes.

3. **Route Definitions**:
   - **GET `/api/users`**:
     - Route to retrieve all users.
     - Uses `getUsers` function from `users-controllers.js`.
   
   - **POST `/api/users/signup`**:
     - Route to register a new user.
     - Validates incoming request body fields (`name`, `email`, `password`) using `express-validator`.
     - Uses `signup` function from `users-controllers.js` to handle user registration.
   
   - **POST `/api/users/login`**:
     - Route for user login.
     - Validates incoming request body fields (`email`, `password`) using `express-validator`.
     - Uses `login` function from `users-controllers.js` to handle user authentication.

4. **Export Router**:
   - `export default router`: Exports the configured Express router instance to be used by the main application.

In this file:
- The routes are defined using `express.Router()` and associated with their respective controller functions.
- Input data validation is performed using `express-validator` middleware to ensure that required fields (`name`, `email`, `password`) are present and meet specified criteria (`email` is normalized and validated as an email address, `password` must be at least 8 characters long).
- Each route specifies the HTTP method (`GET`, `POST`) and the corresponding controller function (`getUsers`, `signup`, `login`) to handle business logic and user authentication.
- The router instance is exported to be integrated into the main Express application for handling requests related to user management.