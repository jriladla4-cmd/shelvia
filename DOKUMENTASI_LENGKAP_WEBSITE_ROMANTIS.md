# 🌹 DOKUMENTASI LENGKAP WEBSITE ROMANTIS "RUANG KATA UNTUKMU"

Dokumentasi ini dibuat khusus untuk memberikan panduan lengkap mengenai struktur, cara kerja, cara mengubah kata-kata/foto, serta cara membagikan website romantis ini kepada orang yang kamu suka (**Shelvia**).

---

## 📄 DAFTAR ISI
1. [Fitur Utama & Keunggulan Website](#1-fitur-utama--keunggulan-website)
2. [Struktur File Project](#2-struktur-file-project)
3. [Fitur Canggih Terbaru](#3-fitur-canggih-terbaru)
4. [Panduan Mengubah Konten (Teks, Nama & Foto)](#4-panduan-mengubah-konten)
5. [Kumpulan Seluruh Kata-Kata Puitis](#5-kumpulan-seluruh-kata-kata-puitis)
6. [Cara Mengupload & Mengirimkan Website (Online Free Host)](#6-cara-mengupload--mengirimkan-website)

---

## 1. 🌸 FITUR UTAMA & KEUNGGULAN WEBSITE

Website ini dirancang dengan estetika modern **Pastel Glassmorphism** yang anggun dan romantis:

- 🔕 **Tampilan Clean & Spesial (Tanpa Tombol Pengaturan Menyelam)**:
  Tampilan depan bersih tanpa tombol edit rumit agar orang yang kamu suka melihat website ini sebagai karya spesial yang eksklusif diciptakan khusus untuknya.
- 🎶 **Musik Piano Instrumental Otomatis & Tombol Mute Halus**:
  Musik latar piano lembut (*Fmaj7 - Cmaj7 - Am7 - G*) akan **otomatis berputar secara mulus** begitu penerima menyentuh/mengklik layar pertama kali. Disediakan juga ikon tombol Mute (*Volume High / Mute*) di navbar atas jika ia membukanya di tempat umum.
- 💌 **Surat Digital Interaktif (Interactive Envelope)**:
  Amplop pastel dengan segel merah berbentuk hati. Saat segel diklik, terdengar efek *chime* piano dan lembaran surat diary beranimasi terbuka.
- 💖 **Interactive Heart Explosion Widget**:
  Tombol hati melayang di sudut kanan bawah (`💖`) yang ketika ditekan akan memancarkan ledakan 15 partikel hati melayang di seluruh layar disertai penghitung jumlah cinta (*"1 ♥", "2 ♥", dst*).
- 📖 **Galeri Puisi & Cards**:
  Kumpulan kutipan puitis dengan tombol simpan/suka & tombol acak puisi hari ini.
- 🌸 **Galeri Kenangan Polaroid & Lightbox**:
  Foto polaroid miring aesthetic yang dapat diklik untuk diperbesar (*full-screen view*).
- 🎡 **Toples Ajak Jalan Rahasia (Secret Date Invitations)**:
  Tombol interaktif *"Ambil Ide Jalan-Jalan 🎡"* yang mengeluarkan berbagai pesan manis ajakan jalan-jalan/kencan (seperti ajakan minum kopi, nonton film, makan gelato, keliling kota, hingga menikmati senja bersama).
- 📱 **100% Responsif HP & Laptop**:
  Navigasi header otomatis berubah menjadi *Fullscreen Romantic Mobile Overlay* saat dibuka di HP.

---

## 2. 📂 STRUKTUR FILE PROJECT

Project tersimpan di folder: `c:\Users\najri\Downloads\shelvia\`

```text
shelvia/
├── index.html                           # Struktur utama halaman website
├── styles.css                           # Desain visual pastel, animasi & responsif layar
├── script.js                            # Logika interaktif, musik piano, partikel & countdown
├── DOKUMENTASI_LENGKAP_WEBSITE_ROMANTIS.md # Dokumen panduan ini
└── images/                              # Folder foto polaroid kenangan
    ├── sunset.png                       # Foto Senja Bersama (Ilustrasi Romantis)
    ├── garden.png                       # Foto Taman Bunga
    ├── starlit.png                      # Foto Malam Bintang
    └── cozy.png                         # Foto Cangkir Kopi Warm Moment
```

---

## 3. ✨ FITUR CANGGIH TERBARU

Berikut adalah 7 fitur canggih yang baru saja ditambahkan untuk pengalaman romantis terbaik:

1. **Loading Screen Bertema (Preloader Animation)**:
   Animasi hati berdenyut bercahaya (*pulsing red heart*) bertuliskan *"Memuat ruang kata khusus untuk **Shelvia**..."* sebelum seluruh website terbuka.
2. **Efek Scroll Storytelling (Intersection Observer)**:
   Setiap bagian section, amplop surat, dan galeri muncul perlahan dengan efek *fade-in & slide-up* saat di-scroll, menciptakan kesan seolah-olah sedang membuka lembaran buku cerita romantis.
3. **Tombol Mute Musik Halus**:
   Ikon tombol mute discrete di navbar kanan atas (`fa-volume-high` / `fa-volume-xmark`) agar ia bisa mematikan/menyalakan musik dengan nyaman di tempat umum.
4. **Open Graph Meta Tags (Preview WhatsApp / Social Media)**:
   Ketika link dikirimkan melalui WhatsApp/Instagram, secara otomatis akan muncul judul cantik *"Ruang Kata Untukmu 🌹 - Khusus Untuk Shelvia"* lengkap dengan deskripsi puitis dan foto preview menarik.
5. **Cara Merespons Balik ("Aku Juga Senang Menerima Ini 💌")**:
   Di bagian bawah website terdapat tombol interaksi 2 arah. Begitu ditekan, ia bisa langsung membalas pesan manis lewat WhatsApp atau mengirimkan *"Pelukan Digital"* dengan ledakan animasi hati!

---

## 4. ✍️ PANDUAN MENGUBAH KONTEN (TEKS, NAMA & FOTO)

Jika di kemudian hari kamu ingin mengubah nama, isi surat, foto, atau tanggal countdown, berikut langkah mudahnya:

### A. Mengubah Nama Penerima ("Shelvia") & Nama Pengirim
- Buka file `script.js`
- Cari bagian paling atas (baris ~40):
  ```javascript
  let appData = {
    targetName: "Shelvia",                   // Ubah nama penerima di sini
    senderName: "Dariku yang Mengagumimu",  // Ubah namamu/julukanmu di sini
    ...
  };
  ```

### B. Mengubah Isi Surat Digital Rahasia
- Buka file `script.js`
- Cari variabel `letterContent`:
  ```javascript
  letterContent: `Aku menulis halaman ini bukan untuk dunia...`,
  ```

### C. Mengubah Tanggal Hitung Mundur (Countdown)
- Buka file `script.js`
- Cari baris:
  ```javascript
  targetDate: "2027-02-14", // Format: YYYY-MM-DD
  ```

---

## 5. 🌹 KUMPULAN SELURUH KATA-KATA PUITIS

### 🌟 Header / Hero Section
- **Judul**: *"Untukmu, Ruang Kata Ini Tercipta. **Shelvia**"*
- **Subjudul**: *"Setiap huruf adalah denyut, setiap baris adalah napas, dan semua menuju pada satu nama yang paling indah di semesta."*

### 💌 Surat Digital Rahasia
> *"Untuk Jiwa yang Paling Spesial, **Shelvia** ✨"*
>
> *"Aku menulis halaman ini bukan untuk dunia, tapi untuk satu jiwa yang membuat semesta terasa indah."*
>
> *"Setiap kata adalah denyut, setiap baris adalah napas, semua menuju satu nama: kamu. Sejak awal kehadiranmu, dunia terasa lebih hangat dan bermakna. Senyummu adalah cahaya yang menyalakan seluruh halaman ini, dan tawamu adalah lagu terindah yang selalu ingin kudengar berulang kali."*
>
> *"Jika malam punya bintang untuk menerangi gelapnya, maka hatiku punya kamu untuk menghiasi setiap detik kehidupan ini."*
>
> *"Semoga halaman kecil ini selalu menjadi saksi dan rumah hangat bagi perasaan yang tak pernah selesai."*
>
> *Dengan segenap rindu,*
> ***Dariku yang Mengagumimu*** 🌹

### 📖 Galeri Puisi & Kutipan
1. *"Aku menulis halaman ini bukan untuk dunia, tapi untuk satu jiwa yang membuat semesta terasa indah."*
2. *"Setiap kata adalah denyut, setiap baris adalah napas, semua menuju satu nama: kamu."*
3. *"Di antara ribuan kata, hanya satu yang selalu kutulis: namamu."*
4. *"Jika malam punya bintang, maka hatiku punya kamu."*
5. *"Aku ingin setiap halaman ini menjadi saksi, bahwa aku pernah jatuh cinta sedalam ini."*
6. *"Senyummu adalah cahaya yang menyalakan seluruh halaman ini."*
7. *"Langkahmu adalah irama yang membuat waktu terasa begitu indah."*
8. *"Semoga halaman ini selalu jadi rumah bagi perasaan yang tak pernah selesai."*

---

## 6. 🚀 CARA MENGUPLOAD & MENGIRIMKAN WEBSITE

Agar orang yang kamu suka dapat membuka website ini langsung dari HP-nya kapan saja via link web resmi (misal `https://shelvia-ruangkata.vercel.app`):

### Cara Gratis Menggunakan Vercel (1 Menit Deploy):
1. Buka situs [vercel.com](https://vercel.com) dan buat akun gratis.
2. Drag & drop folder `shelvia` langsung ke dashboard Vercel.
3. Vercel akan otomatis memberikan link web resmi (contoh: `https://shelvia.vercel.app`).
4. Kirimkan link tersebut kepadanya dengan pesan manis!

---

*Website ini dibuat dengan cinta dan dedikasi penuh.* 🌹✨
