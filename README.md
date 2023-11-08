# Todo-app API
#### This is a simple RESTful API for managing a to-do list using Express.js and MongoDB. With this API, you can perform basic CRUD operations on your to-do items, such as creating, reading, updating, and deleting tasks.


### Features
* Create a new to-do item.
* Retrieve a list of all to-do items.
* Retrieve a single to-do item by its ID.
* Update an existing to-do item.
* Delete a to-do item.


### Requirements
* Before you begin, ensure you have met the following requirements:
* Node.js and npm installed on your system.
* MongoDB database setup and running.
* Git installed (for cloning the repository).


### Getting Started
#### Installation
1- Clone this repository:

```
git clone https://github.com/abdelrhman-mel/todo-app.git
```
2- Change your working directory to the project folder:

```
cd todo-app
```
3- Install the project dependencies:

```
npm install
```
### Endpoints
Here are the available endpoints and their functionality:

* GET /todos: Retrieve a list of all to-do items.

* GET /todos/:id: Retrieve a single to-do item by its ID.

* POST /todos: Create a new to-do item. Send a JSON object with a title and completed (true or false).

* PUT /todos/:id: Update an existing to-do item by its ID. Send a JSON object with the fields you want to update.

* DELETE /todos/:id: Delete a to-do item by its ID.

Note: Replace :id with the actual ID of the to-do item you want to manipulate.

