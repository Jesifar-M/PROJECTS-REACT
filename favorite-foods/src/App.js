import React from "react";
import "./App.css";

function App() {

  const favoriteFoods = ["Pizza", "Burger", "Biryani"];

  const [message, setMessage] = React.useState(
    "Select a food that you love!"
  );

  function showFood(food) {
    setMessage(`I love ${food}!`);
  }

  return (
    <div className="container">

      <h1>My Favorite Foods</h1>

      <ul>
        {favoriteFoods.map((food, index) => (
          <li key={index}>
            <span>{food}</span>

            <button onClick={() => showFood(food)}>
              Love
            </button>
          </li>
        ))}
      </ul>

      <p>{message}</p>

    </div>
  );
}

export default App;