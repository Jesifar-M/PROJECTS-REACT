# User Authentication App

A simple React.js authentication application that allows users to register and log in using a REST API.

## Features

* User Registration
* User Login
* Name, Email and Password fields
* Registration success alert
* Automatic navigation to Login page after registration
* Login success alert
* Login error message
* Displays login token in the browser console
* Bootstrap responsive design

## Technologies Used

* React.js
* JavaScript
* Bootstrap
* React Router DOM
* REST API
* HTML
* CSS

## API Endpoints

### Register

**POST**
`https://worksheet-auth.mashupstack.com/register`

Request body:

```json
{
  "user_name": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "Password123"
}
```

### Login

**POST**
`https://worksheet-auth.mashupstack.com/login`

Request body:

```json
{
  "email": "johndoe@gmail.com",
  "password": "Password123"
}
```

## Project Structure

```text
auth-app/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── Register.js
│   ├── Login.js
│   └── index.js
│
├── package.json
└── README.md
```

## Installation

Open CMD and run:

```bash
cd C:\REACT-Node.js\auth-app
npm install
```

If required, install the packages:

```bash
npm install bootstrap react-router-dom
```

## Run the Project

```bash
npm start
```

The application will open in the browser.

## How It Works

### Registration

1. Enter Name, Email and Password.
2. Click **Register**.
3. The details are sent to the Register API.
4. If registration is successful, an **"Registration Successful"** alert is displayed.
5. The user is automatically redirected to the Login page.

### Login

1. Enter the registered Email and Password.
2. Click **Login**.
3. The details are sent to the Login API.
4. If login is successful, a **"Successfully Logged In"** alert is displayed.
5. The received authentication token is printed in the browser console.

## Error Handling

If registration or login fails, an error message is displayed on the page.

## Author

Jesifar M
