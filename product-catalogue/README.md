# 🛒 Electronics Product Catalogue

A simple React-based product catalogue website for an electronics store.

The application connects to a real REST API and allows users to view, search, add, edit, and delete products.

## 🚀 Features

* View all products
* Search products by product name
* Add new products
* Edit existing products
* Delete products
* Separate page for adding products
* Separate page for editing products
* Success messages after operations
* Responsive design using Bootstrap
* REST API integration using Fetch API

## 🛠️ Technologies Used

* React.js
* JavaScript
* React Router DOM
* Bootstrap
* HTML
* CSS
* REST API
* Fetch API

## 📋 Product Details

Each product contains:

* Product Name
* Price
* Category
* Quantity

Example:

```json
{
  "name": "Wired Mouse",
  "price": 365.99,
  "category": "Electronics",
  "quantity": 100
}
```

## 🔗 API Endpoints

### Get All Products

```text
GET https://worksheet-catalogue.mashupstack.com/products
```

### Get Single Product

```text
GET https://worksheet-catalogue.mashupstack.com/products/{id}
```

### Add New Product

```text
POST https://worksheet-catalogue.mashupstack.com/products
```

### Edit Product

```text
PUT https://worksheet-catalogue.mashupstack.com/products/{id}
```

### Delete Product

```text
DELETE https://worksheet-catalogue.mashupstack.com/products/{id}
```

## 📁 Project Structure

```text
product-catalogue
│
├── public
│
├── src
│   ├── App.js
│   ├── ProductList.js
│   ├── AddProduct.js
│   ├── EditProduct.js
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

## ▶️ How to Run

### 1. Open the project folder

```bash
cd product-catalogue
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install required packages

```bash
npm install bootstrap react-router-dom
```

### 4. Start the application

```bash
npm start
```

The application will run at:

```text
http://localhost:3000
```

## 🔄 Application Pages

### Main Product Page

The main page displays:

* Search box
* Add Product button
* Product list
* Product name
* Price
* Category
* Quantity
* Edit button
* Delete button

### Add Product Page

Users can add a new product by entering:

* Product name
* Price
* Category
* Quantity

### Edit Product Page

Users can edit the details of an existing product and update it.

## 🔍 Search

Users can type a product name in the search box.

For example:

```text
Mouse
```

The application displays products matching the entered product name.

## 🗑️ Delete

Users can delete a product using the Delete button from the main product list.

A confirmation message is displayed before deleting the product.

## 🔄 CRUD Operations

The application supports all four CRUD operations:

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT         |
| Delete    | DELETE      |

## ✅ Expected Result

The main page displays the product catalogue in a table:

```text
🛒 Electronics Product Catalogue

[ Search product by name... ]    [ + Add Product ]

All Products

ID | Product Name | Price | Category | Quantity | Actions
-----------------------------------------------------------
1  | Wired Mouse  | 365.99| Electronics | 100 | Edit Delete
```

Users can search, add, edit, and delete products through the application.

## 👩‍💻 Author

Jesifar M

Developed as a React CRUD API practice project.
