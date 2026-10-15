import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const API_URL =
    "https://worksheet-catalogue.mashupstack.com/products";

  const navigate = useNavigate();


  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: ""
  });


  const [message, setMessage] = useState("");


  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch(API_URL, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          name: product.name,

          price: Number(product.price),

          category: product.category,

          quantity: Number(product.quantity)

        })

      });


      if (!response.ok) {
        throw new Error("Failed to add product");
      }


      setMessage(
        "Product added successfully"
      );


      setTimeout(() => {

        navigate("/");

      }, 1000);


    } catch (error) {

      console.error(error);

      setMessage(
        "Failed to add product"
      );

    }

  };


  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">

              Add New Product

            </h2>


            {message && (

              <div className="alert alert-success">

                {message}

              </div>

            )}


            <form onSubmit={handleSubmit}>


              {/* NAME */}

              <div className="mb-3">

                <label className="form-label">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={product.name}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* PRICE */}

              <div className="mb-3">

                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  step="0.01"
                  name="price"
                  className="form-control"
                  value={product.price}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* CATEGORY */}

              <div className="mb-3">

                <label className="form-label">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={product.category}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* QUANTITY */}

              <div className="mb-3">

                <label className="form-label">
                  Quantity
                </label>

                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                />

              </div>


              <button
                type="submit"
                className="btn btn-success me-2"
              >
                Add Product
              </button>


              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Back
              </button>


            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AddProduct;