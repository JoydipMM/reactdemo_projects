import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';
import multer from 'multer';
import cookieSession from 'cookie-session';

const app = express();

// Setup cookie-session middleware
app.use(
  cookieSession({
    name: 'session',
    keys: ['secretKey1', 'secretKey2'],  // used to sign cookie
    maxAge: 24 * 60 * 60 * 1000          // 24 hours in milliseconds
  })
);

// ---- Routes ----

// Test route
app.get('/', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You visited this page ${req.session.views} times`);
});



app.listen("3000", ()=>{ console.log("server is runing") })