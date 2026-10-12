import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const students = ["Alexa", "Riya", "Rahul"];

  function goToRiya() {
    navigate("/student/Riya");
  }

  return (
    <div>

      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student}>
            <Link to={`/student/${student}`}>
              {student}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={goToRiya}>
        Go to Riya
      </button>

    </div>
  );
}

export default Home;