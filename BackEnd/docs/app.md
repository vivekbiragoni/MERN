### Documenting `app.js`

#### Overview
`app.js` is the entry point of your application. It initializes the Express app, sets up middleware, defines routes, and connects to the MongoDB database using Mongoose.

#### Detailed Explanation

1. **Importing Dependencies**
   - `express`: The core framework used for building the web server.
   - `bodyParser`: Middleware for parsing incoming request bodies.
   - `mongoose`: Used for connecting to and working with MongoDB.
   - `dotenv`: Loads environment variables from a `.env` file.
   - `placesRoutes`, `usersRoutes`: Route handlers for different parts of the application.
   - `HttpError`: Custom error handling model.

2. **Configuring Environment Variables**
   - `dotenv.config()`: Loads environment variables from a `.env` file into `process.env`.

3. **Initializing the Express App**
   - `const app = express()`: Creates an instance of the Express application.

4. **Middleware Setup**
   - `app.use(bodyParser.json())`: Parses incoming JSON requests and makes the data available in `req.body`.

5. **Route Handling**
   - `app.use("/api/places", placesRoutes)`: Routes starting with `/api/places` are handled by `placesRoutes`.
   - `app.use("/api/users", usersRoutes)`: Routes starting with `/api/users` are handled by `usersRoutes`.

6. **Handling Undefined Routes**
   - Any request that doesn't match the above routes will fall through to this middleware.
   - Creates a new `HttpError` with a 404 status and throws it.

7. **Error Handling Middleware**
   - `app.use((error, req, res, next) => { ... })`: Handles errors that occur in the app.
     - If the response headers are already sent, it calls the next middleware with the error.
     - Otherwise, it sets the response status to the error code or 500 (internal server error) and returns the error message as JSON.

8. **Connecting to MongoDB and Starting the Server**
   - `mongoose.connect(MONGO_URI)`: Connects to the MongoDB database using the URI from environment variables.
   - On successful connection, the server starts listening on port 5000.
   - If the connection fails, it logs the error to the console.

