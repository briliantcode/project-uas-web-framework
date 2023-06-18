const express = require('express');
const mysql = require('mysql');

// Membuat koneksi dengan database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'nama_database',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Terhubung ke database MySQL');
});

const app = express();

// Endpoint untuk mendapatkan semua data dari tabel
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM nama_tabel';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// Endpoint untuk menambahkan data ke tabel
app.post('/data', (req, res) => {
  const { nama, email } = req.body;
  const sql = `INSERT INTO nama_tabel (nama, email) VALUES ('${nama}', '${email}')`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Data berhasil ditambahkan');
  });
});

// Endpoint untuk mengubah data di tabel
app.put('/data/:id', (req, res) => {
  const { nama, email } = req.body;
  const { id } = req.params;
  const sql = `UPDATE nama_tabel SET nama='${nama}', email='${email}' WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Data berhasil diubah');
  });
});

// Endpoint untuk menghapus data dari tabel
app.delete('/data/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM nama_tabel WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Data berhasil dihapus');
  });
});

// Jalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});