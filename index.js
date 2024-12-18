const express = require('express'); // Import express
const app = express(); // Inisialisasi aplikasi Express
const port = 3000; // Port yang digunakan

// Middleware (opsional) - jika ingin parsing JSON atau menangani form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute dasar (root)
app.get('/', (req, res) => {
    res.send('Hello, World! Server berjalan dengan baik.');
});

// Rute lain - contoh tambahan
app.get('/about', (req, res) => {
    res.send('Ini adalah halaman About.');
});

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Data berhasil diambil!',
        status: 'success',
        data: [1, 2, 3, 4, 5]
    };
    res.json(data);
});

// Rute 404 - jika endpoint tidak ditemukan
app.use((req, res) => {
    res.status(404).send('404 Not Found: Halaman yang kamu cari tidak tersedia.');
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
