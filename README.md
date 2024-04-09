# E-Commerce Back End

## Description
This project involves the development of the back end for an e-commerce site. Utilizing Express.js and Sequelize, this application interfaces with a MySQL database to manage an online store's inventory. This solution includes features such as product, category, and tag management, allowing for a robust and flexible e-commerce platform.

## Installation

### Prerequisites
- Node.js
- MySQL

### Steps
1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Configure your MySQL database settings in the `.env` file.
4. Initialize the database by running `mysql -u root -p` followed by `source db/schema.sql` in the MySQL shell.
5. Seed the database with test data by executing `npm run seed`.
6. Start the server with `npm start`.

## Usage
Once the application is set up and running, you can use API testing tools like Postman or Insomnia to interact with the e-commerce back end. The API supports operations for managing products, categories, and tags.

### API Endpoints
- **Products**: GET, POST, PUT, DELETE `/api/products`
- **Categories**: GET, POST, PUT, DELETE `/api/categories`
- **Tags**: GET, POST, PUT, DELETE `/api/tags`

## Walkthrough Video
My Insomnia isnt working so Karina gave me permission to submit without it and still get graded. The code has been tested through a friend so i know it works 

## Contributing
We welcome contributions to this project. If you have suggestions for improvements, please fork the repository and submit a pull request, or open an issue with the tag "enhancement".

## Testing
To test the application, run `npm test` (make sure you have a testing environment set up, as this command is for illustration purposes and may require additional configuration).

## Questions
For any questions regarding the application, please open an issue or contact me.

 
