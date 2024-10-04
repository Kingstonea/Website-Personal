const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Menggunakan folder public untuk file statis (HTML, CSS, gambar, dll)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk galeri foto
app.get('/gallery', (req, res) => {
    const photos = {
        portrait: [],
        landscape: []
    };

    // Untuk foto portrait (ganjil)
    for (let i = 1; i <= 79; i += 2) {
        photos.portrait.push({ url: `/images/photo${i}.jpg`, orientation: 'portrait' });
    }

    // Untuk foto landscape (genap)
    for (let i = 2; i <= 48; i += 2) {
        photos.landscape.push({ url: `/images/photo${i}.jpg`, orientation: 'landscape' });
    }

    res.json(photos);
});

// Menangani rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menangani rute untuk halaman galeri
app.get('/gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
