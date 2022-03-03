# CIS_4339_Project_15 - Clientzilla
Clientzilla is the latest and greatest web application that will help you handle
your clients and the services that you offer.

## Meet The Team
Gervin Ken Valverde, Esteban Camarillo, Larissa Gonzalez

## Getting Started
1. Download [Node.js](https://nodejs.org/en/download/) 
2. We will use Node Package Manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install our dependencies
    ```
    npm install
    ```
3. Start the server
    ```python
    npm run devstart
    ```
4. Download [Postman](https://www.postman.com/)

## Our Models
To get  a high level view on our collections and documents, the following are the current models that we have. Each of these models have routes that mainly have to do with **GET, POST, PUT & DELETE requests**.
- Intake Forms
- Organizations
- Programs
- Services
---
## Usage
As of right now, Clientzilla's functions and operations lie within the **URL** and the **routes** that we have defined in our code. <br>
*The following sections will go over how to use those routes.*

An API testing software we highly suggest using **Clientzilla** on (especially if you want POST, PUT, and DELETE requests) is [Postman](https://www.postman.com/). <br>
Google Chrome will suffice if you want GET requests only.

### Homepage
```
localhost:3000
``` 
This URL will get you to the homepage. <br>
The initial port number is **3000**. <br>
You may **change the port number** you want to run on in the *.env* file

**Please note that anything following a colon (:) is a _request parameter_ for the URL.**
> Example -> someURL/:id

### GET ALL DOCUMENTS OF A MODEL
Use the **GET** method in Postman
```
localhost:PORT/intakeforms
localhost:PORT/organizations
localhost:PORT/programs
localhost:PORT/services
```

### GET DOCUMENT BY ID
Use the **GET** method in Postman
```
localhost:PORT/organizations/:orgID
localhost:PORT/intakeforms/:clientID
localhost:PORT/programs/:programID
localhost:PORT/services/:serviceID
```

### DELETE DOCUMENT BY ID
Use the **DELETE** method in Postman
```
localhost:PORT/organizations/:orgID
localhost:PORT/intakeforms/:clientID
localhost:PORT/programs/:programID
localhost:PORT/services/:serviceID
```

### POST DOCUMENT
Use the **POST** method in Postman
- Choose the **body** option under the url bar
- Choose **raw** and ensure it is written in **JSON**
- Inside { }'s write the model's fields and the corresponding data. Please make sure the field names are written correcty.
```
localhost:PORT/organizations
localhost:PORT/intakeforms
localhost:PORT/programs
localhost:PORT/services
```

### PUT (UPDATE) DOCUMENT
Use the **PUT** method in Postman
- Choose the **body** option under the url bar
- Choose **raw** and ensure it is written in **JSON**
- Inside { }'s write the model's fields and the corresponding data you want to change. Please make sure the field names are written correcty.
```
localhost:PORT/organizations/:orgID
localhost:PORT/intakeforms/:clientID
localhost:PORT/programs/:programID
localhost:PORT/services/:serviceID
```
---
### Aggregation
The following are routes that use [MongoDB's Aggregation](https://docs.mongodb.com/manual/aggregation/). <br>
As of right now, the only models that use aggregation are **organizations** and **programs**

#### GET ALL PROGRAMS THAT AN ORGANIZATION HAS TO OFFER
Use the **GET** method in Postman
```
localhost:3000/organizations/organization-program/:orgID
```

#### GET ALL SERVICES LISTED UNDER A PROGRAM
Use the **GET** method in Postman
```
localhost:3000/programs/program-service/:programID
```
---
## External API of Clients
**Clientzilla** also works alongside an external API with a **list of clients** that have been in contact with various organizations around the city of Houston. Here's how to use it.

#### GET ALL CLIENTS
Use the **GET** method in Postman
```
localhost:3000/clients
```

#### GET A SINGLE CLIENT
Use the **GET** method in Postman
```
localhost:3000/clients/:first_name/:last_name/:phone_number
```