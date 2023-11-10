# Info

**Author:** Adrián Darío Hidalgo Flores

# Summary

1. [Project structure](#project-structure)
2. [API Rest](#api-rest)
3. [TODOs](#todos)
4. [Setup](#setup)

# Project structure

This project includes two applications:

1. Frontend: Angular
2. Backend: ExpressJs and Typescript

Each project works independently. This means that each project has its own package.json and can be run separately.

# API Rest

## Deserts

### Create a New Desert

- **Endpoint:** `POST /deserts`
- **Description:** Creates a new desert.
- **Request Body:**
  - `name` (string): The name of the desert.

### Get All Deserts

- **Endpoint:** `GET /deserts`
- **Description:** Retrieves a list of all deserts.
- **Response:** An array of objects representing deserts, each containing at least a `name` property.

## Oases

### Create a New Oasis

- **Endpoint:** `POST /oases`
- **Description:** Creates a new oasis.
- **Request Parameters:**
  - `name` (string): The name of the oasis.
  - `water` (float): The amount of water the oasis has.
  - `coordinates` (object): An object with `latitude` and `longitude`.
  - `desertId` (integer): The ID of the desert where the oasis is located (positive integer).

### Get All Oases

- **Endpoint:** `GET /oases`
- **Description:** Retrieves a list of all oases.
- **Query Parameters:**
  - `desertId` (integer): Filter oases by the ID of the associated desert (positive integer).
  - `water` (float): Filter oases by the amount of water.
- **Response:** An array of objects representing oases, each containing relevant information about the oasis.

# TODOs

Here is a list of requirements that have not been covered yet.

## Project Requirements:

1. **Filter Get Oasis by Location:** There is commented code that initiates this development.

## Technical Requirements:

1. **MySQL** To enhance development efficiency, I opted to use SQLite. I intend to implement configurations for migrating to MySQL, but this shouldn't be a complex task since I utilized Sequelize, which simplifies this process.
2. **AWS Architecture and Deployment:** The structure easily allows for this. I only need to add the `serverless-http` library and wrap the API.
3. **GraphQL API:** I follow a Clean Architecture, which means I have services that can be called by GraphQL instead of Express Routes.

## Nice to have

1. Implement Lerna

## Technical Debt

All detected technical debt is marked with a comment like this:

```javascript
// TODO: This is a comment to mark a task to attend or solve
console.log("some code");
```

If you're utilizing a TODOs plugin in VSCode, you can access a comprehensive list of marked TODOs within the code.

## Documentation

1. Setup - Frontend

# Setup

## Backend

Create a copy of .env and replace it with the following example:

```
# APP
APP_PORT = 8000 # Or port that you want to use

# DATABASE
DATABASE_FORCE_SYNC = 0 #  Forced initialization of tables: 1 (yes), 0 (no)
```

## Frontend
