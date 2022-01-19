# Personal-budget-API
This is a NodeJS/Express API to create and manage a personal budget. This API uses [envelope budgeting](https://www.thebalance.com/what-is-envelope-budgeting-1293682) principles to manage budget envelopes and was built as part of a portfolio project on the [CodeCademy](https://www.codecademy.com) Back-End Engineer Career Path. A user can find, create, update, transfer amounts between, and delete envelopes.

# Download & Running

Run this in your terminal: `git clone https://github.com/qtdceu/Personal-budget-API/` to download the repository on your local machine. 

To run locally, run `node .` in your terminal.

# Requests

The base URL for all requests is: `http://localhost:3000/`. 

## Get:

> Get all envelopes: `GET /`

> Get an envelope by ID: `GET /{id}`

## Post:

> Create a new envelope: `POST /`

Example body: 

```js
{
  "title": "Commuting",
  "amount": 200
}
```



> Transfer amounts between envelopes: `POST /transfer/{fromId}/{toId}`

Example body:

```js
{
  "amount": 200
}
```



> Update part/all of an envelope by ID: `POST /update/{id}`

Example body: 

```js
{
  "title": "Commuting",
  "amount": 200
}
```

## Delete:

> Delete an envelope by ID: `DELETE /{id}`

# Tests 

![All tests passing](https://github.com/qtdceu/Personal-budget-API/blob/main/screenshots/Screenshot%202022-01-19%20192350.png)