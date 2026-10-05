import React from "react";
import welcomeImage from "./images/profile.jpeg";

function App() {

  const userName = "Jesifar";

  console.log("React app started");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

      <div
        className="card text-center p-4 shadow"
        style={{ width: "500px" }}
      >

        <h1 style={{ color: "blue", marginBottom: "20px" }}>
          Welcome to React Learning, {userName}
        </h1>

        {/* Internal Image */}
        <img
          src={welcomeImage}
          alt="Internal"
          className="img-fluid mx-auto d-block mb-3"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px"
          }}
        />

        {/* External Image */}
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
          alt="Girl"
          className="img-fluid mx-auto d-block mb-3"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "15px"
          }}
        />

        <p className="text-muted">
          This is your first card with images and styles!
        </p>

      </div>

    </div>
  );
}

export default App;