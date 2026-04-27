# Appointment Booking System 
## Description

This project is a Node.js backend application for managing appointment bookings.
Users can register, log in and book available time slots. Admin users can create and manage appointment slots.

---

## Features

* User registration and login (authentication)
* Role-based access (admin and user)
* Create and manage time slots (admin)
* Book and cancel appointments (users)
* Prevent double booking of time slots
* Input validation and error handling

---

## Technologies

* Node.js
* Express
* MongoDB
* Mongoose
* JWT Authentication (JSON Web Token)

---

## API Endpoints
### Authentication

* **POST /register** – Create a new user
* **POST /login** – Login and receive authentication token

### Slots (admin)

* **POST /slots** – Create a new time slot
* **GET /slots** – Show all available time slots
* **DELETE /slots/:id** – Delete a time slot

### Appointments (user)

* **POST /appointments** - Book an appointment
* **GET /appointments/me** - Show current users appointments
* **DELETE /appointments/:id** - Cancel an appointment

---

## Environment variables

Create a `.env` file in the root folder and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

## Requirements

* Node.js installed
* npm installed
* MongoDB (local installation or MongoDB Atlas)

---

## How to run the application

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file using the variables above
4. Run `npm start`

---

## Authors

* Hanna Hanate
* Janne Piiroinen
* Ruslan Lysenko
