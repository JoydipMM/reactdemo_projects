import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';

const app = express();

// ---- Third-Party Middleware ----

// 1. Helmet (security headers)
app.use(helmet());

// 2. Morgan (HTTP request logging)
app.use(morgan('tiny'));

// 3. CORS (Cross-Origin Resource Sharing)
app.use(cors()); // allow all origins by default

// 4. Cookie Parser
app.use(cookieParser());

// Setup express-session middleware
app.use(session({
  secret: 'mySecretKey',        // secret to sign session ID cookie
  resave: false,                 // don’t save session if unmodified
  saveUninitialized: true,       // save new sessions even if not modified
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// ---- Routes ----

// Test route
app.get('/', (req, res) => {
  res.send('Hello, Third-Party Middleware Demo!');
});

// 1️⃣ Session Cookie (deleted when browser closes)
app.get('/session-cookie', (req, res) => {
  res.cookie('sessionCookie', 'I disappear when browser closes');
  res.send('Session cookie set!');
});

// 2️⃣ Short-lived Cookie (e.g., 1 minute)
app.get('/short-cookie', (req, res) => {
  res.cookie('shortCookie', 'I expire in 1 minute', { maxAge: 60 * 1000 }); // 60,000 ms = 1 min
  res.send('Short-lived cookie set!');
});

// 3️⃣ Long-lived Cookie (e.g., 7 days)
app.get('/long-cookie', (req, res) => {
  res.cookie('longCookie', 'I expire in 7 days', { maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days in ms
  res.send('Long-lived cookie set!');
});

// Route to read cookies
app.get('/read-cookies', (req, res) => {
  res.json(req.cookies);
});

app.get('/express-session', (req, res) => {
  // count visits
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You visited this page ${req.session.views} times`);
});

// Cookie test
app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'John'); // set a cookie
  res.send('Cookie has been set!');
});

// express-session
app.get('/get-cookie', (req, res) => {
  // read cookies from request
  const username = req.cookies.username;
  res.send(`Cookie value: ${username}`);
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username'); // delete cookie
  res.send('Cookie cleared');
});

// Session test
app.get('/session', (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.send(`You have visited this page ${req.session.views} times`);
});

app.listen("3000", ()=>{ console.log("server is runing") })