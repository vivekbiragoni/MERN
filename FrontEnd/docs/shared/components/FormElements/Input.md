### Input.md

### Overview
The `Input.js` file defines a flexible input component that can be either an input field or a textarea, with built-in validation and state management using a reducer.

### Import Statements
```javascript
import React, { useEffect, useReducer } from "react";
import "./Input.css";
import { validate } from "../../util/validators";
```
- **React**: Core library for building the user interface.
- **CSS**: Styles specific to the `Input` component.
- **Validation**: Custom validation function for input values.

### Reducer Function
The `inputReducer` function handles state changes for the input component:
- **CHANGE**: Updates the input value and its validity.
- **TOUCH**: Marks the input as touched.

### Component State
The component uses a `useReducer` hook for state management:
- **value**: Current value of the input field.
- **isValid**: Boolean indicating if the current value is valid.
- **isTouched**: Boolean indicating if the input field has been touched.

### Props Destructuring
Destructures the `id` and `onInput` props, as well as the `value` and `isValid` state values.

### useEffect Hook
Synchronizes the parent component with the input state whenever the `id`, `value`, or `isValid` changes.

### Event Handlers
- **changeHandler**: Dispatches a "CHANGE" action to update the value and validity.
- **touchHandler**: Dispatches a "TOUCH" action to mark the input as touched.

### JSX Structure
- **Element**: Conditionally renders an `input` or `textarea` element based on the `element` prop.
- **Form Control**: Wraps the input/textarea element with a `div` that conditionally applies an invalid class.
- **Label**: Associates the input with a label for accessibility.
- **Error Message**: Displays an error message if the input is invalid and touched.

### Example Usage
```javascript
<Input
  element="input"
  id="email"
  type="email"
  label="E-Mail"
  validators={[VALIDATOR_EMAIL()]}
  errorText="Please enter a valid email address."
  onInput={inputHandler}
/>
<Input
  element="textarea"
  id="description"
  rows={5}
  label="Description"
  validators={[VALIDATOR_REQUIRE()]}
  errorText="Please enter a description."
  onInput={inputHandler}
/>
```

### Dependencies
- React library
- Custom validation utility (`validators`)
- CSS for styling (`Input.css`)

### Flow in the Larger Project
- **Reusable Component**: The `Input` component is used throughout the application for various forms, providing consistent validation and styling.
- **Parent Synchronization**: The component ensures that its state changes are communicated to parent components through the `onInput` prop.

---

