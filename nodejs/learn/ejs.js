//const express = require('express'); // old command
// es6 new import command
import express from 'express';
const app = express();


app.listen("3000", ()=>{ console.log("server is runing") })