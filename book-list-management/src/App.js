import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editedBookName, setEditedBookName] = useState("");

  function addBook(event) {
    event.preventDefault();

    if (bookName.trim() === "") {
      return;
    }

    const newBook = {
      id: books.length + 1,
      bookName: bookName,
      authorName: authorName,
      publishDate: publishDate
    };

    setBooks([...books, newBook]);

    setBookName("");
    setAuthorName("");
    setPublishDate("");
  }

  function editBook(book) {
    setEditingId(book.id);
    setEditedBookName(book.bookName);
  }

  function saveBook(id) {
    if (editedBookName.trim() === "") {
      return;
    }

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            bookName: editedBookName
          };
        }

        return book;
      })
    );

    setEditingId(null);
    setEditedBookName("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditedBookName("");
  }

  function deleteBook(id) {
    setBooks(
      books.filter((book) => book.id !== id)
    );
  }

  const filteredBooks = books.filter((book) =>
    book.bookName
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    book.authorName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Book List Management App
      </h1>

      <div className="card p-4 mb-4 shadow">

        <h2 className="mb-3">
          Add New Book
        </h2>

        <form onSubmit={addBook}>

          <div className="mb-3">
            <label className="form-label">
              Book Name
            </label>

            <input
              type="text"
              className="form-control"
              value={bookName}
              onChange={(event) =>
                setBookName(event.target.value)
              }
              placeholder="Enter book name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Author Name
            </label>

            <input
              type="text"
              className="form-control"
              value={authorName}
              onChange={(event) =>
                setAuthorName(event.target.value)
              }
              placeholder="Enter author name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Publish Date
            </label>

            <input
              type="date"
              className="form-control"
              value={publishDate}
              onChange={(event) =>
                setPublishDate(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Book
          </button>

        </form>
      </div>

      <div className="mb-4">

        <label className="form-label">
          Search Books
        </label>

        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search by book name or author name"
        />

      </div>

      <div className="card p-4 shadow">

        <h2 className="mb-3">
          Book List
        </h2>

        {filteredBooks.length === 0 ? (

          <p className="text-center">
            No books found
          </p>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Publish Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredBooks.map((book) => (

                  <tr key={book.id}>

                    <td>{book.id}</td>

                    <td>
                      {editingId === book.id ? (

                        <input
                          type="text"
                          className="form-control"
                          value={editedBookName}
                          onChange={(event) =>
                            setEditedBookName(
                              event.target.value
                            )
                          }
                        />

                      ) : (

                        book.bookName

                      )}
                    </td>

                    <td>
                      {book.authorName}
                    </td>

                    <td>
                      {book.publishDate}
                    </td>

                    <td>

                      {editingId === book.id ? (

                        <>
                          <button
                            type="button"
                            className="btn btn-success btn-sm me-2"
                            onClick={() =>
                              saveBook(book.id)
                            }
                          >
                            Save
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </button>
                        </>

                      ) : (

                        <>
                          <button
                            type="button"
                            className="btn btn-warning btn-sm me-2"
                            onClick={() =>
                              editBook(book)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              deleteBook(book.id)
                            }
                          >
                            Delete
                          </button>
                        </>
                      )}

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