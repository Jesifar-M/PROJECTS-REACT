# Personal Website React App

A simple React personal website with three pages: **Home, About, and Contact**.

The website uses **React Router** for navigation and **Bootstrap** for styling.

## Features

* Personal Website Navbar
* Home, About, and Contact navigation links
* Active page highlighted in the Navbar
* Three separate page components
* React Router navigation
* Bootstrap card design
* Show Enthusiasm button on every page
* Updates the message using `document.getElementById()`
* Changes the heading background color to lightblue

## Pages

### Home Page

Displays:

```text
This is the Home Page
```

### About Page

Displays:

```text
This is the About Page
```

### Contact Page

Displays:

```text
This is the Contact Page
```

## Button Functionality

Each page contains a **Show Enthusiasm** button.

Initially, the page displays:

```text
Click the button to see my enthusiasm!
```

When the button is clicked, the message changes to:

```text
Hello from React! I love this page!
```

The heading background also changes to **lightblue**.

The update is done using:

```javascript
document.getElementById()
```

## Navbar

The Navbar contains:

```text
Personal Website                         Home   About   Contact
```

The navigation links use React Router's `NavLink`.

The active page is highlighted using CSS:

```css
.nav-link.active {
  color: blue !important;
  font-weight: bold;
}
```

## Routing

Routing is configured in:

```text
router.js
```

The routes are:

```text
/          → Home
/about     → About
/contact   → Contact
```

React Router is used to navigate between the pages without reloading the website.

## Technologies Used

* React
* JavaScript
* React Router DOM
* Bootstrap
* HTML
* CSS

## Project Structure

```text
personal-website
│
├── public
│
├── src
│   ├── App.js
│   ├── App.css
│   ├── Navbar.js
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   ├── router.js
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
cd C:\REACT-Node.js\personal-website
```

Install the required packages:

```text
npm install
```

If required, install React Router and Bootstrap:

```text
npm install react-router-dom
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

## Expected Home Page

```text
This is the Home Page

[ Show Enthusiasm ]

Click the button to see my enthusiasm!
```

After clicking the button:

```text
Hello from React! I love this page!
```

The heading background changes to lightblue.

## Expected About Page

```text
This is the About Page

[ Show Enthusiasm ]

Click the button to see my enthusiasm!
```

## Expected Contact Page

```text
This is the Contact Page

[ Show Enthusiasm ]

Click the button to see my enthusiasm!
```

## React Concepts Used

* Functional Components
* React Router
* `BrowserRouter`
* `Routes`
* `Route`
* `NavLink`
* `document.getElementById()`
* Event Handling
* Bootstrap Classes
* CSS Act
