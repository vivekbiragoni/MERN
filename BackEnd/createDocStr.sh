#!/bin/bash

# Create the main docs folder if it doesn't exist
mkdir -p docs

# Create the README.md and app.md files in the docs folder
touch docs/README.md
touch docs/app.md

# Create the Controllers folder and its .md files
mkdir -p docs/Controllers
touch docs/Controllers/places-controllers.md
touch docs/Controllers/users-controllers.md

# Create the Model folder and its .md files
mkdir -p docs/Model
touch docs/Model/http-error.md
touch docs/Model/place.md
touch docs/Model/user.md

# Create the routes folder and its .md files
mkdir -p docs/routes
touch docs/routes/places-routes.md
touch docs/routes/users-routes.md

# Create the util folder and its .md file
mkdir -p docs/util
touch docs/util/location.md

# Notify the user that the script has finished running
echo "Documentation structure created successfully!"
