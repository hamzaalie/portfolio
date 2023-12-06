const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(cors());
app.use(bodyParser.json());

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailQuery, [email], async (err, result) => {
      if (err) {
        console.error('Error checking email:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (result && result.length > 0) {
        // Email already exists
        return res.status(400).json({ error: 'Email already exists' });
      }

      try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into the database
        const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(insertQuery, [username, email, hashedPassword], (insertErr, insertResult) => {
          if (insertErr) {
            console.error('Error inserting user:', insertErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          res.status(200).json({ message: 'User registered successfully' });
        });
      } catch (hashError) {
        console.error('Error hashing password:', hashError);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  try {
    // Retrieve user from the database based on email
    const selectQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(selectQuery, [email], async (err, results) => {
      if (err) {
        console.error('Error retrieving user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = results[0];
      console.log(user);

      try {
        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.PASSWORD);

        if (passwordMatch) {
          res.status(200).json({ message: 'User signed in successfully' });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (compareError) {
        console.error('Error comparing passwords:', compareError);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
