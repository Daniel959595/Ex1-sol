# Microservices Calculation Example

This project demonstrates a microservices-based application using Node.js and Dapr. The application consists of two services (`server1` and `server2`), where `server1` receives input from a client, sends a calculation request to `server2`, and returns the result to the client. The front-end for `server1` is a simple HTML form rendered with a Pug template.

## Features

- **Microservices-based architecture** using Dapr for inter-service communication.
- **Front-end form** with HTML and CSS for user input and displaying results.
- **Calculation logic** decoupled into two services:
  - **Server1**: Receives user input, calls Server2, and returns the result.
  - **Server2**: Calculates the product of two numbers and returns the result to Server1.

## Project Structure

```plaintext
project
├── server1
│   ├── app.js                # Main application file for Server1
│   ├── controllers
│   │   └── calculationController.js   # Controller for Server1 business logic
│   ├── views
│   │   └── index.pug          # Pug template for front-end HTML form
│   └── public
│       └── styles.css         # CSS styling for the front-end form
└── server2
    ├── app.js                # Main application file for Server2
    ├── controllers
    │   └── calculationController.js   # Controller for Server2 business logic
```

- **Server1:** Listens for client requests, serves the front-end form, and invokes Server2 for calculations.
- **Server2:** Processes calculation requests and returns results to Server1.

## Requirements

- **Node.js**
- **Dapr CLI**
- **Docker**

## Getting Started

**Installation**

1. Clone the repository:

```plaintext
https://github.com/Daniel959595/Ex1-sol.git

```

2. Install dependencies for each service:

```plaintext
cd server1
npm install
cd ../server2
npm install
```

**Running the Application with Dapr**

First, Make sure that Docker and dapr are up and running.

Starting Server1: <br>
Run the following command in the server1 directory:

```plaintext
dapr run --app-id server1 --app-port 3001 --dapr-http-port 3501 node app.js

```

Starting Server2: <br>
Run the following command in the server2 directory:

```plaintext
dapr run --app-id server2 --app-port 3002 --dapr-http-port 3502 node app.js

```

## Usage

1. Go to http://localhost:3001 to access the front-end form.
2. Enter two numbers in the input fields and press Calculate.
3. The application will display the product of the two numbers calculated by Server2.
