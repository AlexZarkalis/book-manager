# Book Management System

A web application for managing and searching books in a database using Node.js, SQLite, and JavaScript

## Features

- **Add Books**
  - Submit book details: Author, Title, Genre, Price
  - Form validation for numeric price input
  - Success/error feedback messages

- **Search Books**
  - Search by title keyword
  - Display results in tabular format
  - Handles no-results scenarios

- **Database**
  - SQLite database with automatic table creation
  - Persistent data storage
  - CRUD operations (Create, Read)

## Technologies

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Node.js
- Express.js
- SQLite3

## Installation

1. **Clone repository**
   ```
   git clone https://github.com/your-username/book-database-app.git
   ```
2. **On project directory**
   ```
   npm install
   ```
   ```
   npm start
   ```

## API Endpoints

| Method   | Endpoint          | Description                   |
|:--------:|:-----------------:|:-----------------------------:|
| POST     | /books            | Add new book to database      |
| GET      | /books/:keyword   | Search books by title keyword |

   
   
