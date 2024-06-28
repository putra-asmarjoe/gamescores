const mysql = require('mysql2');

// Konfigurasi koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host atau IP MySQL Anda
  port: 3377, // Ganti dengan port MySQL Anda
  user: 'root', // Ganti dengan username MySQL Anda
  password: 'j03p455N0R1', // Ganti dengan password MySQL Anda
  database: 'nest', // Ganti dengan nama database yang ingin Anda tes
});

// Mencoba untuk terhubung ke database
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully!');
  
  // Lakukan operasi lain di sini jika perlu
  
  // Tutup koneksi setelah selesai
  connection.end(function(err) {
    if (err) {
      console.error('Error closing MySQL connection:', err);
      return;
    }
    console.log('MySQL connection closed successfully!');
  });
});
