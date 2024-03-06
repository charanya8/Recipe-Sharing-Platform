Recipe Sharing Platform API
This API allows users to perform CRUD operations on recipes and manage user authentication. It is built using Node.js, Express.js, and MongoDB, incorporating Object-Oriented Programming (OOP) concepts.

Setup

Clone the repository:

git clone <repository-url>
cd recipe-sharing-platform-api

Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory.
Add the following environment variables:
makefile


PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Start the server:


npm start
API Endpoints
User Endpoints
POST /users/register


OOP Concepts
Encapsulation: The User and Recipe classes encapsulate related functionality and data, providing clear interfaces for interacting with users and recipes.
Abstraction: The implementation details of user authentication and CRUD operations on recipes are abstracted away within the User and Recipe classes, simplifying the usage of these functionalities for other parts of the application.
Inheritance (not explicitly demonstrated): Inheritance could be used to extend base classes or share common functionalities between different classes, although it's not explicitly demonstrated in this example.
Polymorphism (not explicitly demonstrated): Polymorphism allows objects of different classes to be treated as objects of a common superclass. While not explicitly demonstrated in this example, it could be utilized for handling different types of recipes or users.
