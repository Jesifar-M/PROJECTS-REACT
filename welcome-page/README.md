# Welcome Page React App

A simple React application that displays a welcome message and shows a message in the browser console when the page loads for the first time.

## Features

* Displays the message:
  `Hello, user! Welcome to our site.`
* Uses React `useEffect()`.
* Displays the console message:
  `Welcome message displayed.`
* The console message runs only once when the page loads.
* No buttons or user interaction are used.

## Technologies Used

* React
* JavaScript
* HTML
* CSS

## How It Works

When the page loads, the screen displays:

Hello, user! Welcome to our site.

The browser console displays:

Welcome message displayed.

The `useEffect()` hook uses an empty dependency array `[]`, so the console message runs only once when the component is initially loaded.

## How to Run

Open the project folder in the terminal:

cd C:\REACT-Node.js\welcome-page

Install the required packages:

npm install

Start the React application:

npm start

Open the application in your browser:

http://localhost:3000

To view the console message, open the browser Developer Tools using **F12** and select the **Console** tab.

## Expected Browser Output

Hello, user! Welcome to our site.

## Expected Console Output

Welcome message displayed.

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

* `useEffect()`
* Functional Component
* Initial component rendering
* Browser Console
* React component lifecycle
