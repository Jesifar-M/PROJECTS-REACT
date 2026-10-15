import React, { useEffect, useState } from "react";
import BookForm from "./BookForm";

function App() {

  const API_URL =
    "https://worksheet-library.mashupstack.com/books";

  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Success message
  const [successMessage, setSuccessMessage] = useState("");

  // GET BOOKS
  const getBooks = async () => {

    try {

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to load books");
      }

      const data = await response.json();

      setBooks(data);

    } catch (error) {

      console.error(error);

    }
  };


  useEffect(() => {
    getBooks();
  }, []);


  // ADD BOOK
  const addBook = async (book) => {

    try {

      const response = await fetch(API_URL, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          title: book.title,
          author: book.author,
          published_year: Number(book.published_year),
          genre: book.genre
        })

      });


      if (!response.ok) {
        throw new Error("Failed to add book");
      }


      // Clear old message
      setSuccessMessage("");


      // Get updated book list
      await getBooks();


      // Show message below form
      setSuccessMessage("Book added successfully");


      // Automatically hide after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);


    } catch (error) {

      console.error(error);

    }
  };


  // UPDATE BOOK
  const updateBook = async (book) => {

    try {

      const response = await fetch(
        `${API_URL}/${book.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            title: book.title,
            author: book.author,
            published_year: Number(book.published_year),
            genre: book.genre
          })
        }
      );


      if (!response.ok) {
        throw new Error("Failed to update book");
      }


      setEditingBook(null);

      await getBooks();


      setSuccessMessage("Book updated successfully");


      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);


    } catch (error) {

      console.error(error);

    }
  };


  // DELETE BOOK
  const deleteBook = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );


    if (!confirmDelete) {
      return;
    }


    try {

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE"
        }
      );


      if (!response.ok) {
        throw new Error("Failed to delete book");
      }


      await getBooks();


      setSuccessMessage("Book deleted successfully");


      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);


    } catch (error) {

      console.error(error);

    }
  };


  // SAVE BOOK
  const handleSave = (book) => {

    if (editingBook) {

      updateBook(book);

    } else {

      addBook(book);

    }

  };


  return (

    <div className="container mt-5 mb-5">

      {/* PAGE TITLE */}

      <h1 className="text-center mb-4">
        📚 Book Manager App
      </h1>


      {/* BOOK FORM */}

      <BookForm
        editingBook={editingBook}
        onSave={handleSave}
        onCancel={() => setEditingBook(null)}
      />


      {/* SUCCESS MESSAGE */}

      {successMessage && (

        <div className="alert alert-success mt-3">

          {successMessage}

        </div>

      )}


      {/* BOOK LIST */}

      <div className="card shadow p-4 mt-4">

        <h3 className="mb-4">
          All Books
        </h3>


        {books.length === 0 ? (

          <p className="text-muted">
            No books available.
          </p>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead className="table-dark">

                <tr>

                  <th>ID</th>

                  <th>Title</th>

                  <th>Author</th>

                  <th>Published Year</th>

                  <th>Genre</th>

                  <th>Actions</th>

                </tr>

              </thead>


              <tbody>

                {books.map((book, index) => (

                  <tr key={book.id}>

                    {/* ID */}

                    <td>
                      {index + 1}
                    </td>


                    {/* TITLE */}

                    <td>
                      {book.title}
                    </td>


                    {/* AUTHOR */}

                    <td>
                      {book.author}
                    </td>


                    {/* YEAR */}

                    <td>
                      {book.published_year}
                    </td>


                    {/* GENRE */}

                    <td>
                      {book.genre}
                    </td>


                    {/* ACTIONS */}

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          setEditingBook(book)
                        }
                      >
                        Edit
                      </button>


                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteBook(book.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>

  );
}

export default App;