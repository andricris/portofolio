# Portofolio Web — [Andri Chris / andrichris]

Selamat datang di portofolio web pribadi saya! 🌐  
Dibuat dengan React + Vite, ini adalah showcase dari project, skill, dan karya yang ingin saya bagikan.

##  Struktur Project

- `public/` — file statis (favicon, assets, dsb.)  
- `src/` — code utama React (komponen, utilitas, dsb.)  
- `index.html` — entry point halaman web  
- `package.json` & `package-lock.json` — manajemen dependencies dan script  
- `vite.config.js` — konfigurasi build dan dev server Vite  
- `eslint.config.js` — aturan linting agar kodenya tetap bersih dan konsisten  

##  Fitur Utama

- Dibangun dengan **React + Vite** — ringan, cepat reload, dan performa build optimal  
- **ESLint** telah terkonfigurasi agar coding style tetap rapi  
- Struktur modular dan siap dikembangkan—bisa ditambahkan halaman “About”, “Projects”, dsb.
- Chat Room real-time menggunakan Firebase Auth (Google) + Firestore
- Animasi interaktif dan visual modern untuk pengalaman yang lebih engaging

##  Cara Jalankan

1. Clone repository ini:
```bash
git clone https://github.com/andricris/portofolio.git
cd portofolio
````

2. Install dependencies:
```bash
npm install
````

3. Jalankan server lokal dengan hot reload:
```bash
npm run dev
````

4. Buat versi production:
```bash
npm run build
````

## Konfigurasi Firebase Chat

Chat Room membutuhkan rules Firestore agar user yang sudah login bisa mengirim pesan. File `firestore.rules` sudah disiapkan, tinggal deploy ke Firebase.

1. Install Firebase CLI (sekali saja):
```bash
npm install -g firebase-tools
```

2. Login & pilih project:
```bash
firebase login
firebase use --add
```

3. Deploy rules:
```bash
firebase deploy --only firestore:rules
```

> Jika muncul error **"Missing or insufficient permissions"**, berarti rules belum di-deploy atau masih menolak akses write.

### Admin chat (hapus pesan & badge admin)

Agar admin bisa menghapus pesan (termasuk tombol **Hapus semua**) dan menampilkan badge **Admin**, lakukan 2 langkah berikut

1. Tambahkan UID admin di `firestore.rules` pada fungsi `isAdmin()`:
```text
function isAdmin() {
  return request.auth != null
    && request.auth.uid in [
      "REPLACE_WITH_ADMIN_UID"
    ];
}
```

2. Isi UID admin di environment variable berikut (bisa lebih dari satu, pisahkan dengan koma):
```bash
VITE_CHAT_ADMIN_UIDS=UID_ADMIN_1,UID_ADMIN_2
```

> UID admin bisa dilihat dari Firebase Authentication (Users) atau dari data `uid` di koleksi `messages`.
> Setelah mengubah environment variable, lakukan rebuild/redeploy agar nilai terbaru terbaca di aplikasi.

## &#x20;Quick Preview

Jika sudah di-deploy (contoh: GitHub Pages, Netlify, Vercel), kamu bisa tambahkan link deploy di sini, misalnya:
[🔗 Lihat versi live](https://andricris.github.io/portofolio/)

## Tentang Saya

Hai, saya Andri Chris (username GitHub: `andrichris`).
Saya seorang Full-Stack Developer yang fokus membangun aplikasi modern, performa tinggi, dan pengalaman pengguna yang intuitif. Saya menikmati eksplorasi teknologi terbaru seperti Artificial Intelligence, Machine Learning, serta pengembangan berbasis cloud untuk menghasilkan solusi digital yang fungsional, estetis, dan scalable.

* **GitHub:** [github.com/andricris](https://github.com/andricris)
* **Instagram:** [@andrichris](https://www.instagram.com/andrichris/)
* **YouTube:** [@andrichris](https://www.youtube.com/@andrichris)

---


[1]: https://github.com/andricris/portofolio "GitHub - andricris/portofolio"
