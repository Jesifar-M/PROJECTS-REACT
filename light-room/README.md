# Light Room React App

A simple React application that demonstrates communication between a parent component and a child component using a light switch.

## Features

* Uses two React components:

  * `Room` — Parent component
  * `LightSwitch` — Child component
* Displays whether the room is bright or dark.
* Includes a button to turn the light ON or OFF.
* Button text changes between `Turn ON` and `Turn OFF`.
* Room status updates when the button is clicked.

## How It Works

Initially, the room is dark:


The room is dark

[ Turn ON ]


When **Turn ON** is clicked:


The room is bright

[ Turn OFF ]


When **Turn OFF** is clicked:


The room is dark

[ Turn ON ]


## Technologies Used

* React
* JavaScript
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

light-room
├── public
├── src
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── Room.js
│   └── LightSwitch.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

