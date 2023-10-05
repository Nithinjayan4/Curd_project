const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
const db = new sqlite3.Database('user.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT,
      last_name TEXT,
      dob DATE,
      address TEXT
    )
  `);
});


app.post('/users', (req, res) => {
  const { first_name, last_name, dob, address } = req.body;
  if (!first_name || !last_name || !dob || !address) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  console.log( "data on")

  db.run(
    'INSERT INTO users (first_name, last_name, dob, address) VALUES (?, ?, ?, ?)',
    [first_name, last_name, dob, address],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: 'User created', id: this.lastID });
    }
  );
});


app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(row);
  });
});


app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, dob, address } = req.body;

  if (!first_name || !last_name || !dob || !address) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  db.run(
    'UPDATE users SET first_name = ?, last_name = ?, dob = ?, address = ? WHERE id = ?',
    [first_name, last_name, dob, address, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: 'User updated', changes: this.changes });
    }
  );
});


app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: 'User deleted', changes: this.changes });
  });
});

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
