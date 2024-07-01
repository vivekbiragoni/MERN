

# Frontend Documentation

## Overview

This project is a front-end application built using React.js for managing and displaying places with location information. It includes various components and pages that interact to provide a user-friendly interface.

## Components

### 1. **Input Component**
- **Location:** `src/shared/components/FormElements/Input.js`
- **Purpose:** Renders input fields and text areas with validation support.
- **Usage:** Used in forms across the application for user input validation.

### 2. **Button Component**
- **Location:** `src/shared/components/FormElements/Button.js`
- **Purpose:** Renders interactive buttons with customizable styles.
- **Usage:** Used for actions such as form submissions and navigation.

### 3. **Card Component**
- **Location:** `src/shared/components/UIElements/Card.js`
- **Purpose:** Renders cards with structured content.
- **Usage:** Used to display formatted content with consistent styling.

### 4. **Modal Component**
- **Location:** `src/shared/components/UIElements/Modal.js`
- **Purpose:** Provides modals for displaying overlays with dynamic content.
- **Usage:** Used for displaying maps, deletion confirmations, and other modal interactions.

### 5. **Map Component**
- **Location:** `src/shared/components/UIElements/Map.js`
- **Purpose:** Integrates OpenLayers to display maps with markers.
- **Usage:** Used to visualize place locations and provide interactive map views.

### 6. **PlaceItem Component**
- **Location:** `src/places/components/PlaceItem.js`
- **Purpose:** Renders individual place details with actions.
- **Usage:** Used in lists to display each place's information and allow actions like viewing on map and deletion.

### 7. **PlaceList Component**
- **Location:** `src/places/components/PlaceList.js`
- **Purpose:** Renders a list of places or a message if no places are found.
- **Usage:** Displays a list of places fetched from the backend and provides options to create new places.

### 8. **NewPlace Component**
- **Location:** `src/places/pages/NewPlace.js`
- **Purpose:** Provides a form for creating new places with validation.
- **Usage:** Used to collect user input for creating new place entries.

### 9. **UpdatePlace Component**
- **Location:** `src/places/pages/UpdatePlace.js`
- **Purpose:** Provides a form for updating existing places with pre-filled data.
- **Usage:** Used to edit and update place details fetched from the backend.

### 10. **UserPlaces Component**
- **Location:** `src/places/pages/UserPlaces.js`
- **Purpose:** Displays a list of places created by a specific user.
- **Usage:** Shows places associated with a user profile and provides navigation to edit or delete them.

## Pages

### 1. **Main Navigation**
- **Location:** `src/shared/components/Navigation/MainNavigation.js`
- **Purpose:** Provides navigation links to different sections of the application.
- **Usage:** Facilitates easy access to the main features and pages of the application.

### 2. **Authentication Context**
- **Location:** `src/shared/context/auth-context.js`
- **Purpose:** Manages user authentication state across the application.
- **Usage:** Determines access rights to certain features based on user login status.

## Routing

- **Location:** `src/App.js`
- **Purpose:** Defines routes for different pages and components using React Router.
- **Usage:** Handles navigation and renders components based on the current URL path.

## State Management

- **Location:** `src/shared/hooks/form-hook.js`, `src/shared/hooks/auth-hook.js`
- **Purpose:** Custom hooks for managing form state and authentication state.
- **Usage:** Provides reusable logic for handling form input and authentication processes.

## Integration

- **Components Integration:** Components like `Input`, `Button`, `Card`, `Modal`, `Map`, `PlaceItem`, and `PlaceList` are integrated to provide a cohesive user interface for managing places.
- **Pages Navigation:** Pages like `NewPlace`, `UpdatePlace`, `UserPlaces`, and `PlaceList` are linked through navigation components and routing to ensure seamless transitions between different views.


---

