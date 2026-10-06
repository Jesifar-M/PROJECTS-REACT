import React from "react";
import "./App.css";

function App() {

  // Personal Information
  const name = "Jesifar";
const age = 20;
const isStudent = true;

  // Favorite Hobbies
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];

  // Heading background color
  const headingColor = "lightblue";

  // Hobbies using normal for loop
  let hobbiesForLoop = [];

  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbiesForLoop.push(
      <li key={i}>{favoriteHobbies[i]}</li>
    );
  }

  // Function for button
  function showEnthusiasm() {

    document.getElementById("message").innerText =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-5">

      {/* Heading */}
      <h1 id="heading" className="text-center p-3">
        Personal Information and Hobbies
      </h1>

      {/* Personal Information Card */}
      <div className="card shadow p-4 mt-4">

        <h2>Personal Information</h2>

        <p>
  <strong>Name:</strong> {name}
</p>

<p>
  <strong>Age:</strong> {age}
</p>

<p>
  <strong>Student:</strong> {isStudent.toString()}
</p>

      </div>

      {/* Hobbies using for loop */}
      <div className="mt-4">

        <h2>Hobbies using For Loop</h2>

        <ul>
          {hobbiesForLoop}
        </ul>

      </div>

      {/* Hobbies using map() */}
      <div className="mt-4">

        <h2>Hobbies using map()</h2>

        <ul>
          {favoriteHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

      </div>

      {/* Button */}
      <button
        className="btn btn-primary mt-3"
        onClick={showEnthusiasm}
      >
        Show Enthusiasm
      </button>

      {/* Initial Message */}
      <p id="message" className="mt-3">
        Click the button to see my enthusiasm!
      </p>

    </div>
  );
}

export default App;