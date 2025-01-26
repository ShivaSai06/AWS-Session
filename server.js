const express = require('express');
const app = express();
const { resolve } = require('path');
const port = process.env.PORT || 3000;

// ------------ Imports & necessary things here ------------

// Setting up the static folder:
app.use(express.static(resolve(__dirname, process.env.STATIC_DIR)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});

// creating a route for success page:
app.get('/success', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/success.html');
  res.sendFile(path);
});

// creating a route for cancel page:
app.get('/cancel', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/cancel.html');
  res.sendFile(path);
});

// Workshop page routes:
app.get('/workshop1', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/workshops/workshop1.html');
  res.sendFile(path);
});
app.get('/workshop2', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/workshops/workshop2.html');
  res.sendFile(path);
});
app.get('/workshop3', (req, res) => {
  const path = resolve(process.env.STATIC_DIR + '/workshops/workshop3.html');
  res.sendFile(path);
});

// Mock domain URL
const domainURL = process.env.DOMAIN || 'http://localhost:3000';

// Mock checkout session creation
app.post('/create-checkout-session/:pid', async (req, res) => {
  const priceId = req.params.pid;

  // Mock session creation
  const session = {
    id: `mock_session_id_${priceId}`,
  };

  console.log('Mock session created for priceId:', priceId);

  res.json({
    id: session.id,
  });
});

// Server listening:
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
  console.log(`You may access your app at: ${domainURL}`);
});
