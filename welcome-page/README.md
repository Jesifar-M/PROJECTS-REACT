# Welcome Page React App

A simple React application that displays a welcome message on the screen and shows a message in the browser console when the page loads for the first time.

## Features

* Displays the message:
  `Hello, user! Welcome to our site.`
* Uses React `useEffect()`.
* Displays the console message:
  `Welcome message displayed.`
* The console message runs only once when the page loads.
* No button is included.
* No user interaction is required.

## Technologies Used

* React
* JavaScript
* HTML
* CSS

## How It Works

When the application loads, the browser displays:

Hello, user! Welcome to our site.

The browser console displays:

Welcome message displayed.

The `useEffect()` hook uses an empty dependency array `[]`, so the console message runs only when the component is initially loaded.

## How to Run

Open the project folder in PowerShell or Command Prompt:

cd C:\REACT-Node.js\welcome-page

Install the required packages:

npm install

Start the React application:

npm start

The application runs on:

http://localhost:3000

Open the following link in your browser:

**http://localhost:3000**

## Expected Browser Output

Hello, user! Welcome to our site.

## Expected Console Output

Open the browser Developer Tools using **F12** and select the **Console** tab.

Welcome message displayed.

The console message should appear only once when the page loads.

## Project Structure

welcome-page
├── public
├── src
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## React Concepts Used

* Functional Component
* `useEffect()`
* Initial component rendering
* Browser Console
* React component lifecycle
