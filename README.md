# Plaza BPJamsostek — Website Corporate Premium

Website resmi Plaza BPJamsostek: Grade A Office Tower di CBD Kuningan, Jakarta Selatan.
Dibangun ulang dari source code lama menjadi situs multi-halaman yang modern, cepat, dan
siap dipublikasikan ke GitHub Pages maupun hosting biasa — **tanpa proses build/compile**.
Cukup upload semua file apa adanya.

---

## 1. Struktur Folder

```
├── index.html                 Beranda
├── sewa-kantor.html           Available Office for Rent (7 lantai, data dari PDF resmi)
├── floor-directory.html       Peta zonasi 28 lantai
├── foodcourt.html             Foodcourt (galeri, tenant, review, peta)
├── tenant-directory.html      Direktori tenant (search, filter, favorit)
├── ballroom.html               Ballroom & Meeting Room
├── fasilitas.html              Fasilitas gedung + tim housekeeping/security/engineering
├── lokasi.html                 Lokasi, transportasi, landmark sekitar
├── kontak.html                 Kontak, form, QR WhatsApp, peta
├── 404.html                    Halaman error kustom
├── sitemap.xml / robots.txt    SEO
├── css/
│   ├── fonts.css               Font self-hosted (Sora, Inter, Fraunces)
│   ├── base.css                Design token, nav, footer, tombol, modal, dsb (dipakai semua halaman)
│   └── pages.css                Style khusus tiap halaman
├── js/
│   ├── data.js                  ⭐ SUMBER DATA UTAMA — edit di sini untuk update konten
│   ├── i18n-data.js             Kamus terjemahan Indonesia/English
│   ├── i18n.js                  Mesin pergantian bahasa
│   ├── main.js                  Navigasi, dark mode, animasi, jam, cuaca, dsb
│   ├── ai-assistant.js          Chatbot asisten virtual (rule-based)
│   └── page-*.js                Logic khusus tiap halaman (filter, modal, dsb)
└── assets/
    ├── logo.png, favicon*
    ├── fonts/                   File font (.woff2)
    ├── docs/                    Brosur PDF asli (untuk tombol Download)
    └── img/                     Semua foto (hero, floors, facility, foodcourt, dst.)
```

## 2. Cara Menjalankan di Komputer Lokal

Karena situs ini murni HTML/CSS/JS statis, cukup buka `index.html` langsung di
browser, **atau** (lebih disarankan agar semua fitur JS berjalan sempurna) jalankan
local server sederhana dari folder ini:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## 3. Deploy ke GitHub Pages

1. Buat repository baru di GitHub, upload seluruh isi folder ini (jangan taruh di
   dalam sub-folder — `index.html` harus berada di root repo).
2. Buka **Settings → Pages**, pilih branch `main` dan folder `/root`.
3. Tunggu 1–2 menit, situs akan aktif di `https://namauser.github.io/namarepo/`.
4. File `.nojekyll` sudah disertakan agar GitHub tidak memproses folder lewat Jekyll.

## 4. Deploy ke Hosting Biasa (cPanel, dsb.)

Upload seluruh isi folder ini ke `public_html` (atau folder root domain Anda) via
FTP/File Manager. Tidak ada proses build, database, atau PHP yang dibutuhkan.

## 5. Mengedit Konten (paling penting!)

Hampir semua data yang tampil di beberapa halaman sekaligus (harga sewa, daftar
tenant, fasilitas, FAQ, berita) diatur dari **satu file**: `js/data.js`. Edit di sana,
dan perubahan akan otomatis muncul di semua halaman terkait — tidak perlu mengedit
HTML satu per satu.

Contoh: menambah lantai baru yang tersedia disewa, tinggal tambahkan satu objek baru
di array `floors` pada `js/data.js`, lengkap dengan foto, luas, harga, dan kondisi.

### Ganti Bahasa / Teks Statis
Teks yang tidak datanya dari `data.js` (judul, tombol, label) diatur di
`js/i18n-data.js`, dengan pasangan versi Indonesia (`id`) dan Inggris (`en`).

## 6. Foto yang Masih Perlu Diganti

Sebagian besar foto sudah menggunakan foto asli dari PDF referensi dan foto foodcourt
yang Anda kirim. Namun ada beberapa bagian yang **belum memiliki foto asli** dan saat
ini ditampilkan sebagai panel elegan bertuliskan "Foto akan segera diperbarui"
(bukan gambar rusak/placeholder norak seperti sebelumnya):

- **Ballroom** (`ballroom.html`) — belum ada foto interior ballroom.
- **Galeri Foodcourt** — hanya 2 foto asli (1 foto Anda + 1 foto kecil dari PDF), 2 slot
  galeri masih placeholder.

