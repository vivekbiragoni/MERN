### Documenting `users-controllers.js`

#### Overview
`users-controllers.js` contains the logic for handling user-related operations such as fetching users, user sign-up, and user login. It interacts with the `User` model using Mongoose for MongoDB operations and handles validation using `express-validator`.

#### Detailed Explanation

1. **Importing Dependencies**
   - `validationResult`: From `express-validator`, used for validating request data.
   - `HttpError`: Custom error handling model.
   - `User`: Mongoose model representing the `User` schema.

2. **getUsers**
   - **Purpose**: Fetch all users from the database.
   - **Parameters**: `req` (request), `res` (response), `next` (next middleware).
   - **Process**:
     - Uses `User.find({}, "-password")` to exclude the password field.
     - Returns users as JSON if found, or throws an error if fetching fails.

3. **signup**
   - **Purpose**: Register a new user.
   - **Parameters**: `req`, `res`, `next`.
   - **Process**:
     - Validates incoming request data using `validationResult`.
     - Checks if a user with the same email already exists.
     - Creates a new `User` object with provided `name`, `email`, `password`, and default image and places.
     - Saves the new user to the database.
     - Returns the created user as JSON on success, or throws an error if saving fails.

4. **login**
   - **Purpose**: Authenticate an existing user.
   - **Parameters**: `req`, `res`, `next`.
   - **Process**:
     - Validates incoming request data using `validationResult`.
     - Finds the user by `email`.
     - Compares the provided `password` with the stored password.
     - Returns a success message if authentication is successful, or throws an error if credentials are incorrect.

### Key Concepts
- **Mongoose Models**: `User` model is used for interacting with user data in MongoDB.
- **Error Handling**: Custom `HttpError` is used to handle errors and send appropriate responses.
- **Validation**: `express-validator` is used to validate incoming request data, ensuring data integrity and security.

These controllers manage user-related operations, ensuring secure authentication, registration, and retrieval of user data from the database.