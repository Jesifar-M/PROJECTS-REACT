# Student List Management App

A simple React Single Page Application (SPA) for managing a list of students.

The application allows users to add, edit, delete, and search students using a table format.

## Features

* Add new students
* Enter student name, roll number, and class
* Validate that all fields are filled
* Prevent duplicate roll numbers
* Automatically generate student ID
* Display students in a table
* Edit student name, roll number, and class inline
* Save or cancel student changes
* Validate edited student information
* Delete students
* Search students by name
* Case-insensitive search
* Display "No students found" when there are no matching students
* Bootstrap styling
* React state management using `useState`

## Student Information

Each student contains:

```text
ID
Student Name
Roll Number
Class
```

## Add a Student

The application provides a form with:

```text
Student Name
Roll Number
Class
```

Clicking the **Add Student** button adds the student to the list.

The form fields are cleared after successfully adding a student.

All fields are required, and duplicate roll numbers are not allowed.

## Edit a Student

Each student has an **Edit** button.

Clicking Edit changes the student information into input fields.

The following buttons are displayed:

```text
Save
Cancel
```

Save updates the student information, while Cancel discards the changes.

All edited fields must contain values, and the roll number must remain unique.

## Delete a Student

Each student has a **Delete** button.

Clicking Delete immediately removes the student from the list.

## Search Students

A search input is available above the table.

Students are filtered by **student name**.

The search is **case-insensitive** and updates in real time.

If no students match the search term, the application displays:

```text
No students found
```

## Technologies Used

* React
* JavaScript
* Bootstrap
* HTML
* CSS

## Project Structure

```text
student-list-management
│
├── public
│
├── src
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Open the project folder:

```text
cd C:\REACT-Node.js\student-list-management
```

Install the required packages:

```text
npm install
```

Install Bootstrap:

```text
npm install bootstrap
```

## Run the Application

Start the React development server:

```text
npm start
```

The application will open in the browser.

Usually:

```text
http://localhost:3000
```

If port 3000 is already in use, React may use another port such as `3001` or `3002`.

Use the URL shown in the terminal.

## Expected Output

```text
Student List Management App

Add New Student

Student Name
Roll Number
Class

[ Add Student ]

Search Students

ID | Student Name | Roll Number | Class | Actions
```

When there are no students:

```text
No students found
```

## React Concepts Used

* Functional Components
* `useState`
* Event Handling
* Array `map()`
* Array `filter()`
* Array `some()`
* Form Handling
* Conditional Rendering
* Bootstrap Classes
* Real-time Search
* Inline Editing
