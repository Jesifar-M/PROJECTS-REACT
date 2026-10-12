import React from "react";
import { useParams } from "react-router-dom";

function Student() {

  const { name } = useParams();

  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}

export default Student;