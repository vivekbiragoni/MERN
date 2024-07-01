#!/bin/bash

# Create directories
mkdir -p docs/places/components
mkdir -p docs/places/pages
mkdir -p docs/shared/components/FormElements
mkdir -p docs/shared/components/Navigation
mkdir -p docs/shared/components/UIElements
mkdir -p docs/shared/context
mkdir -p docs/shared/hooks
mkdir -p docs/shared/util
mkdir -p docs/user/components
mkdir -p docs/user/pages

# Create files
touch docs/README.md
touch docs/App.md
touch docs/index.md
touch docs/places/components/PlaceItem.md
touch docs/places/components/PlaceList.md
touch docs/places/pages/NewPlaces.md
touch docs/places/pages/UpdatePlace.md
touch docs/shared/components/FormElements/Button.md
touch docs/shared/components/FormElements/Input.md
touch docs/shared/components/Navigation/MainHeader.md
touch docs/shared/components/Navigation/MainNavigation.md
touch docs/shared/components/Navigation/NavLinks.md
touch docs/shared/components/Navigation/SideDrawer.md
touch docs/shared/components/UIElements/Avatar.md
touch docs/shared/components/UIElements/Backdrop.md
touch docs/shared/components/UIElements/Card.md
touch docs/shared/components/UIElements/Map.md
touch docs/shared/components/UIElements/Modal.md
touch docs/shared/context/auth-context.md
touch docs/shared/hooks/form-hook.md
touch docs/shared/util/validators.md
touch docs/user/components/UserItem.md
touch docs/user/components/UsersList.md
touch docs/user/pages/Auth.md
touch docs/user/pages/User.md

echo "Folder structure and files created successfully."
