# User Authentication System

A basic React.js user authentication system with separate Register and Login pages.

## Features

* User Registration
* User Login
* Name, Email, Password and Confirm Password fields
* Password and Confirm Password validation
* Registration API integration
* Login API integration
* Registration success alert
* Automatic redirect to Login page after registration
* Login success alert
* Login token displayed in the browser console
* Error message handling
* Responsive Bootstrap design
* Navbar available on both pages
* Register and Login navigation links
* Hover effect for Navbar links

## Technologies Used

* React.js
* JavaScript
* Bootstrap
* React Router DOM
* REST API
* HTML
* CSS

## API Endpoints

### Register API

**POST**

`https://worksheet-auth.mashupstack.com/register`

Request:

```json
{
  "user_name": "Alex",
  "email": "Alex@gmail.com",
  "password": "Alex1@23"
}
```

### Login API

**POST**

`https://worksheet-auth.mashupstack.com/login`

Request:

```json
{
  "email": "johndoe@gmail.com",
  "password": "Password123"
}
```

## Project Structure

```text
user-auth-system/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── Navbar.js
│   ├── Register.js
│   ├── Login.js
│   └── index.js
│
├── package.json
└── README.md
```

## Installation

Open Command Prompt and run:

```bash
cd C:\REACT-Node.js\user-auth-system
npm install
```

Install required packages:

```bash
npm install react-router-dom bootstrap
```

## Run the Project

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## Register Page

The Register page collects:

* Name
* Email
* Password
* Confirm Password

If the Password and Confirm Password do not match, an error message is displayed.

If registration is successful:

```text
Registration Successful
```

The user is automatically redirected to the Login page.

## Login Page

The Login page collects:

* Email
* Password

If login is successful:

```text
Successfully Logged In
```

The received authentication token is printed in the browser console.

To view the token:

1. Open the browser.
2. Press **F12**.
3. Select **Console**.
4. Check the token output.

## Navbar

The Navbar is visible on both Register and Login pages.

It contains:

* Register
* Login

Navbar styling:

* Dark background
* White text
* Hover color effect on links

## Testing

### Registration Test

Example:

```text
Name: Alex
Email: alex2026test@gmail.com
Password: Alex1@23
Confirm Password: Alex1@23
```

Expected result:

```text
Registration Successful
```

The application redirects to the Login page.

### Password Mismatch Test

Example:

```text
Password: Alex1@23
Confirm Password: Alex123
```

Expected result:

```text
Password and Confirm Password do not match
```

### Login Test

Use the registered email and password.

Expected result:

```text
Successfully Logged In
```

The login token is displayed in the browser console.

## Author

Jesifar M
