# 📚 Book Manager App

A simple React-based Book Manager application for a small library.

This application connects to a real REST API and allows users to create, view, edit, and delete books.

## 🚀 Features

* Add a new book
* View all books
* Edit book details
* Delete a book
* Success message after adding/updating/deleting
* Responsive design using Bootstrap
* Real API integration

## 🛠️ Technologies Used

* React.js
* JavaScript
* Bootstrap
* HTML
* CSS
* REST API
* Fetch API

## 📋 Book Fields

Each book contains:

* Title
* Author
* Published Year
* Genre

## 🔗 API Endpoints

### Get All Books

```text
GET https://worksheet-library.mashupstack.com/books
```

### Create Book

```text
POST https://worksheet-library.mashupstack.com/books
```

### Update Book

```text
PUT https://worksheet-library.mashupstack.com/books/{id}
```

### Delete Book

```text
DELETE https://worksheet-library.mashupstack.com/books/{id}
```

## ▶️ How to Run

### 1. Clone the project

```bash
git clone <your-github-repository-url>
```

### 2. Go to the project folder

```bash
cd book-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Bootstrap

```bash
npm install bootstrap
```

### 5. Start the application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 📁 Project Structure

```text
book-manager
│
├── public
│
├── src
│   ├── App.js
│   ├── BookForm.js
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 CRUD Operations

### Create

Users can enter the book details in the form and click **Add Book**.

### Read

All books are displayed in a table with:

* ID
* Title
* Author
* Published Year
* Genre
* Actions

### Update

Click **Edit**, modify the book details, and click **Update Book**.

### Delete

Click **Delete** to remove a book from the library.

## ✅ Expected Result

The application displays the book collection and lets users manage books through the available CRUD operations.
