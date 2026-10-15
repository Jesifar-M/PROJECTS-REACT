import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setError("");

    try {

      const response = await fetch(
        "https://worksheet-auth.mashupstack.com/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            user_name: name,
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Registration Successful");

        navigate("/login");

      } else {

        setError(data.message || "Registration failed");

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
          Register
        </h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;