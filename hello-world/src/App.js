import React from "react";
import profileImage from "./images/My image.jpeg"; // Importing the internal image

function App() {

  const name = "Jesifar";
  const description = "A passionate Full Stack Java Developer and React learner.";

  return (
    <>
      <style>
        {`
          .profile-card {
            border: 2px solid black;
            padding: 25px;
            background-color: lightgray;
            width: 400px;
            border-radius: 10px;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            margin: 10px;
          }
        `}
      </style>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">

        <div className="profile-card text-center">

          <h2>{name}</h2>

          <p>{description}</p>

          <h5>Internal Image</h5>

          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />

          <h5>External Image</h5>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
            alt="External Profile"
            className="profile-image"
          />

        </div>

      </div>
    </>
  );
}

export default App;