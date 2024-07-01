### PlaceItem Component Overview

The `PlaceItem` component is responsible for rendering each individual place item with its details, actions, and modals for map view and deletion confirmation.

#### Key Functionalities:

1. **State Management:**
   - Uses `useState` to manage the visibility of the map (`showMap`) and deletion confirmation modal (`showConfirmModal`).

2. **Modal Handling:**
   - **Map Modal (`showMap`):** Opens a modal to display the map with the place's coordinates when "View on Map" button is clicked. Uses the `Map` component from `../../shared/components/UIElements/Map`.
   - **Deletion Confirmation Modal (`showConfirmModal`):** Prompts the user to confirm deletion of the place when "Delete" button is clicked. Offers options to confirm or cancel the action.

3. **Context Usage:**
   - Utilizes `useContext` to access authentication state (`auth`) from `AuthContext` (`../../shared/context/auth-context`). Determines whether certain actions (like editing or deleting) should be available based on the user's login status (`auth.isLoggedIn`).

4. **Event Handlers:**
   - **openMapHandler:** Sets `showMap` to true, displaying the map modal.
   - **closeMapHandler:** Sets `showMap` to false, closing the map modal.
   - **showDeleteWarningHandler:** Sets `showConfirmModal` to true, prompting the user to confirm deletion.
   - **cancelDeleteHandler:** Sets `showConfirmModal` to false, canceling the deletion action.
   - **confirmDeleteHandler:** Logs a message to console indicating deletion (for demonstration purposes).

5. **Rendering:**
   - Displays place details (`title`, `address`, `description`, `image`) within a `Card` component (`../../shared/components/UIElements/Card`).
   - Provides action buttons (`View on Map`, `Edit`, `Delete`) conditionally based on user authentication status (`auth.isLoggedIn`).

### How It Fits in Your Project:

- **Purpose:** Renders each place item with its details and provides interactive actions for viewing on map, editing (if authenticated), and deleting (if authenticated).
- **Integration:** Integrates with modals (`Modal` component) to enhance user interaction and provide visual feedback for map view and deletion confirmation.
- **User Interaction:** Offers clear actions (`View on Map`, `Edit`, `Delete`) that enhance usability and engagement, with confirmation dialogs for critical actions like deletion.
- **Authentication:** Utilizes authentication context (`AuthContext`) to conditionally display actions based on user login status (`auth.isLoggedIn`).

This component enhances user experience by providing comprehensive functionality to interact with and manage individual places, integrating seamlessly with authentication for secure operations like editing and deletion.