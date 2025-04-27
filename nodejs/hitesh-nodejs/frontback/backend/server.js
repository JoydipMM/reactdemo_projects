//const express = require('express') // common js
// module js
import express from "express";
//require('dotenv').config()
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!................')
})

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: "Jokes title 01",
            content: "Jokes 01 content"
        },
        {
            id: 2,
            title: "Jokes title 02",
            content: "Jokes 02 content"
        },
        {
            id: 3,
            title: "Jokes title 03",
            content: "Jokes 03 content"
        },
    ]

  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/*
run error:

import express from "express";
^^^^^^
SyntaxError: Cannot use import statement outside a module

solution:
package.json
  "main": "server.js",
  "type": "module", <--- add this


for dotenv
require('dotenv').config() // commonjs import type given error after above change

solution:
import dotenv from 'dotenv';

dotenv.config();

*/