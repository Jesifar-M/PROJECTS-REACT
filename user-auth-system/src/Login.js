import React, { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response = await fetch(
        "https://worksheet-auth.mashupstack.com/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        console.log("Token:", data.token);

        alert("Successfully Logged In");

      } else {

        setError(data.message || "Login failed");

      }

    } catch (error) {

      setError("Something went wrong");

    }
  };

  return (
    <div className="container mt-5">

      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;