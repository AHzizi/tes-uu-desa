import type { Question } from '../types';

// Helper function to transform questions with "pilihan" format
function transformQuestion(q: any): Question {
  if ('pilihan' in q) {
    return {
      id: q.id,
      question: q.pertanyaan,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: q.penjelasan
    };
  }
  if ('soal' in q) {
    return {
      id: q.id,
      question: q.soal,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: ''
    };
  }
  return q;
}

// All questions combined and transformed
export const questions: Question[] = [
  {
    "id": 1,
    "question": "Desa dapat membentuk lembaga adat sesuai dengan ketentuan...",
    "options": [
      "Peraturan Menteri Desa",
      "Peraturan Daerah Provinsi",
      "Peraturan Desa",
      "Instruksi Camat"
    ],
    "correctAnswer": 2,
    "explanation": "Pembentukan lembaga adat diatur melalui Peraturan Desa berdasarkan Pasal 95 UU No. 6 Tahun 2014."
  },
  {
    "id": 2,
    "question": "Jika terjadi kekosongan jabatan Kepala Desa, pelaksana tugas sementara dijabat oleh...",
    "options": [
      "Sekretaris Desa",
      "Ketua BPD",
      "Camat",
      "Perangkat Desa tertua"
    ],
    "correctAnswer": 0,
    "explanation": "Sekretaris Desa menjadi Pelaksana Tugas (Plt) Kepala Desa selama masa kekosongan jabatan (Pasal 42 UU No. 6 Tahun 2014)."
  },
  {
    "id": 3,
    "question": "Musyawarah perencanaan pembangunan desa (Musrenbangdes) bertujuan untuk menyusun...",
    "options": [
      "APBDesa dan Laporan Pertanggungjawaban",
      "RPJMDesa dan RKPDesa",
      "Peraturan Desa tentang keuangan",
      "Daftar calon perangkat desa"
    ],
    "correctAnswer": 1,
    "explanation": "Musrenbangdes membahas Rencana Pembangunan Jangka Menengah Desa (RPJMDesa) dan Rencana Kerja Pemerintah Desa (RKPDesa) sesuai Permendesa No. 16 Tahun 2018."
  },
  {
    "id": 4,
    "question": "Berikut yang termasuk aset desa adalah...",
    "options": [
      "Gedung DPRD Kabupaten",
      "Jalan provinsi yang melintasi desa",
      "Tanah kas desa",
      "Kantor kecamatan"
    ],
    "correctAnswer": 2,
    "explanation": "Aset desa meliputi tanah kas desa, bangunan, dan barang milik desa yang dikelola berdasarkan Peraturan Desa (Pasal 81 UU No. 6 Tahun 2014)."
  },
  {
    "id": 5,
    "question": "Pemerintah desa wajib menyampaikan informasi APBDesa kepada masyarakat melalui...",
    "options": [
      "Surat kabar lokal",
      "Papan informasi desa",
      "Media sosial pribadi Kepala Desa",
      "Rapat kabupaten"
    ],
    "correctAnswer": 1,
    "explanation": "Transparansi APBDesa wajib dilakukan melalui papan informasi desa atau media mudah diakses masyarakat (Permendagri No. 113 Tahun 2014)."
  },
  {
    "id": 6,
    "question": "Desa berhak mengelola dana desa secara mandiri, tetapi tetap harus melaporkannya kepada...",
    "options": [
      "Kementerian Keuangan",
      "Bupati/Walikota melalui Camat",
      "DPRD Provinsi",
      "Inspektorat Jenderal"
    ],
    "correctAnswer": 1,
    "explanation": "Laporan pengelolaan dana desa disampaikan ke Bupati/Walikota melalui Camat sebagai bentuk pertanggungjawaban (Pasal 82 UU No. 6 Tahun 2014)."
  },
  {
    "id": 7,
    "question": "Program prioritas penggunaan dana desa untuk bidang pendidikan diarahkan pada...",
    "options": [
      "Pembangunan gedung sekolah negeri",
      "Beasiswa bagi siswa miskin",
      "Pelatihan guru honorer",
      "Pengadaan seragam gratis"
    ],
    "correctAnswer": 1,
    "explanation": "Prioritas dana desa di bidang pendidikan fokus pada peningkatan akses pendidikan bagi masyarakat miskin, seperti pemberian beasiswa (Permendes No. 7 Tahun 2021)."
  },
  {
    "id": 8,
    "question": "Anggaran untuk pembentukan BUMDes bersumber dari...",
    "options": [
      "APBN",
      "APBDesa",
      "Hibah perusahaan swasta",
      "Pinjaman bank"
    ],
    "correctAnswer": 1,
    "explanation": "Pembentukan dan pengembangan BUMDes dibiayai melalui APBDesa sesuai Pasal 87 UU No. 6 Tahun 2014."
  },
  {
    "id": 9,
    "question": "Keputusan Musyawarah Desa bersifat...",
    "options": [
      "Mengikat seluruh warga desa",
      "Himbauan bagi pemerintah desa",
      "Referensi bagi Camat",
      "Usulan ke pemerintah kabupaten"
    ],
    "correctAnswer": 0,
    "explanation": "Hasil Musdes menjadi keputusan yang mengikat dan wajib dilaksanakan oleh pemerintah desa (Pasal 54 UU No. 6 Tahun 2014)."
  },
  {
    "id": 10,
    "question": "Dalam penyusunan Peraturan Desa, BPD berperan sebagai...",
    "options": [
      "Penyelaras aspirasi masyarakat",
      "Penanggung jawab anggaran",
      "Pelaksana teknis",
      "Pengawas proyek fisik"
    ],
    "correctAnswer": 0,
    "explanation": "BPD bertugas menampung dan menyelaraskan aspirasi masyarakat dalam pembentukan Peraturan Desa (Pasal 55 UU No. 6 Tahun 2014)."
  },
  {
    "id": 11,
    "question": "Sanksi administratif bagi Kepala Desa yang tidak menyusun laporan keuangan desa adalah...",
    "options": [
      "Teguran tertulis dari Camat",
      "Pemberhentian sementara",
      "Denda dari pemerintah provinsi",
      "Pelaporan ke kepolisian"
    ],
    "correctAnswer": 0,
    "explanation": "Pelanggaran administratif seperti keterlambatan laporan keuangan dapat diberi teguran tertulis oleh Camat (Pasal 41 PP No. 43 Tahun 2014)."
  },
  {
    "id": 12,
    "question": "Desa dapat melakukan pinjaman dana dari pihak luar dengan syarat...",
    "options": [
      "Disetujui oleh Gubernur",
      "Direncanakan dalam APBDesa",
      "Diketahui oleh DPRD",
      "Diperlukan untuk proyek infrastruktur"
    ],
    "correctAnswer": 1,
    "explanation": "Pinjaman desa harus direncanakan dalam APBDesa dan mendapat persetujuan BPD (Pasal 73 UU No. 6 Tahun 2014)."
  },
  {
    "id": 13,
    "question": "Pembubaran BUMDes hanya dapat dilakukan melalui...",
    "options": [
      "Keputusan Camat",
      "Peraturan Desa",
      "Musyawarah Desa",
      "Instruksi Bupati"
    ],
    "correctAnswer": 1,
    "explanation": "Pembubaran BUMDes diatur melalui Peraturan Desa, sama seperti pembentukannya (Pasal 87 UU No. 6 Tahun 2014)."
  },
  {
    "id": 14,
    "question": "Laporan Keterangan Pertanggungjawaban (LKPJ) Kepala Desa disampaikan kepada...",
    "options": [
      "BPD dan masyarakat melalui Musdes",
      "Camat dan DPRD Kabupaten",
      "Gubernur dan Menteri Desa",
      "Inspektorat Daerah"
    ],
    "correctAnswer": 0,
    "explanation": "LKPJ disampaikan ke BPD dan dibahas dalam Musyawarah Desa sebagai bentuk akuntabilitas (Pasal 26 PP No. 43 Tahun 2014)."
  },
  {
    "id": 15,
    "question": "Hak masyarakat dalam penyelenggaraan pemerintahan desa adalah...",
    "options": [
      "Memilih dan dipilih sebagai Kepala Desa",
      "Menetapkan sanksi adat",
      "Mengubah APBDesa tanpa musyawarah",
      "Membatalkan Peraturan Desa"
    ],
    "correctAnswer": 0,
    "explanation": "Masyarakat berhak memilih dan dipilih dalam pemilihan Kepala Desa sesuai prinsip demokrasi (Pasal 37 UU No. 6 Tahun 2014)."
  },
  {
    "id": 16,
    "question": "Desa dilarang membentuk lembaga yang bertugas...",
    "options": [
      "Mengelola keuangan desa",
      "Melakukan fungsi kepolisian",
      "Mengawasi program BUMDes",
      "Membantu administrasi kependudukan"
    ],
    "correctAnswer": 1,
    "explanation": "Desa tidak boleh membentuk lembaga yang menjalankan fungsi penegakan hukum seperti kepolisian (Pasal 95 UU No. 6 Tahun 2014)."
  },
  {
    "id": 17,
    "question": "Desa berwenang mengatur tata ruang wilayahnya berdasarkan...",
    "options": [
      "Rencana Tata Ruang Wilayah (RTRW) Kabupaten",
      "Kesepakatan masyarakat adat",
      "Peraturan Menteri Agraria",
      "Inisiatif BPD"
    ],
    "correctAnswer": 0,
    "explanation": "Kewenangan tata ruang desa harus selaras dengan RTRW Kabupaten (Pasal 19 UU No. 6 Tahun 2014)."
  },
  {
    "id": 18,
    "question": "Keanggotaan BPD tidak boleh dirangkap oleh...",
    "options": [
      "Tokoh agama",
      "Perangkat desa",
      "Ketua RT/RW",
      "Pengurus BUMDes"
    ],
    "correctAnswer": 1,
    "explanation": "Perangkat desa dilarang merangkap jabatan sebagai anggota BPD untuk menjaga independensi (Pasal 57 UU No. 6 Tahun 2014)."
  },
  {
    "id": 19,
    "question": "Bantuan keuangan dari provinsi ke desa termasuk dalam kategori...",
    "options": [
      "Dana Desa",
      "Alokasi Dana Desa (ADD)",
      "Pendapatan Asli Desa (PADes)",
      "Hibah"
    ],
    "correctAnswer": 3,
    "explanation": "Bantuan keuangan dari pemerintah provinsi termasuk hibah sesuai Pasal 72 UU No. 6 Tahun 2014."
  },
  {
    "id": 20,
    "question": "Pelaksanaan pembangunan fisik desa wajib melibatkan...",
    "options": [
      "Kontraktor dari kabupaten",
      "Swadaya masyarakat",
      "Tenaga kerja luar desa",
      "Perusahaan BUMN"
    ],
    "correctAnswer": 1,
    "explanation": "Pembangunan fisik desa harus melibatkan swadaya masyarakat sebagai bentuk partisipasi (Permendagri No. 113 Tahun 2014)."
  },
  {
    "id": 21,
    "question": "Pada bagian Pembukaan UUD 1945, sila 'Ketuhanan Yang Maha Esa' tercantum dalam alinea keberapa?",
    "options": [
      "Pertama",
      "Kedua",
      "Ketiga",
      "Keempat"
    ],
    "correctAnswer": 3,
    "explanation": "Sila 'Ketuhanan Yang Maha Esa' terdapat dalam alinea keempat Pembukaan UUD 1945 sebagai bagian dari Pancasila."
  },
  {
    "id": 22,
    "question": "Tugas Mahkamah Agung (MA) diatur dalam pasal berapa UUD 1945?",
    "options": [
      "Pasal 24",
      "Pasal 24A",
      "Pasal 25",
      "Pasal 26"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 24A UUD 1945 mengatur tugas dan wewenang Mahkamah Agung sebagai pemegang kekuasaan kehakiman tertinggi."
  },
  {
    "id": 23,
    "question": "Presiden dapat menyatakan keadaan bahaya sesuai dengan ketentuan yang diatur dalam...",
    "options": [
      "Pasal 12",
      "Pasal 14",
      "Pasal 16",
      "Pasal 18"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 12 UUD 1945 memberikan kewenangan kepada presiden untuk menyatakan keadaan bahaya dengan syarat-syarat tertentu."
  },
  {
    "id": 24,
    "question": "Perekonomian nasional disusun berdasarkan demokrasi ekonomi dengan prinsip...",
    "options": [
      "Kekeluargaan",
      "Persaingan bebas",
      "Monopoli negara",
      "Kapitalisme"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 33 Ayat 1 UUD 1945 menyatakan bahwa perekonomian disusun sebagai usaha bersama berdasar asas kekeluargaan."
  },
  {
    "id": 25,
    "question": "Pasal yang mengatur tentang penghormatan terhadap budaya dan hak masyarakat tradisional adalah...",
    "options": [
      "Pasal 28I",
      "Pasal 32",
      "Pasal 34",
      "Pasal 36"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 32 UUD 1945 mengatur bahwa negara memajukan kebudayaan nasional serta menghormati dan memelihara budaya masyarakat tradisional."
  },
  {
    "id": 26,
    "question": "Berapa persen anggaran pendidikan yang harus dialokasikan dalam APBN dan APBD menurut UUD 1945?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "correctAnswer": 2,
    "explanation": "Pasal 31 Ayat 4 UUD 1945 menetapkan bahwa anggaran pendidikan minimal 20% dari APBN dan APBD."
  },
  {
    "id": 27,
    "question": "Definisi warga negara Indonesia diatur dalam pasal...",
    "options": [
      "Pasal 26",
      "Pasal 27",
      "Pasal 28",
      "Pasal 29"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 26 Ayat 1 UUD 1945 menyatakan bahwa yang menjadi warga negara adalah orang-orang bangsa Indonesia asli dan orang asing yang disahkan oleh undang-undang."
  },
  {
    "id": 28,
    "question": "Presiden dan/atau Wakil Presiden dapat diberhentikan sebelum masa jabatannya berakhir melalui mekanisme...",
    "options": [
      "Sidang Istimewa MPR",
      "Pemilihan Umum ulang",
      "Putusan Mahkamah Agung",
      "Keputusan DPR"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 7B UUD 1945 mengatur bahwa pemberhentian Presiden/Wakil Presiden dilakukan melalui usul DPR yang disetujui dalam Sidang MPR."
  },
  {
    "id": 29,
    "question": "Fungsi legislatif DPR diatur dalam pasal...",
    "options": [
      "Pasal 20",
      "Pasal 21",
      "Pasal 22",
      "Pasal 23"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 20 Ayat 1 UUD 1945 menyatakan bahwa DPR memegang kekuasaan membentuk undang-undang."
  },
  {
    "id": 30,
    "question": "Bendera negara Indonesia diatur dalam pasal...",
    "options": [
      "Pasal 35",
      "Pasal 36",
      "Pasal 36A",
      "Pasal 36B"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 35 UUD 1945 menegaskan bahwa bendera negara Indonesia adalah Sang Merah Putih."
  },
  {
    "id": 31,
    "question": "Kebebasan memeluk agama dan beribadah dijamin dalam pasal...",
    "options": [
      "Pasal 28E",
      "Pasal 29",
      "Pasal 30",
      "Pasal 31"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 29 Ayat 2 UUD 1945 menyatakan negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agama dan beribadah."
  },
  {
    "id": 32,
    "question": "Badan Pemeriksa Keuangan (BPK) bertugas memeriksa pengelolaan keuangan negara berdasarkan...",
    "options": [
      "Asas transparansi",
      "Asas kebebasan",
      "Asas kepatuhan",
      "Asas keadilan"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 23E Ayat 1 UUD 1945 menetapkan BPK bertugas memeriksa pengelolaan keuangan negara dengan prinsip transparansi dan akuntabilitas."
  },
  {
    "id": 33,
    "question": "Gubernur, Bupati, dan Walikota dipilih melalui...",
    "options": [
      "Penunjukan Presiden",
      "Pemilihan langsung oleh rakyat",
      "Keputusan DPRD",
      "Musyawarah adat"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 18 Ayat 4 UUD 1945 menyatakan bahwa kepala daerah dipilih secara demokratis melalui pemilihan langsung."
  },
  {
    "id": 34,
    "question": "Keikutsertaan warga negara dalam usaha pertahanan negara diatur dalam pasal...",
    "options": [
      "Pasal 27",
      "Pasal 28",
      "Pasal 30",
      "Pasal 31"
    ],
    "correctAnswer": 2,
    "explanation": "Pasal 30 Ayat 1 UUD 1945 menyatakan bahwa setiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara."
  },
  {
    "id": 35,
    "question": "Mahkamah Konstitusi (MK) memiliki kewenangan untuk menguji undang-undang terhadap...",
    "options": [
      "Peraturan Pemerintah",
      "UUD 1945",
      "Keputusan Presiden",
      "Perda"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 24C Ayat 1 UUD 1945 memberi MK kewenangan menguji undang-undang terhadap UUD 1945."
  },
  {
    "id": 36,
    "question": "Negara bertanggung jawab atas penyediaan fasilitas pelayanan kesehatan dan fasilitas pelayanan umum yang layak diatur dalam pasal...",
    "options": [
      "Pasal 28H",
      "Pasal 33",
      "Pasal 34",
      "Pasal 35"
    ],
    "correctAnswer": 2,
    "explanation": "Pasal 34 Ayat 3 UUD 1945 menyatakan negara bertanggung jawab atas penyediaan fasilitas pelayanan kesehatan dan fasilitas umum yang layak."
  },
  {
    "id": 37,
    "question": "Rancangan undang-undang APBN diajukan oleh Presiden kepada...",
    "options": [
      "DPR",
      "MPR",
      "BPK",
      "MK"
    ],
    "correctAnswer": 0,
    "explanation": "Pasal 23 Ayat 2 UUD 1945 menyatakan bahwa RUU APBN diajukan Presiden ke DPR untuk dibahas bersama."
  },
  {
    "id": 38,
    "question": "Usul amendemen UUD 1945 dapat diajukan oleh...",
    "options": [
      "Presiden",
      "Minimal 1/3 anggota MPR",
      "Mahkamah Konstitusi",
      "DPD"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 37 Ayat 1 UUD 1945 menyatakan usul amendemen diajukan oleh sekurang-kurangnya 1/3 anggota MPR."
  },
  {
    "id": 39,
    "question": "Hak setiap warga negara untuk mendapatkan pekerjaan dan penghidupan yang layak diatur dalam pasal...",
    "options": [
      "Pasal 27 Ayat 1",
      "Pasal 27 Ayat 2",
      "Pasal 28D Ayat 1",
      "Pasal 28E Ayat 2"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 27 Ayat 2 UUD 1945 menyatakan bahwa tiap warga negara berhak atas pekerjaan dan penghidupan yang layak."
  },
  {
    "id": 40,
    "question": "Bahasa resmi negara Indonesia diatur dalam pasal...",
    "options": [
      "Pasal 35",
      "Pasal 36",
      "Pasal 36A",
      "Pasal 36B"
    ],
    "correctAnswer": 1,
    "explanation": "Pasal 36 UUD 1945 menetapkan bahwa bahasa negara adalah Bahasa Indonesia."
  },
  {
    "id": 41,
    "question": "Pancasila sebagai ideologi nasional Indonesia tercantum secara resmi dalam...",
    "options": [
      "UUD 1945 Pasal 29",
      "Pembukaan UUD 1945 Alinea IV",
      "Tap MPR No. II/MPR/1978",
      "Undang-Undang Dasar Sementara 1950"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila tercantum dalam Pembukaan UUD 1945 Alinea IV sebagai dasar negara. Pilihan A mengatur tentang agama, C tentang Pedoman Penghayatan Pancasila, dan D bukan konstitusi yang berlaku."
  },
  {
    "id": 42,
    "question": "Nilai yang menonjol dalam sila keempat Pancasila adalah...",
    "options": [
      "Keadilan distributif",
      "Kebebasan individu",
      "Musyawarah untuk mufakat",
      "Kesetaraan gender"
    ],
    "correctAnswer": 2,
    "explanation": "Sila keempat menekankan musyawarah sebagai cara pengambilan keputusan. Pilihan A terkait sila kelima, B dan D lebih umum."
  },
  {
    "id": 43,
    "question": "Pancasila berperan sebagai paradigma pembangunan karena...",
    "options": [
      "Menjadi acuan dalam merancang program pembangunan nasional",
      "Mengutamakan pertumbuhan ekonomi semata",
      "Hanya relevan untuk pembangunan infrastruktur",
      "Bersifat tertutup terhadap perubahan global"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila menjadi landasan nilai dalam menyusun kebijakan pembangunan yang holistik. Pilihan B dan C sempit, sedangkan D bertentangan dengan sifat Pancasila."
  },
  {
    "id": 44,
    "question": "Contoh pelanggaran terhadap sila kelima Pancasila adalah...",
    "options": [
      "Tidak menghadiri rapat RT",
      "Diskriminasi dalam pemberian bantuan sosial",
      "Menolak hasil musyawarah",
      "Tidak melaksanakan ibadah"
    ],
    "correctAnswer": 1,
    "explanation": "Diskriminasi bertentangan dengan prinsip keadilan sosial. Pilihan A dan C terkait sila keempat, D sila pertama."
  },
  {
    "id": 45,
    "question": "Badan yang bertugas membina ideologi Pancasila di Indonesia adalah...",
    "options": [
      "BPIP",
      "KPK",
      "Komnas HAM",
      "MK"
    ],
    "correctAnswer": 0,
    "explanation": "BPIP (Badan Pembinaan Ideologi Pancasila) dibentuk untuk menguatkan pemahaman Pancasila. Pilihan lain adalah lembaga dengan fungsi berbeda."
  },
  {
    "id": 46,
    "question": "Pancasila dijadikan dasar untuk menolak paham komunisme karena...",
    "options": [
      "Komunisme mengutamakan kolektivitas tanpa menghargai individu",
      "Komunisme mendukung sistem monarki",
      "Komunisme sejalan dengan sila pertama Pancasila",
      "Komunisme tidak mengenal pemilihan umum"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila menolak komunisme karena paham tersebut bertentangan dengan prinsip kemanusiaan dan keseimbangan hak individu."
  },
  {
    "id": 47,
    "question": "Dalam konteks otonomi daerah, Pancasila berfungsi untuk...",
    "options": [
      "Membatasi kewenangan pemerintah daerah",
      "Memastikan kebijakan daerah sejalan dengan nilai kebangsaan",
      "Menghapus perbedaan budaya lokal",
      "Memberikan kekuasaan penuh kepada kepala daerah"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila menjadi pengikat kebijakan daerah agar tetap sesuai dengan kepentingan nasional. Pilihan A, C, dan D bertentangan dengan prinsip otonomi."
  },
  {
    "id": 48,
    "question": "Sikap yang mencerminkan sila ketiga Pancasila dalam keberagaman budaya adalah...",
    "options": [
      "Mengikuti lomba tradisi antar daerah",
      "Hanya mempelajari budaya sendiri",
      "Menghina kebiasaan suku lain",
      "Memaksakan budaya lokal ke daerah lain"
    ],
    "correctAnswer": 0,
    "explanation": "Sila ketiga mendorong penghargaan terhadap keragaman. Pilihan B, C, dan D bertentangan dengan semangat persatuan."
  },
  {
    "id": 49,
    "question": "Pancasila menjadi dasar hubungan internasional Indonesia karena...",
    "options": [
      "Menjunjung prinsip kemandirian tanpa kerja sama",
      "Mengedepankan perdamaian dan keadilan",
      "Menolak semua bentuk intervensi asing",
      "Hanya fokus pada kepentingan ekonomi"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila mengajarkan perdamaian abadi dan keadilan sosial, sesuai dengan politik luar negeri bebas aktif."
  },
  {
    "id": 50,
    "question": "Tokoh yang menyampaikan usulan dasar negara bernama Panca Darma adalah...",
    "options": [
      "Mohammad Yamin",
      "Soepomo",
      "Ki Bagus Hadikusumo",
      "Mr. Soepomo"
    ],
    "correctAnswer": 0,
    "explanation": "Mohammad Yamin mengusulkan Panca Darma dalam sidang BPUPKI, meski istilah akhirnya diubah menjadi Pancasila."
  },
  {
    "id": 51,
    "question": "Pancasila mengakomodasi nilai-nilai religius, hal ini terlihat dari...",
    "options": [
      "Diakuinya enam agama resmi",
      "Kebebasan beribadah dijamin konstitusi",
      "Pemerintah mengatur tata cara ibadah",
      "Pembatasan pendirian rumah ibadah"
    ],
    "correctAnswer": 1,
    "explanation": "Sila pertama menjamin kebebasan beragama, sesuai UUD 1945 Pasal 29. Pilihan A tidak tepat karena hanya ada 6 agama diakui, D bertentangan dengan toleransi."
  },
  {
    "id": 52,
    "question": "Alasan Pancasila tidak dapat diubah adalah...",
    "options": [
      "Termuat dalam Pembukaan UUD 1945",
      "Keputusan Presiden pertama",
      "Amanat dari kolonial Belanda",
      "Hasil referendum tahun 1969"
    ],
    "correctAnswer": 0,
    "explanation": "Pembukaan UUD 1945 (tempat Pancasila tercantum) memiliki kedudukan tetap dan tidak boleh diubah (Tap MPR No. XX/1966)."
  },
  {
    "id": 53,
    "question": "Implementasi sila kedua Pancasila dalam hukum adalah...",
    "options": [
      "Pemberian hukuman mati",
      "Perlindungan hak asasi manusia",
      "Pembentukan undang-undang partai politik",
      "Penerapan hukuman denda"
    ],
    "correctAnswer": 1,
    "explanation": "Sila kedua menjamin penghormatan HAM. Pilihan A dan D bisa bertentangan dengan HAM, C terkait sila keempat."
  },
  {
    "id": 54,
    "question": "Pancasila menjadi alat integrasi nasional karena...",
    "options": [
      "Memiliki fleksibilitas untuk diinterpretasikan",
      "Menyatukan berbagai perbedaan suku dan agama",
      "Mengakui superioritas satu kelompok",
      "Ditetapkan melalui pemungutan suara"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila menjadi perekat bangsa dengan mengakui dan menghargai keberagaman. Pilihan C dan D bertentangan dengan prinsip Pancasila."
  },
  {
    "id": 55,
    "question": "Contoh penerapan sila kelima di bidang ekonomi adalah...",
    "options": [
      "Subsidi listrik untuk masyarakat miskin",
      "Pembangunan gedung mewah di ibu kota",
      "Penetapan upah minimum tanpa pertimbangan",
      "Monopoli usaha oleh BUMN"
    ],
    "correctAnswer": 0,
    "explanation": "Subsidi untuk masyarakat miskin mencerminkan keadilan sosial. Pilihan B, C, dan D berpotensi menimbulkan ketidakadilan."
  },
  {
    "id": 56,
    "question": "Pancasila sebagai way of life berarti...",
    "options": [
      "Dijadikan pedoman hidup berbangsa",
      "Hanya berlaku untuk pejabat negara",
      "Bersifat sementara",
      "Meniru ideologi asing"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila sebagai pandangan hidup harus diterapkan dalam segala aspek kehidupan masyarakat."
  },
  {
    "id": 57,
    "question": "Peran Pancasila dalam mencegah radikalisme adalah...",
    "options": [
      "Menghapus semua aliran keagamaan",
      "Mengedepankan dialog dan toleransi",
      "Membatasi pendidikan agama",
      "Melarang kritik terhadap pemerintah"
    ],
    "correctAnswer": 1,
    "explanation": "Pancasila mengajarkan resolusi konflik melalui dialog dan menghargai perbedaan. Pilihan A, C, dan D bertentangan dengan demokrasi."
  },
  {
    "id": 58,
    "question": "Pancasila harus dipelajari secara kritis oleh generasi muda agar...",
    "options": [
      "Dapat menyesuaikan dengan perkembangan zaman",
      "Diubah sesuai keinginan global",
      "Menjadi alat politik praktis",
      "Digantikan dengan ideologi lain"
    ],
    "correctAnswer": 0,
    "explanation": "Pancasila sebagai ideologi terbuka perlu dipahami secara dinamis tanpa kehilangan jati diri."
  },
  {
    "id": 59,
    "question": "Pancasila mendorong terciptanya masyarakat yang...",
    "options": [
      "Homogen secara budaya",
      "Tunduk pada penguasa",
      "Demokratis dan berkeadilan",
      "Mengutamakan kelompok mayoritas"
    ],
    "correctAnswer": 2,
    "explanation": "Pancasila bertujuan mewujudkan masyarakat demokratis dan berkeadilan sosial. Pilihan lain bertentangan dengan nilai Pancasila."
  },
  {
    "id": 60,
    "question": "Makna “Bhinneka Tunggal Ika” dalam konteks Pancasila adalah...",
    "options": [
      "Persatuan dalam keseragaman",
      "Kesatuan dalam keberagaman",
      "Dominasi mayoritas atas minoritas",
      "Pembagian wilayah berdasarkan suku"
    ],
    "correctAnswer": 1,
    "explanation": "Bhinneka Tunggal Ika (berbeda-beda tetapi tetap satu) menegaskan persatuan meski terdapat keragaman."
  },
  {
    "id": 61,
    "question": "Kata baku yang tepat untuk melengkapi kalimat berikut adalah... \"Pembangunan itu akan tata kelola pemerintahan desa.\"",
    "options": [
      "merubah",
      "mengubah",
      "merobah",
      "mengobah"
    ],
    "correctAnswer": 1,
    "explanation": "Kata baku sesuai KBBI adalah 'mengubah' (menjadikan berbeda). 'Merubah' berarti 'membuat menjadi robek', bukan perubahan sistem."
  },
  {
    "id": 62,
    "question": "Kalimat berikut yang mengandung kesalahan penggunaan istilah resmi adalah...",
    "options": [
      "APBDes tahun ini difokuskan pada peningkatan infrastruktur.",
      "Musrenbang desa dihadiri oleh perwakilan masyarakat.",
      "Laporan pertanggungjawaban harus disahkan oleh camat.",
      "Kades menyampaikan sambutan dalam acara syukuran."
    ],
    "correctAnswer": 3,
    "explanation": "Istilah resmi untuk kepala desa adalah 'kepala desa', bukan 'Kades'. Singkatan resmi menurut Permendagri hanya untuk dokumen tertentu."
  },
  {
    "id": 63,
    "question": "Kata yang tepat menggantikan istilah asing \"implementasi\" dalam kalimat berikut adalah... \"_ program ini memerlukan koordinasi antarlembaga.\"",
    "options": [
      "Perencanaan",
      "Pelaksanaan",
      "Pengawasan",
      "Pembiayaan"
    ],
    "correctAnswer": 1,
    "explanation": "'Implementasi' berarti pelaksanaan atau penerapan suatu rencana. Pilihan lain tidak sesuai konteks."
  },
  {
    "id": 64,
    "question": "Kalimat berikut yang tidak efektif adalah...",
    "options": [
      "Banyak masyarakat-masyarakat yang hadir dalam sosialisasi tersebut.",
      "Surat undangan telah disebarkan melalui ketua RT.",
      "Dana desa dialokasikan untuk pembangunan posyandu.",
      "Hasil musyawarah akan dilaporkan ke kecamatan."
    ],
    "correctAnswer": 0,
    "explanation": "Penggunaan kata 'masyarakat-masyarakat' redundan. Bentuk jamak sudah tercakup dalam kata 'banyak'."
  },
  {
    "id": 65,
    "question": "Paragraf berikut termasuk jenis paragraf... \"Balai desa terletak di tengah pemukiman warga. Bangunannya berdiri megah dengan cat berwarna kuning gading. Di halamannya terdapat taman bunga yang tertata rapi dan beberapa gazebo untuk pertemuan warga.\"",
    "options": [
      "narasi",
      "deskripsi",
      "argumentasi",
      "eksposisi"
    ],
    "correctAnswer": 1,
    "explanation": "Paragraf tersebut menggambarkan ciri fisik suatu tempat secara detail, ciri khas paragraf deskripsi."
  },
  {
    "id": 66,
    "question": "Penulisan gabungan kata yang tepat terdapat pada kalimat...",
    "options": [
      "Warga diminta bertanggungjawab atas sampah rumah tangga.",
      "Pemerintah mengadakan sosialisasi tatapmuka.",
      "Hasil rapat akan diumumkan secara daring.",
      "Mereka sedang menyelesaikan tugas akhir semester."
    ],
    "correctAnswer": 2,
    "explanation": "'Daring' (dalam jaringan) merupakan kata resmi yang ditulis serangkai. Opsi A seharusnya 'bertanggung jawab' (terpisah), B 'tatap muka' (terpisah), D 'tugas akhir semester' (tanpa tanda hubung)."
  },
  {
    "id": 67,
    "question": "Kalimat berikut yang menggunakan majas metafora adalah...",
    "options": [
      "Suaranya menggelegar membelah langit.",
      "Anak itu adalah bintang kelas di sekolahnya.",
      "Pohon kelapa melambai-lambai diterpa angin.",
      "Kerjanya cepat seperti kilat."
    ],
    "correctAnswer": 1,
    "explanation": "Metafora adalah perbandingan langsung tanpa kata pembanding. 'Bintang kelas' berarti siswa terbaik, bukan bintang sebenarnya."
  },
  {
    "id": 68,
    "question": "Penulisan tanda baca yang tepat pada kalimat berikut adalah... \"Rapat akan membahas pertama pembangunan jalan desa kedua pengadaan alat pertanian ketiga pelatihan UMKM.\"",
    "options": [
      "Rapat akan membahas: pertama, pembangunan jalan desa; kedua, pengadaan alat pertanian; ketiga, pelatihan UMKM.",
      "Rapat akan membahas; pertama, pembangunan jalan desa, kedua, pengadaan alat pertanian, ketiga, pelatihan UMKM.",
      "Rapat akan membahas, pertama pembangunan jalan desa, kedua pengadaan alat pertanian, ketiga pelatihan UMKM.",
      "Rapat akan membahas pertama: pembangunan jalan desa, kedua: pengadaan alat pertanian, ketiga: pelatihan UMKM."
    ],
    "correctAnswer": 0,
    "explanation": "Penggunaan titik dua sebelum rincian dan titik koma sebagai pemisah antaritem rincian yang mengandung tanda koma."
  },
  {
    "id": 69,
    "question": "Istilah resmi dalam bahasa Indonesia untuk menggantikan kata \"deadline\" adalah...",
    "options": [
      "batas akhir",
      "tenggat waktu",
      "garis akhir",
      "waktu terakhir"
    ],
    "correctAnswer": 1,
    "explanation": "'Tenggat waktu' merupakan padanan resmi 'deadline' menurut KBBI dan Kemdikbud."
  },
  {
    "id": 70,
    "question": "Kata serapan dari bahasa Sanskerta dalam kalimat berikut adalah... \"Akreditasi desa dilakukan untuk meningkatkan kualitas pelayanan publik.\"",
    "options": [
      "akreditasi",
      "kualitas",
      "pelayanan",
      "publik"
    ],
    "correctAnswer": 1,
    "explanation": "'Kualitas' berasal dari bahasa Sanskerta guṇa (kualitas). Kata lain berasal dari bahasa Belanda/Latin."
  },
  {
    "id": 71,
    "question": "Penulisan gelar akademik yang salah terdapat pada kalimat...",
    "options": [
      "Dr. Sri Wahyuni, M.Si. akan menjadi narasumber.",
      "Laporan disusun oleh Ahmad Fadil, S.E.",
      "Acara dihadiri oleh H. Mahmud, S. Pd.",
      "Pemateri utama adalah Prof. Dr. Anwar Sanusi."
    ],
    "correctAnswer": 2,
    "explanation": "Penulisan gelar 'S.Pd.' tidak perlu spasi setelah titik (seharusnya 'S.Pd.'). Gelar keagamaan 'H.' ditulis sebelum nama."
  },
  {
    "id": 72,
    "question": "Kalimat berikut yang mengandung makna ambigu adalah...",
    "options": [
      "Bantuan sembako diberikan kepada warga yang kurang mampu dan lansia.",
      "Surat dari camat yang ditujukan kepada kepala desa hilang.",
      "Pelatihan dilaksanakan di balai desa selama dua hari.",
      "Hasil panen dijual ke pasar tradisional dan modern."
    ],
    "correctAnswer": 1,
    "explanation": "Ambigu pada frasa 'surat dari camat', bisa diartikan surat yang berasal dari camat atau surat yang ditujukan untuk camat."
  },
  {
    "id": 73,
    "question": "Imbuhan yang tepat untuk melengkapi kalimat berikut adalah... \"Pemerintah desa akan lokasi pembangunan pasar desa.\"",
    "options": [
      "menunjuk",
      "menunjukan",
      "ditunjuk",
      "penunjuk"
    ],
    "correctAnswer": 0,
    "explanation": "Awalan 'me-' + kata dasar 'tunjuk' menjadi 'menunjuk' (bentuk aktif transitif). Opsi B salah imbuhan, C bentuk pasif, D kata benda."
  },
  {
    "id": 74,
    "question": "Penulisan alamat surat yang benar adalah...",
    "options": [
      "Kepada Yth. Bapak Camat Kecamatan Sukamaju",
      "Yth. Bapak Camat Sukamaju Jalan Merdeka No. 5",
      "Yth. Camat Kecamatan Sukamaju Jl. Merdeka No. 5",
      "Kepada Yth: Camat Kecamatan Sukamaju Di Tempat"
    ],
    "correctAnswer": 2,
    "explanation": "Penulisan alamat surat resmi: 1) tanpa 'kepada', 2) singkatan 'Jl.' untuk jalan, 3) tidak perlu 'Di Tempat' jika alamat lengkap dicantumkan."
  },
  {
    "id": 75,
    "question": "Paragraf berikut termasuk jenis paragraf... \"Peningkatan partisipasi warga dalam musyawarah desa masih rendah. Survei terakhir menunjukkan hanya 40% warga yang aktif hadir. Untuk itu, perlu inovasi dalam metode sosialisasi agar lebih banyak masyarakat yang terlibat.\"",
    "options": [
      "deduktif",
      "induktif",
      "deskriptif",
      "campuran"
    ],
    "correctAnswer": 1,
    "explanation": "Paragraf induktif dimulai dari fakta khusus (data partisipasi rendah) menuju kesimpulan umum (perlu inovasi)."
  },
  {
    "id": 76,
    "question": "Penulisan singkatan yang tepat untuk nama jabatan adalah...",
    "options": [
      "Sekretaris Desa (Sekdes)",
      "Kepala Urusan Keuangan (Kaur Keu)",
      "Kepala Dusun (Kasun)",
      "Bendahara Desa (Bendes)"
    ],
    "correctAnswer": 0,
    "explanation": "Menurut Permendagri No. 96 Tahun 2023, singkatan resmi untuk Sekretaris Desa adalah 'Sekdes'. Opsi B seharusnya 'Kaur Keuangan'."
  },
  {
    "id": 77,
    "question": "Antonim dari kata \"vital\" dalam konteks administrasi desa adalah...",
    "options": [
      "penting",
      "utama",
      "marginal",
      "strategi"
    ],
    "correctAnswer": 2,
    "explanation": "'Vital' berarti sangat penting/pokok, antonimnya 'marginal' (tidak penting). Opsi A dan D merupakan sinonim."
  },
  {
    "id": 78,
    "question": "Kalimat pasif yang tepat untuk mengungkapkan pernyataan berikut adalah... \"Panitia akan menyerahkan bantuan kepada warga minggu depan.\"",
    "options": [
      "Bantuan akan diserahkan panitia kepada warga minggu depan.",
      "Panitia akan diserahkan bantuan kepada warga minggu depan.",
      "Warga akan menyerahkan bantuan oleh panitia minggu depan.",
      "Kepada warga akan diserahkan bantuan oleh panitia minggu depan."
    ],
    "correctAnswer": 0,
    "explanation": "Kalimat pasif yang tepat memindahkan objek ('bantuan') menjadi subjek dengan imbuhan 'di-'."
  },
  {
    "id": 79,
    "question": "Konjungsi yang tepat untuk melengkapi kalimat berikut adalah... \"Pemerintah desa mengadakan pelatihan kewirausahaan, hasilnya belum maksimal.\"",
    "options": [
      "tetapi",
      "karena",
      "sehingga",
      "namun"
    ],
    "correctAnswer": 3,
    "explanation": "Konjungsi 'namun' digunakan untuk menunjukkan pertentangan antara dua klausa. Opsi A ('tetapi') biasanya diawali tanda koma, bukan titik koma."
  },
  {
    "id": 80,
    "question": "Penulisan angka yang tepat dalam kalimat resmi adalah...",
    "options": [
      "Desa ini memiliki 9 (sembilan) RT dan 3 RW.",
      "Kegiatan diikuti oleh 25 orang peserta.",
      "Anggaran yang dibutuhkan sekitar Rp. 50.000.000.",
      "Rapat dijadwalkan pada hari Selasa, 5-11-2024."
    ],
    "correctAnswer": 0,
    "explanation": "Aturan EYD: angka di bawah 10 ditulis huruf jika tidak berhubungan dengan satuan, namun jika penting (seperti dokumen resmi), ditulis angka dan huruf dalam kurung. Opsi B seharusnya 'dua puluh lima', C tanpa titik setelah 'Rp', D seharusnya '5 November 2024'."
  },
  {
    "id": 81,
    "question": "Jenis rapat yang bertujuan untuk menyampaikan informasi atau kebijakan baru dari pimpinan kepada peserta rapat disebut…",
    "options": [
      "Rapat koordinasi",
      "Rapat pemecahan masalah",
      "Rapat sosialisasi",
      "Rapat evaluasi"
    ],
    "correctAnswer": 2,
    "explanation": "Rapat sosialisasi bertujuan untuk menyebarluaskan informasi, kebijakan, atau program baru kepada peserta agar dipahami dan diimplementasikan."
  },
  {
    "id": 82,
    "question": "Berikut ini yang termasuk kategori dokumen “sementara” berdasarkan jadwal retensi arsip adalah…",
    "options": [
      "Dokumen yang disimpan selama 10 tahun",
      "Dokumen yang disimpan kurang dari 1 tahun",
      "Dokumen yang harus disimpan permanen",
      "Dokumen yang terkait laporan keuangan"
    ],
    "correctAnswer": 1,
    "explanation": "Dokumen sementara (berkala pendek) biasanya disimpan kurang dari 1 tahun karena nilai kegunaannya sudah habis setelah tujuan tertentu tercapai."
  },
  {
    "id": 83,
    "question": "Dalam pengelolaan keuangan desa, BOSDES (Bantuan Operasional Sekolah Desa) termasuk dalam kategori…",
    "options": [
      "Pendapatan asli desa",
      "Bantuan pemerintah provinsi",
      "Hibah dari pihak swasta",
      "Dana transfer pemerintah"
    ],
    "correctAnswer": 3,
    "explanation": "BOSDES merupakan dana transfer dari pemerintah pusat yang dialokasikan untuk mendukung operasional sekolah di tingkat desa."
  },
  {
    "id": 84,
    "question": "Bagian surat resmi yang mencantumkan tujuan atau maksud surat disebut…",
    "options": [
      "Salam pembuka",
      "Kop surat",
      "Perihal",
      "Nomor surat"
    ],
    "correctAnswer": 2,
    "explanation": "Bagian 'perihal' dalam surat resmi menjelaskan tujuan atau pokok pembahasan surat tersebut secara ringkas."
  },
  {
    "id": 85,
    "question": "Kegiatan administrasi yang berkaitan dengan pencatatan barang inventaris kantor bertujuan untuk…",
    "options": [
      "Menambah jumlah barang",
      "Memudahkan pengawasan dan pemeliharaan",
      "Membuat laporan tahunan",
      "Menjual barang yang tidak terpakai"
    ],
    "correctAnswer": 1,
    "explanation": "Pencatatan inventaris membantu memantau kondisi, lokasi, dan kepemilikan barang sehingga memudahkan proses pengawasan dan pemeliharaan."
  },
  {
    "id": 86,
    "question": "Buku tamu dalam administrasi perkantoran berfungsi untuk…",
    "options": [
      "Mencatat jumlah karyawan yang hadir",
      "Mendata pengunjung yang datang ke kantor",
      "Menyimpan surat masuk dan keluar",
      "Mengarsipkan laporan kegiatan"
    ],
    "correctAnswer": 1,
    "explanation": "Buku tamu digunakan untuk mencatat identitas pengunjung, waktu kunjungan, dan tujuan kehadiran mereka di kantor."
  },
  {
    "id": 87,
    "question": "Dokumen yang dibuat sebagai salinan dari dokumen asli dan memiliki kekuatan hukum terbatas disebut…",
    "options": [
      "Dokumen primer",
      "Dokumen sekunder",
      "Dokumen tersier",
      "Dokumen kuarter"
    ],
    "correctAnswer": 1,
    "explanation": "Dokumen sekunder adalah salinan dokumen asli (primer) yang digunakan sebagai arsip atau bukti pendukung, tetapi kekuatan hukumnya lebih rendah."
  },
  {
    "id": 88,
    "question": "Laporan yang dibuat untuk memantau perkembangan suatu kegiatan yang masih berlangsung disebut…",
    "options": [
      "Laporan berkala",
      "Laporan insidental",
      "Laporan rutin",
      "Laporan progress"
    ],
    "correctAnswer": 3,
    "explanation": "Laporan progress (kemajuan) bertujuan untuk memberikan update tentang tahapan pelaksanaan kegiatan yang belum selesai."
  },
  {
    "id": 89,
    "question": "Prosedur pengiriman dokumen rahasia ke instansi lain sebaiknya menggunakan…",
    "options": [
      "Email biasa",
      "Kurir tanpa bukti tanda terima",
      "Amplop tertutup dengan tanda “rahasia”",
      "Pesan singkat melalui telepon"
    ],
    "correctAnswer": 2,
    "explanation": "Dokumen rahasia harus dikirim dalam amplop tertutup dan diberi tanda “rahasia” untuk memastikan kerahasiaannya, serta menggunakan jasa pengiriman resmi dengan bukti tanda terima."
  },
  {
    "id": 90,
    "question": "Berikut ini yang termasuk klasifikasi arsip berdasarkan frekuensi penggunaannya adalah…",
    "options": [
      "Arsip aktif dan inaktif",
      "Arsip keuangan dan non-keuangan",
      "Arsip fisik dan digital",
      "Arsip primer dan sekunder"
    ],
    "correctAnswer": 0,
    "explanation": "Arsip aktif adalah arsip yang masih sering digunakan, sedangkan arsip inaktif sudah jarang digunakan tetapi masih disimpan untuk keperluan tertentu."
  },
  {
    "id": 91,
    "question": "Sumpah Pemuda dikumandangkan pertama",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctAnswer": 0,
    "explanation": "Maaf, data untuk pertanyaan ini tidak lengkap. Silakan berikan pertanyaan dan pilihan jawaban yang lengkap."
  },
  {
    "id": 92,
    "question": "Sumpah Pemuda dikumandangkan pertama kali pada tanggal…",
    "options": [
      "20 Mei 1908",
      "28 Oktober 1928",
      "17 Agustus 1945",
      "10 November 1945"
    ],
    "correctAnswer": 1,
    "explanation": "Sumpah Pemuda diikrarkan pada Kongres Pemuda II tanggal 28 Oktober 1928, yang menjadi tonggak persatuan bangsa Indonesia."
  },
  {
    "id": 93,
    "question": "Rumah adat masyarakat Toraja di Sulawesi Selatan disebut…",
    "options": [
      "Tongkonan",
      "Rumah Gadang",
      "Joglo",
      "Honai"
    ],
    "correctAnswer": 0,
    "explanation": "Tongkonan adalah rumah adat Suku Toraja yang memiliki bentuk atap melengkung khas dan berfungsi sebagai pusat ritual adat."
  },
  {
    "id": 94,
    "question": "Mekanisme pengelolaan dana desa yang melibatkan musyawarah masyarakat desa disebut…",
    "options": [
      "Musrenbang",
      "Musdes",
      "LKMD",
      "Rembug Dusun"
    ],
    "correctAnswer": 1,
    "explanation": "Musyawarah Desa (Musdes) adalah forum partisipatif untuk membahas prioritas penggunaan dana desa sesuai UU Desa."
  },
  {
    "id": 95,
    "question": "Kepulauan Maluku pada masa kolonial dikenal sebagai penghasil rempah-rempah dan dijuluki…",
    "options": [
      "The Emerald of the Equator",
      "The Spice Islands",
      "The Golden Triangle",
      "The Pearl of the Orient"
    ],
    "correctAnswer": 1,
    "explanation": "Maluku dijuluki 'The Spice Islands' karena menjadi pusat perdagangan rempah-rempah seperti cengkeh dan pala pada abad ke-16."
  },
  {
    "id": 96,
    "question": "Menteri Keuangan perempuan pertama Indonesia yang masih aktif hingga kini adalah…",
    "options": [
      "Sri Mulyani Indrawati",
      "Khofifah Indar Parawansa",
      "Retno Marsudi",
      "Tri Rismaharini"
    ],
    "correctAnswer": 0,
    "explanation": "Sri Mulyani Indrawati menjabat sebagai Menteri Keuangan sejak 2005 (kecuali periode 2010–2016) dan merupakan menteri keuangan perempuan pertama di Indonesia."
  },
  {
    "id": 97,
    "question": "Tari Saman, yang diakui UNESCO sebagai Warisan Budaya Dunia, berasal dari provinsi…",
    "options": [
      "Aceh",
      "Sumatra Utara",
      "Riau",
      "Jambi"
    ],
    "correctAnswer": 0,
    "explanation": "Tari Saman berasal dari Suku Gayo di Aceh dan dikenal dengan gerakan harmonis serta syair bernuansa religius."
  },
  {
    "id": 98,
    "question": "Undang-Undang yang menjadi dasar pengakuan hak desa untuk mengatur pemerintahannya sendiri adalah…",
    "options": [
      "UU No. 5 Tahun 1979",
      "UU No. 6 Tahun 2014",
      "UU No. 23 Tahun 2014",
      "UU No. 22 Tahun 1999"
    ],
    "correctAnswer": 1,
    "explanation": "UU No. 6 Tahun 2014 tentang Desa mengatur otonomi desa, termasuk pengakuan hak asal usul dan kewenangan desa."
  },
  {
    "id": 99,
    "question": "Ibu kota Provinsi Nusa Tenggara Timur adalah…",
    "options": [
      "Mataram",
      "Kupang",
      "Ende",
      "Maumere"
    ],
    "correctAnswer": 1,
    "explanation": "Kupang menjadi ibu kota Nusa Tenggara Timur sejak pembentukan provinsi tersebut dan merupakan pusat pemerintahan serta ekonomi."
  },
  {
    "id": 100,
    "question": "Tempat kelahiran Presiden pertama Indonesia, Soekarno, adalah…",
    "options": [
      "Surabaya",
      "Blitar",
      "Yogyakarta",
      "Jakarta"
    ],
    "correctAnswer": 1,
    "explanation": "Soekarno lahir di Blitar, Jawa Timur, pada 6 Juni 1901. Makamnya juga berada di Kota Blitar dan menjadi situs sejarah."
  }
].map(transformQuestion);
