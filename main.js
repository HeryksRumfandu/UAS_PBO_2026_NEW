const answerKey = {
  // =====================
  // 1–10
  // =====================

  // Q1: Creational Pattern -> Factory & Singleton
  1: {
    type: "multi",
    correct: ["Factory", "Singleton"]
  },

  // Q2: text, interface ICurrency
  2: {
    type: "text",
    correctText: "icurrency"
  },

  // Q3: pernyataan BENAR tentang pattern
  // benar: CompositeDefinition, PatternDefinition
  3: {
    type: "multi",
    correct: ["CompositeDefinition", "PatternDefinition"]
  },

  // Q4: elemen design pattern
  4: {
    type: "multi",
    correct: ["Consequences", "Solution", "Name", "Description", "Problem"]
  },

  // Q5: CounterTest -> testIncrement & testDecrement yang failed
  5: {
    type: "multi",
    correct: ["testIncrement", "testDecrement"]
  },

  // Q6: getColumnName -> menentukan nama kolom table
  6: {
    type: "single",
    correct: ["DefineColumnNames"]
  },

  // Q7: showMahasiswa di persistence layer & SQL string tidak aman -> FALSE
  7: {
    type: "single",
    correct: ["False"]
  },

  // Q8: UI pada interface layer -> JFrame Form
  8: {
    type: "single",
    correct: ["JFrameForm"]
  },

  // Q9: MS Access -> di materi biasanya dianggap TRUE (boleh simpan ke file Access)
  9: {
    type: "single",
    correct: ["True"]
  },

  // Q10: dropdown SOLID
  10: {
    type: "dropdown",
    correctDropdown: {
      "q10-1": "ISP",
      "q10-2": "LSP",
      "q10-3": "OCP"
    }
  },

  // =====================
  // 11–20
  // =====================

  // Q11: pattern untuk monitor IPK & notifikasi -> Observer
  11: {
    type: "single",
    correct: ["Observer"]
  },

  // Q12: btnDeleteActionPerformed ada panggilan control & view -> Control layer
  12: {
    type: "single",
    correct: ["control"]
  },

  // Q13: LSP, amt bertipe ICurrency
  13: {
    type: "text",
    correctText: "icurrency"
  },

  // Q14: prinsip satu tugas -> Cohesion
  14: {
    type: "text",
    correctText: "cohesion"
  },

  // Q15: entity Mahasiswa yang hanya simpan kodeProdi (tanpa objek Prodi) -> SALAH
  15: {
    type: "single",
    correct: ["False"]
  },

  // Q16: arsitektur aplikasi umum -> semua layer
  16: {
    type: "multi",
    correct: [
      "EntityLayer",
      "InterfaceLayer",
      "ControlLayer",
      "DatabaseLayer",
      "PersistenceLayer"
    ]
  },

  // Q17: test case amount 0, balance 5000, expected error -> BENAR
  17: {
    type: "single",
    correct: ["True"]
  },

  // Q18: fungsi Control layer -> penghubung interface & persistence (sesuai materi)
  18: {
    type: "single",
    correct: ["Penghubung"]
  },

  // Q19: amount 5000, balance 5000, expected: -- (no error) -> BENAR
  19: {
    type: "single",
    correct: ["True"]
  },

  // Q20: Subject pada kasus IPK -> Mahasiswa
  20: {
    type: "single",
    correct: ["Mahasiswa"]
  },

  // =====================
  // 21–30
  // =====================

  // Q21: dropdown SOLID (sama seperti Q10)
  21: {
    type: "dropdown",
    correctDropdown: {
      "q21-1": "ISP",
      "q21-2": "LSP",
      "q21-3": "OCP"
    }
  },

  // Q22: Singleton Administrator -> static instance
  22: {
    type: "single",
    correct: ["private static Administrator instance = null;"]
  },

  // Q23: atribut Collection pada Composite -> TRUE
  23: {
    type: "single",
    correct: ["True"]
  },

  // Q24: pattern di Gambar 12 -> factory
  24: {
    type: "text",
    correctText: "factory"
  },

  // Q25: Gambar 3 menerapkan DIP -> TRUE
  25: {
    type: "single",
    correct: ["True"]
  },

  // Q26: tipe pattern -> Architectural, Behavioral, Creational, Structural
  26: {
    type: "multi",
    correct: ["Behavioral", "Creational", "Structural"]
  },

  // Q27: Gambar 10 -> Singleton
  27: {
    type: "text",
    correctText: "singleton"
  },

  // Q28: displayPegawai di Control -> menghubungkan UI dan DAO
  28: {
    type: "single",
    correct: ["control"]
  },

  // Q29: baris kode salah di Gambar 1 -> 7
  29: {
    type: "text",
    correctText: "7"
  },

  // Q30: definisi Observer
  30: {
    type: "text",
    correctText: "observer"
  },

  // =====================
  // 31–40
  // =====================

  // Q31: objek simpan status di secondary storage -> Persistent Objek
  31: {
    type: "single",
    correct: ["PersistentObject"]
  },

  // Q32: field Collection untuk observer -> Interface Subject
  32: {
    type: "single",
    correct: ["InterfaceSubject"]
  },

  // Q33: level testing KECUALI -> Method testing (karena biasanya bagian dari unit test)
  33: {
    type: "single",
    correct: ["MethodTesting"]
  },

  // Q34: ConcatTest -> assertEquals("Michael Jordan", result)
  34: {
    type: "single",
    correct: ['assertEquals("Michael Jordan",result);']
  },

  // Q35: helper methods – semua sebenarnya helper,
  // tapi soal minta pilih satu; kita pakai assertFalse (umum di materi)
  35: {
    type: "single",
    correct: ["assertFalse"]
  },

  // Q36: yang diuji dalam unit testing dapat berupa -> Fungsi
  36: {
    type: "single",
    correct: ["Fungsi"]
  },

  // Q37: definisi pattern -> Factory
  37: {
    type: "single",
    correct: ["Factory"]
  },

  // Q38: pernyataan BENAR ttg pattern pada Gambar 3
  // DIP + factory method biasanya: PRE subject aware, POST via interface
  38: {
    type: "multi",
    correct: ["PreEffectSubject", "PostNoEffectSubject"]
  },

  // Q39: BankAccount dengan operasi buka/simpan/tarik -> SRP
  39: {
    type: "single",
    correct: ["SRP"]
  },

  // Q40: namaMethod di interface layer benar -> TRUE
  40: {
    type: "single",
    correct: ["True"]
  },

  // =====================
  // 41–50
  // =====================

  // Q41: CounterTest 100% failed? -> FALSE
  41: {
    type: "single",
    correct: ["False"]
  },

  // Q42: executeQuery -> pengambilan data
  42: {
    type: "single",
    correct: ["PengambilanData"]
  },

  // Q43: pattern untuk notifikasi IPK -> Observer
  43: {
    type: "single",
    correct: ["Observer"]
  },

  // Q44: SRP dan ISP menurunkan kohesivitas -> seharusnya MENINGKATKAN, jadi FALSE
  44: {
    type: "single",
    correct: ["False"]
  },

  // Q45: Leaf mengandung subtree -> definisi Composite, bukan Leaf; jadi FALSE
  45: {
    type: "single",
    correct: ["False"]
  },

  // Q46: observer: Dosen pembimbing, Orang tua, Wali
  46: {
    type: "multi",
    correct: ["Orang tua", "Wali", "Dosen Pembimbing"]
  },

  // Q47: komponen UI benar -> jTextField, jComboBox, jPanel; tapi soal pilih satu.
  // Kita pakai jTextField sebagai kunci.
  47: {
    type: "single",
    correct: ["jTextField"]
  },

  // Q48: loose coupling
  48: {
    type: "text",
    correctText: "loose"
  },

  // Q49: executeUpdate -> perubahan data (INSERT/UPDATE/DELETE)
  49: {
    type: "single",
    correct: ["PerubahanData"]
  },

  // Q50: pernyataan BENAR KECUALI -> yang SALAH: OCP-not-used & BankAccountAbstract
  50: {
    type: "multi",
    correct: ["OCPNotUsed", "BankAccountAbstract"]
  },

  // =====================
  // 51–60
  // =====================

  // Q51: hirarki pejabat Gambar 8; dari opsi HTML, yang benar: GubChildBSSChildBhdCd
  51: {
    type: "multi",
    correct: ["GubChildBSSChildBhdCd"]
  },

  // Q52: ProdiView -> membuka MahasiswaView
  52: {
    type: "single",
    correct: ["OpenMahasiswa"]
  },

  // Q53: kelas table turunan -> AbstractTableModel
  53: {
    type: "single",
    correct: ["AbstractTableModel"]
  },

  // Q54: showMahasiswa mengembalikan dataMahasiswa padahal return type TableMahasiswa -> FALSE
  54: {
    type: "single",
    correct: ["False"]
  },

  // Q55: semua test case pada stack Gambar 14 benar -> semua opsi benar
  55: {
    type: "multi",
    correct: [
      "PopTopGt0Expect23",
      "Push23TopLtMax1",
      "CtorStackTop0",
      "Push34TopEqMax1",
      "PopTopEq0Underflow"
    ]
  },

  // Q56: boleh menggabungkan beberapa design pattern -> TRUE
  56: {
    type: "single",
    correct: ["True"]
  },

  // Q57: jumlah DAO untuk 5 entity -> 5
  57: {
    type: "text",
    correctText: "5"
  },

  // Q58: mempersiapkan data pengujian -> Test fixture
  58: {
    type: "single",
    correct: ["TestFixture"]
  },

  // Q59: updatePegawai -> DAO layer
  59: {
    type: "single",
    correct: ["dao"]
  },

  // Q60: hirarki Gambar 7 -> Composite
  60: {
    type: "single",
    correct: ["Composite"]
  }
};
