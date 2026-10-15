import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Product Page */}
        <Route
          path="/"
          element={<ProductList />}
        />

        {/* Add Product Page */}
        <Route
          path="/add"
          element={<AddProduct />}
        />

        {/* Edit Product Page */}
        <Route
          path="/edit/:id"
          element={<EditProduct />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;