# React Native: Unhandled Promise Rejection: Cannot read properties of null (reading 'name')

This repository demonstrates a common React Native error: attempting to access a property of a state variable before it has been initialized.  The error message is typically 'Unhandled Promise Rejection: Cannot read properties of null (reading 'name')' or similar.

The `bug.js` file contains code that reproduces this issue.  The `bugSolution.js` file shows how to fix it using conditional rendering and the optional chaining operator.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
4. Observe the error in the console.

## How to Fix the Bug

Refer to the `bugSolution.js` file for the corrected code.  The solution handles the case where the data is still null by checking its value before attempting to access properties.