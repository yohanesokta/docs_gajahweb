---
sidebar_position: 5
---

# utils/runtime.dart

File ini berisi fungsi yang terkait dengan konfigurasi runtime aplikasi.

### Fungsi `getConfig()`:
- Fungsi asinkron yang bertanggung jawab untuk membaca konfigurasi aplikasi.
- Memeriksa keberadaan file `C:\gajahweb\install.log`.
- Saat ini, fungsi tersebut adalah placeholder dan tidak melakukan tindakan apa pun dengan file tersebut, tetapi dimaksudkan untuk digunakan untuk membaca konfigurasi runtime atau memverifikasi status instalasi.

Fungsi ini dipanggil di `initState()` dari `_HomeAppState` di `home.dart` untuk melakukan tugas pengaturan awal.