Untuk mengganti: cukup taruh file foto baru di `assets/img/ballroom/` atau
`assets/img/foodcourt/`, lalu update `src` di HTML terkait (atau beri tahu saya untuk
dibantu memasukkannya).

## 7. Fitur yang Sengaja Masih "Coming Soon"

Sesuai instruksi awal, beberapa fitur memang belum diisi karena menunggu data/aset
dari Anda — ini bukan bug:

- **360° Virtual Tour** (halaman Ballroom)
- **EV Charging Station** (halaman Fasilitas) — masih tahap perencanaan
- **Company Profile PDF** (Download Center di Beranda) — hanya brosur Available Office
  yang sudah tersedia
- **Price List Ballroom & Meeting Room** — ditampilkan "Hubungi Kami" karena tidak ada
  data harga resmi di sumber yang diberikan (menghindari menampilkan angka rekaan)

## 8. Testimoni & Berita — Konten Contoh

Bagian **Testimoni** (Beranda & Foodcourt) dan **Berita/Pengumuman** (Beranda) saat ini
berisi **konten contoh/ilustratif** (bukan kutipan asli dari tenant sungguhan), agar
tampilan bagian ini sudah "hidup" sejak awal. Silakan ganti dengan testimoni tenant
asli dan pengumuman resmi Anda di `js/data.js` (array `testimonials`,
`foodcourtReviews`, dan `news`) kapan pun sudah tersedia.

## 9. Koreksi Data dari Versi Sebelumnya

Beberapa data pada source code lama **tidak sesuai** dengan PDF referensi resmi yang
Anda kirimkan, sehingga sudah diperbarui:

- Data **Available Office** (lantai, luas, harga) sepenuhnya diganti mengikuti PDF:
  Lantai 1, 9, 11, 12, 15, 16, 18 — bukan lagi Lantai 1, 7, 9, 10, 11, 12, 15, 18 versi lama.
- Klaim sertifikasi **"Green Building Gold"** pada versi lama dihapus karena tidak ada
  dokumen pendukung yang bisa memverifikasi klaim tersebut. Silakan hubungi saya bila
  Anda memiliki sertifikat resmi untuk ditambahkan kembali dengan data yang akurat.
- Referensi ke `facility.css` dan `facility.js` yang hilang (membuat situs lama error)
  sudah diperbaiki — seluruh style & logic kini terstruktur rapi di `css/` dan `js/`.
- Nomor telepon kantor lama (021 5091 5190) tetap dipertahankan sebagai kontak
  sekunder, berdampingan dengan nomor Tenant Relation resmi dari PDF (0852-1156-6707)
  yang kini menjadi kontak utama (WhatsApp, tombol Book Now, dsb).

## 10. Menghubungkan AI Assistant ke Model AI Sungguhan (opsional)

Saat ini AI Assistant berjalan 100% di browser (rule-based, tanpa server/API key),
sehingga aman dipakai di GitHub Pages tanpa biaya. Jika suatu saat ingin membuatnya
lebih pintar dengan model AI sungguhan, `js/ai-assistant.js` cukup dimodifikasi untuk
memanggil API (misalnya Anthropic API) dari backend/serverless function milik Anda —
jangan panggil API key langsung dari browser demi keamanan.

## 11. Fitur yang Sudah Berjalan Penuh

Dark mode • Bilingual ID/EN • Live clock WIB • Live cuaca Jakarta (Open-Meteo) •
Animated counters • Visitor counter (lokal per-browser) • FAQ accordion •
Testimonial & review carousel • Search & filter Available Office • Search, filter,
favorit Tenant Directory • Lightbox galeri • Floating WhatsApp/Call/Email • AI
Assistant chatbot • Form kontak & newsletter (demo, siap dihubungkan ke email service
seperti Formspree bila diperlukan) • Print-friendly (halaman Sewa Kantor punya versi
tabel cetak) • Aksesibilitas dasar (skip-link, aria-label, kontras warna, navigasi
keyboard pada modal).

## 12. Sumber Aset

- Semua foto gedung, lantai, dan fasilitas diekstrak dari PDF resmi
  *"Available Office For Rent — Plaza BPJamsostek"* yang Anda kirimkan.
- Foto foodcourt dari file yang Anda unggah.
- Font Sora, Inter, dan Fraunces — Google Fonts (lisensi Open Font License), di-host
  sendiri di folder `assets/fonts/`.
- Palet warna hijau/emas diambil langsung dari logo dan dokumen resmi Plaza
  BPJamsostek (bukan warna generik template).

---

Ada pertanyaan atau ingin penyesuaian lebih lanjut (menambah lantai baru, mengganti
foto, menambah bahasa lain, dll.) — tinggal beri tahu.
