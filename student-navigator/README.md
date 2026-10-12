# Student Navigator React App

A simple React application that displays a list of student names and allows users to navigate to a student-specific page.

## Features

* Displays a list of student names.
* Clicking a student name navigates to a student-specific page.
* Uses a route parameter to display the selected student's name.
* Uses `useParams()` to read the student name from the URL.
* Uses `useNavigate()` for programmatic navigation.
* Includes a button that automatically navigates to the default student `Riya`.
* Displays:
  `Welcome, [student name]!`

## Technologies Used

* React
* React Router DOM
* JavaScript
* HTML
* CSS

## How It Works

The home page displays:

```text id="y6b9gt"
Student List

• Alexa
• Riya
• Rahul

[ Go to Riya ]
```

When a student name is clicked, the application navigates using a route parameter.

For example:

/student/Alexa
```

The page displays:

Welcome, Alexa!
```

When the **Go to Riya** button is clicked, `useNavigate()` redirects the user to:

/student/Riya
```

The page displays:

Welcome, Riya!
```

## Routing

The application uses the following routes:

```text id="f8c5y1"
/                    → Home page
/student/:name       → Student page
```

The `:name` part is a route parameter.

## How to Run

Open the project folder:

cd C:\REACT-Node.js\student-navigator
```

Install the required packages:

npm install
```

Install React Router if required:

npm install react-router-dom
```

Start the React application:

npm start
```

Open the application in your browser:

http://localhost:3000
```

## Project Structure

student-navigator
├── public
├── src
│   ├── App.js
│   ├── Home.js
│   ├── Student.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## React Concepts Used

* Functional Components
* React Router
* `BrowserRouter`
* `Routes`
* `Route`
* Route Parameters
* `Link`
* `useParams()`
* `useNavigate()`
* Programmatic Navigation
