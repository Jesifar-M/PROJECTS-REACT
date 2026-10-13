# Book List Management App

A simple React Single Page Application (SPA) for managing a collection of books.

The application allows users to add, edit, delete, and search books using a user-friendly table.

## Features

* Add new books
* Enter book name, author name, and publish date
* Prevent empty book names
* Automatically generate book ID
* Display books in a table
* Edit book names inline
* Save or cancel book name changes
* Delete books
* Search books by book name or author name
* Case-insensitive search
* Display "No books found" when there are no matching books
* Bootstrap styling
* React functional components
* React state management using `useState`

## Book Information

Each book contains:

```text id="l4rjcv"
ID
Book Name
Author Name
Publish Date
```

## Add a Book

The application provides a form with:

```text id="u7s5ak"
Book Name
Author Name
Publish Date
```

Clicking the **Add Book** button adds the book to the list.

The input fields are cleared after successfully adding a book.

Empty book names are not allowed.

## Edit a Book

Each book has an **Edit** button.

Clicking Edit changes the book name into an input field.

Two buttons are displayed:

```text id="u8b5qh"
Save
Cancel
```

Save updates the book name, while Cancel discards the changes.

An empty book name cannot be saved.

## Delete a Book

Each book has a **Delete** button.

Clicking Delete immediately removes the book from the list.

## Search Books

A search input is available above the table.

Books can be searched by:

* Book name
* Author name

The search is **case-insensitive**.

If no books match the search term, the application displays:

```text id="5xajh0"
No books found
```

## Technologies Used

* React
* JavaScript
* Bootstrap
* HTML
* CSS

## Project Structure

```text id="n1f5jj"
book-list-management
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

```text id="jyq9mg"
cd C:\REACT-Node.js\book-list-management
```

Install the required packages:

```text id="i1m9w8"
npm install
```

Install Bootstrap:

```text id="6y3kzi"
npm install bootstrap
```

## Run the Application

Start the React development server:

```text id="s7q0x8"
npm start
```

The application will open in the browser.

Usually:

```text id="j7g4bh"
http://localhost:3000
```

If port 3000 is already in use, React may use another port such as `3001` or `3002`.

Use the URL shown in the terminal.

## Expected Output

The application displays:

```text id="j8j84s"
Book List Management App

Add New Book

Book Name
Author Name
Publish Date

[ Add Book ]

Search Books

ID | Book Name | Author Name | Publish Date | Actions
```

When there are no books:

```text id="4g1xv9"
No books found
```
