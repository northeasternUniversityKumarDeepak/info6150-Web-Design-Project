# FinalProject_WebDesign

# Grocery Shopping Website

This project is a grocery shopping website developed using a MERN (MongoDB, Express.js, React.js, Node.js) stack. The website enables users to browse products, add them to their cart, and complete the purchase process. The backend utilizes Node.js and Express.js, connected to a MongoDB database, while the frontend is developed using React.js.


### Table of Contents
- [Tech Stack](#tech-stack)
- [Database Connection](#database-connection)
- [Order Management](#order-management)
- [Payment Processing](#payment-processing)
- [Product Management](#product-management)
- [User Management](#user-management)
- [App Code](#app-code)

## Tech Stack

### Frontend: React.js

React.js is a JavaScript library for building user interfaces. It allows for the creation of reusable UI components, making the development of complex user interfaces more manageable.

### Backend: Node.js and Express.js

Node.js is a server-side JavaScript runtime, and Express.js is a web application framework for Node.js. Together, they provide a robust and scalable backend infrastructure for handling server-side logic and APIs.

### Database: MongoDB

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is well-suited for projects with rapidly changing data requirements.

### Payment Processing: Stripe API

Stripe API is used for handling payment processing, allowing users to securely make payments for their orders.

### State Management: Redux (with React-Redux)

Redux is a predictable state container for JavaScript apps, commonly used with React for managing the state of the application in a more organized and scalable way.

### Styling: CSS, Material-UI (React Material-UI Carousel)

Styling is done using CSS, and the React Material-UI Carousel library is used for creating an interactive product image carousel.

### Other Dependencies: WebFontLoader, Axios, React Rating Stars Component

- **WebFontLoader:** Allows for the loading of custom fonts on the website.
- **Axios:** A promise-based HTTP client for making requests to the server.
- **React Rating Stars Component:** A React component for rendering star ratings.

## Database Connection

The MongoDB database is connected to the server using Mongoose. The connection setup is in the `connectDatabase.js` file.


## Order Management

### Create New Order

Endpoint: `/api/orders/new`

Allows users to create a new order.

### Get Logged-In User Orders

Endpoint: `/api/orders/me`

Retrieves orders for the logged-in user.

### Get All Orders (Admin)

Endpoint: `/api/admin/orders`

Retrieves all orders for admin users.

### Update Order Status (Admin)

Endpoint: `/api/admin/order/:id`

Allows admin users to update the status of an order.

### Delete Order (Admin)

Endpoint: `/api/admin/order/:id`

Allows admin users to delete an order.

## Payment Processing

### Process Payment

Endpoint: `/api/payment/process`

Uses the Stripe API to process payments.

### Send Stripe API Key

Endpoint: `/api/stripeapi`

Sends the Stripe API key to the client.

## Product Management

### Create Product

Endpoint: `/api/admin/product/new`

Allows admin users to create a new product.

### Get All Products

Endpoint: `/api/products`

Retrieves all products with pagination.

### Get Admin Products

Endpoint: `/api/admin/products`

Retrieves all products for admin users.

### Update Product (Admin)

Endpoint: `/api/admin/product/:id`

Allows admin users to update product details.

### Delete Product (Admin)

Endpoint: `/api/admin/product/:id`

Allows admin users to delete a product.

### Get Product Details

Endpoint: `/api/product/:id`

Retrieves details for a specific product.

### Create Product Review

Endpoint: `/api/review`

Allows users to create a review for a product.

### Get Product Reviews

Endpoint: `/api/reviews/:id`

Retrieves reviews for a specific product.

### Delete Review

Endpoint: `/api/reviews/:id`

Allows users to delete their review for a product.

## User Management

### User List

Endpoint: `/api/admin/users`

Retrieves a list of all users for admin users.
