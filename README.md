# School Management System 
#### Created By - [Sanket Mahadik](https://www.linkedin.com/in/sanket-mahadik/) 

This project is a Node.js API for managing school data, built using Express.js and MySQL. The API allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.


## Summary

- [Features](#features)
- [Postman Collection](#postman-collection)
- [Hosting](#hosting)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)

## Features

- **Add School**: Add new schools with details such as name, address, latitude, and longitude.
- **List Schools**: Retrieve a list of all schools sorted by their proximity to a user-specified location (latitude and longitude) and school distance from user

## Postman Collection
A Postman collection is provided to easily test the APIs. You can import the collection by downloading it [here](./postman/school_management.postman_collection.json)

## Hosting
The API is hosted on Render. You can access the live API at: [Click here](https://educase-school-management-api.onrender.com/api/listSchools?latitude=410.712776&longitude=-741.005974)


## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database for storing school data.
- **Postman**: Tool for testing APIs.

## Prerequisites

- **Node.js**: Install Node.js
- **MySQL**: Install MySQL and set up a database.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sanketmahadik191/educase_school_management-api.git
cd educase_school_management-api
```

### 2.Install Dependencies

```bash
npm install
```
### 3.Set Up MySQL Database
 Create a new MySQL database:

 ```bash
CREATE TABLE school_management_system (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

### 4. Setup .env file

```bash
DB_HOST="your database hostname"
DB_USER="your database username"
DB_PASSWORD="your database password"
DB_NAME="your databse name"	
PORT=
```

### 5.Run the Server
 ```bash
node server.js
```

## API Endpoints

### 1. Add School

- **Endpoint**: `/api/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.
- **Request Payload**:

    ```json
    {
        "name": "Green Valley School",
        "address": "123 Green St, Springfield",
        "latitude": 40.730610,
        "longitude": -73.935242
    }
    ```

- **Response**:

    ```json
    {
        "message": "School added successfully"
    }
    ```

### 2. List Schools

- **Endpoint**: `/api/listSchools`
- **Method**: `GET`
- **Description**: Retrieves a list of all schools, sorted by proximity to the user's location.
- **Query Parameters**:
  - `latitude`: User's latitude.
  - `longitude`: User's longitude.
- **Example Request**:

    ```url
    https://educase-school-management-api.onrender.com/api/listSchools?latitude=40.712776&longitude=-74.005974
    ```

- **Response**:

    ```json
    [
        {
            "id": 1,
            "name": "Blue Ridge School",
            "address": "456 Blue Ridge Ave, Springfield",
            "latitude": 40.712776,
            "longitude": -74.005974,
            "distanceFromUser": "7882.28 km"
        },
        {
            "id": 2,
            "name": "Sunnydale High School",
            "address": "789 Sunny St, Springfield",
            "latitude": 40.730610,
            "longitude": -73.935242,
            "distanceFromUser": "13082.28 km"
        }
    ]
    ```


    






