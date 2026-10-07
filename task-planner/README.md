# React Task Planner

A simple React Task Planner application that allows users to add tasks and display them in a task list.

## Features

* Add a task using an input field.
* Display added tasks in a list.
* Uses two React components:

  * `App.js` — Parent component
  * `TaskList.js` — Child component
* Displays the initial message:
  `Add a task to get started!`
* Displays a message after adding a task:
  `Task added: [task name]!`
* Clears the input after adding a task.
* Changes the heading background color to light blue after adding a task.
* Uses Bootstrap for styling.

## Technologies Used

* React
* JavaScript
* Bootstrap
* HTML
* CSS

## How to Run

Install the required packages:

npm install

Start the React application:

npm start

Open the application in your browser:

http://localhost:3000

## Project Structure

task-planner
├── public
├── src
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── TaskList.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Example

Initial message:

Add a task to get started!

After adding a task:

Task added: Complete React Assignment!
