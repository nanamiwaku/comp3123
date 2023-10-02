express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// GET request: /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

//http://localhost:8089/user?firstname=Nanami&lastname=Waku
// To get a request
// GET request: /user with query parameters
app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  const userData = {
    firstname,
    lastname,
  };
  res.json(userData);
});

//http://localhost:8089/user/Nanami/Waku
// POST request: /user with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  const userData = {
    firstname,
    lastname,
  };
  res.json(userData);
});

// Start the server
const port = 8089;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});