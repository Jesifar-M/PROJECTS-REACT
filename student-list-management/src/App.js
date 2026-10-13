import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRollNumber, setEditRollNumber] = useState("");
  const [editClass, setEditClass] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      studentName.trim() === "" ||
      rollNumber.trim() === "" ||
      studentClass.trim() === ""
    ) {
      return;
    }

    const rollNumberExists = students.some(
      (student) =>
        student.rollNumber.toLowerCase() ===
        rollNumber.trim().toLowerCase()
    );

    if (rollNumberExists) {
      return;
    }

    const newStudent = {
      id: students.length + 1,
      studentName: studentName.trim(),
      rollNumber: rollNumber.trim(),
      studentClass: studentClass.trim()
    };

    setStudents([...students, newStudent]);

    setStudentName("");
    setRollNumber("");
    setStudentClass("");
  }

  function startEditing(student) {
    setEditingId(student.id);
    setEditName(student.studentName);
    setEditRollNumber(student.rollNumber);
    setEditClass(student.studentClass);
  }

  function saveStudent(id) {
    if (
      editName.trim() === "" ||
      editRollNumber.trim() === "" ||
      editClass.trim() === ""
    ) {
      return;
    }

    const rollNumberExists = students.some(
      (student) =>
        student.id !== id &&
        student.rollNumber.toLowerCase() ===
          editRollNumber.trim().toLowerCase()
    );

    if (rollNumberExists) {
      return;
    }

    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          studentName: editName.trim(),
          rollNumber: editRollNumber.trim(),
          studentClass: editClass.trim()
        };
      }

      return student;
    });

    setStudents(updatedStudents);

    setEditingId(null);
    setEditName("");
    setEditRollNumber("");
    setEditClass("");
  }

  function cancelEdit() {
    setEditingId(null);
    setEditName("");
    setEditRollNumber("");
    setEditClass("");
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  const filteredStudents = students.filter((student) =>
    student.studentName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Student List Management App
      </h1>

      {/* Add Student Form */}

      <div className="card p-4 mb-4 shadow">

        <h2 className="mb-3">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Student Name
            </label>

            <input
              type="text"
              className="form-control"
              value={studentName}
              onChange={(event) =>
                setStudentName(event.target.value)
              }
              placeholder="Enter student name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Roll Number
            </label>

            <input
              type="text"
              className="form-control"
              value={rollNumber}
              onChange={(event) =>
                setRollNumber(event.target.value)
              }
              placeholder="Enter roll number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Class
            </label>

            <input
              type="text"
              className="form-control"
              value={studentClass}
              onChange={(event) =>
                setStudentClass(event.target.value)
              }
              placeholder="Example: 10A"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Add Student
          </button>

        </form>

      </div>

      {/* Search */}

      <div className="mb-4">

        <label className="form-label">
          Search Students
        </label>

        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          placeholder="Search by student name"
        />

      </div>

      {/* Student List */}

      <div className="card p-4 shadow">

        <h2 className="mb-3">
          Student List
        </h2>

        {filteredStudents.length === 0 ? (

          <p className="text-center">
            No students found
          </p>

        ) : (

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Class</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {filteredStudents.map((student) => (

                  <tr key={student.id}>

                    <td>
                      {student.id}
                    </td>

                    <td>

                      {editingId === student.id ? (

                        <input
                          type="text"
                          className="form-control"
                          value={editName}
                          onChange={(event) =>
                            setEditName(event.target.value)
                          }
                        />

                      ) : (

                        student.studentName

                      )}

                    </td>

                    <td>

                      {editingId === student.id ? (

                        <input
                          type="text"
                          className="form-control"
                          value={editRollNumber}
                          onChange={(event) =>
                            setEditRollNumber(
                              event.target.value
                            )
                          }
                        />

                      ) : (

                        student.rollNumber

                      )}

                    </td>

                    <td>

                      {editingId === student.id ? (

                        <input
                          type="text"
                          className="form-control"
                          value={editClass}
                          onChange={(event) =>
                            setEditClass(event.target.value)
                          }
                        />

                      ) : (

                        student.studentClass

                      )}

                    </td>

                    <td>

                      {editingId === student.id ? (

                        <>
                          <button
                            type="button"
                            className="btn btn-success btn-sm me-2"
                            onClick={() =>
                              saveStudent(student.id)
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
                              startEditing(student)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              deleteStudent(student.id)
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