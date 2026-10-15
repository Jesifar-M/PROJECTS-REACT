import React, { useEffect, useState } from "react";

function BookForm({ editingBook, onSave, onCancel }) {

  const [book, setBook] = useState({
    title: "",
    author: "",
    published_year: "",
    genre: ""
  });

  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    } else {
      setBook({
        title: "",
        author: "",
        published_year: "",
        genre: ""
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending book:", book);

    onSave(book);
  };

  return (
    <div className="card shadow p-4 mb-4">

      <h3 className="mb-4">
        {editingBook ? "Edit Book" : "Add New Book"}
      </h3>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Title
          </label>

          <input
            type="text"
            name="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Author
          </label>

          <input
            type="text"
            name="author"
            className="form-control"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Published Year
          </label>

          <input
            type="number"
            name="published_year"
            className="form-control"
            value={book.published_year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Genre
          </label>

          <input
            type="text"
            name="genre"
            className="form-control"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success me-2"
        >
          {editingBook ? "Update Book" : "Add Book"}
        </button>

        {editingBook && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}

      </form>

    </div>
  );
}

export default BookForm;