// =======================
// KUNCI JAWABAN 60 SOAL
// =======================

const answerKey = {
  // 1–30: sudah ada dari kamu
  1: { type: "single", correct: ["Composite"] },

  2: { type: "multi",  correct: ["Factory", "Singleton"] },

  3: { type: "single", correct: ["True"] },

  4: { type: "single", correct: ["False"] },

  // Q5: elemen design pattern (Name, Problem, Solution, Consequences)
  5: { 
    type: "multi",
    correct: ["Consequences", "Problem", "Name", "Solution"]
  },

  6: { type: "single", correct: ["True"] },

  7: { type: "single", correct: ["private static Administrator instance = null;"] },

  8: { type: "single", correct: ["Factory"] },

  // Q9: text, harus ICurrency (case-insensitive)
  9: { 
    type: "text",
    correctText: "icurrency"
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

  11: { type: "single", correct: ["SRP"] },

  // Q12: beberapa pernyataan benar
  12: {
    type: "multi",
    correct: [
      "PRE-affected",
      "POST-no-effect-ISubject",
      "POST-no-effect-Subject"
    ]
  },

  // Data soal nomor 13
  13: {
    type: "multi", // Diubah menjadi multi
    correct: ["Orang tua", "Dosen Pembimbing", "Wali"] // Jawaban yang benar
},

  14: {
    type: "multi",
    correct: ["opt1", "opt3"]
  },

  15: {
    type: "multi",
    correct: ["Behavioral", "Creational", "Structural"]
  },

  16: {
    type: "multi",
    correct: ["pattern-solusi", "singleton", "composite"]
  },

  // Q17: text, harus singleton (case-insensitive)
  17: { 
    type: "text",
    correctText: "singleton"
  },

  // Q18: tiga observer (versi awal kamu: Orangtua, Dosen, Wali)
  18: {
    type: "multi",
    correct: ["Orangtua", "Dosen", "Wali"]
  },

  // Q19: dropdown SOLID
  19: {
    type: "dropdown",
    correctDropdown: {
      "q19-1": "DIP",
      "q19-2": "OCP",
      "q19-3": "SRP"
    }
  },

  20: { type: "multi",  correct: ["BankAccount-interface"] },

  21: { type: "single", correct: ["Structural"] },

  22: { type: "single", correct: ["False"] },

  23: { type: "single", correct: ["Mahasiswa"] },

  24: { type: "single", correct: ["factory"] },

  25: { type: "single", correct: ["True"] },

  26: {
    type: "multi",
    correct: ["LSP", "DIP", "OCP"]
  },

  27: { type: "single", correct: ["Observer"] },

  28: { type: "single", correct: ["private-ctor"] },

  29: { type: "single", correct: ["False"] },

  30: { type: "single", correct: ["True"] },

  // =======================
  // 31–60 dari UAS 22/23
  // =======================

  31: {
    type: "single",
    correct: ["Persistent Object"]
  },

  32: {
    type: "single",
    correct: ["Interface Subject"]
  },

  33: {
    // level testing KECUALI -> jawaban bukan level valid, biasanya "Method testing"
    type: "single",
    correct: ["Method testing"]
  },

  34: {
    type: "single",
    correct: ['assertEquals("Michael Jordan", result)']
  },

  35: {
    // helper methods: semuanya benar sebagai helper,
    // tapi soal aslinya “berikut ini merupakan helper methods ...” (pilih 1)
    // asumsi: assertFalse paling umum dipakai di materi
    type: "single",
    correct: ["assertFalse"]
  },

  36: {
    // yang diuji dalam unit testing dapat berupa: umumnya method
    type: "single",
    correct: ["Fungsi"]
  },

  37: {
    type: "single",
    correct: ["Factory"]
  },

  38: {
    // dari soal: pernyataan BENAR ttg pattern Gambar 3
    // di materi biasanya: PRE-affected, POST-no-effect-Subject
    // (bisa kamu koreksi kalau punya kunci resmi)
    type: "multi",
    correct: [
      "PRE-affected",
      "POST-no-effect-Subject"
    ]
  },

  39: {
    // dari penjelasan soal: interface BankAccount sudah memenuhi ISP
    type: "single",
    correct: ["ISP"]
  },

  40: {
    // method namaMethod di interface layer benar
    type: "single",
    correct: ["True"]
  },

  41: {
    // CounterTest menghasilkan 100% failed? (jawaban aslinya False)
    type: "single",
    correct: ["False"]
  },

  42: {
    type: "single",
    // materi: executeQuery untuk SELECT (mengambil data)
    // kalau ikuti opsi kamu, bisa pilih "Mengeksekusi query SQL SELECT"
    correct: ["SELECT"]
  },

  43: {
    type: "single",
    correct: ["Observer"]
  },

  44: {
    type: "single",
    correct: ["False"]
  },

  45: {
    type: "single",
    correct: ["False"]
  },

  46: {
    // Observer pada kasus IPK: Dosen Pembimbing, Orang tua, Wali
    type: "multi",
    correct: [
      "Orang tua",
      "Wali",
      "Dosen Pembimbing"
    ]
  },

  47: {
    // satu contoh komponen UI yang jelas benar: jTable
    type: "single",
    correct: ["jTable"]
  },

  48: {
    type: "text",
    correctText: "loose"
  },

  49: {
    // executeUpdate untuk perubahan data (INSERT/UPDATE/DELETE)
    type: "single",
    correct: ["perubahan-data"]
  },

  50: {
    // KECUALI -> pernyataan yang SALAH dari daftar
    // biasanya: "OCP-not-used" dan "BankAccount-wrong"
    type: "multi",
    correct: [
      "OCP-not-used",
      "BankAccount-wrong"
    ]
  },

  51: {
    // hirarki pejabat: Gub anak B,S dan B punya anak Bh,C,D
    type: "multi",
    correct: ["optB", "opt5", "optE"].filter(() => false) // placeholder kalau mau refine
    // NOTE: karena HTML versimu untuk q51 pakai optA..optD,
    // dan soal q14 sebelumnya sudah menampung opt1..opt5,
    // sementara di q51 tadi kamu pakai optA..optD.
    // Gunakan ini sementara:
    // correct: ["optB"]  // atau ["optB","optE"] kalau kamu tambahkan opsi ke-5
  },

  52: {
    // membuka MahasiswaView dari ProdiView
    type: "single",
    correct: ["Buka Mahasiswa"]
  },

  53: {
    type: "single",
    correct: ["AbstractTableModel"]
  },

  54: {
    // di kode ada return dataMahasiswa (bukan table), jadi SALAH
    type: "single",
    correct: ["False"]
  },

  55: {
    // semua test case pada stack yang benar:
    type: "multi",
    correct: [
      "pop-ok",
      "push-ok",
      "ctor-ok",
      "push-overflow",
      "pop-underflow"
    ]
  },

  56: {
    type: "single",
    correct: ["True"]
  },

  57: {
    type: "text",
    correctText: "5"
  },

  58: {
    type: "single",
    correct: ["Test fixture"]
  },

  59: {
    // updatePegawai: harus di DAO
    type: "single",
    correct: ["dao"]
  },

  60: {
    type: "single",
    correct: ["Composite"]
  }
};

// =======================
// FUNGSI UTIL UMUM
// =======================

function arraysEqualUnordered(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((v, i) => v === sortedB[i]);
}

function setQuestionState(questionSection, state) {
  questionSection.classList.remove("correct", "incorrect");
  if (state === "correct") {
    questionSection.classList.add("correct");
  } else if (state === "incorrect") {
    questionSection.classList.add("incorrect");
  }
}

// =======================
// HANDLING BUTTON: SINGLE & MULTI
// =======================

const optionButtons = document.querySelectorAll(".option-btn");

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const optionsContainer = btn.parentElement;
    const questionSection = optionsContainer.closest(".question");
    const qIdAttr = btn.dataset.question;
    const qId = parseInt(qIdAttr, 10);
    const key = answerKey[qId];
    if (!key) return;

    const isMulti = optionsContainer.getAttribute("data-multi") === "true";

    // reset warna benar/salah sebelumnya
    optionsContainer.querySelectorAll(".option-btn").forEach(b => {
      b.classList.remove("option-correct", "option-wrong");
    });

    if (!isMulti) {
      // ========== SINGLE CHOICE ==========
      optionsContainer.querySelectorAll(".option-btn")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const value = btn.dataset.value;
      const correctValues = key.correct || [];
      const isCorrect = correctValues.includes(value);

      if (isCorrect) {
        btn.classList.add("option-correct");
        setQuestionState(questionSection, "correct");
      } else {
        btn.classList.add("option-wrong");
        // highlight juga jawaban benar
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          if (correctValues.includes(b.dataset.value)) {
            b.classList.add("option-correct");
          }
        });
        setQuestionState(questionSection, "incorrect");
      }
    } else {
      // ========== MULTI CHOICE ==========
      btn.classList.toggle("selected");

      const selectedButtons = optionsContainer.querySelectorAll(".option-btn.selected");
      const selectedValues = Array.from(selectedButtons).map(b => b.dataset.value);
      const correctValues = key.correct || [];

      if (selectedValues.length === 0) {
        // kalau belum pilih apa-apa, reset state
        setQuestionState(questionSection, null);
        return;
      }

      // jika set jawaban sama dengan kunci
      if (arraysEqualUnordered(selectedValues, correctValues)) {
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          b.classList.remove("option-wrong");
          if (correctValues.includes(b.dataset.value) && b.classList.contains("selected")) {
            b.classList.add("option-correct");
          } else {
            b.classList.remove("option-correct");
          }
        });
        setQuestionState(questionSection, "correct");
      } else {
        // kombinasi belum tepat => tandai salah sementara
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          b.classList.remove("option-correct", "option-wrong");
        });

        // semua yang dipilih jadi merah
        selectedButtons.forEach(b => b.classList.add("option-wrong"));

        // highlight semua jawaban benar (hint)
        optionsContainer.querySelectorAll(".option-btn").forEach(b => {
          if (correctValues.includes(b.dataset.value)) {
            b.classList.add("option-correct");
          }
        });

        setQuestionState(questionSection, "incorrect");
      }
    }
  });
});

// =======================
// DROPDOWN: Q10 & Q19
// =======================

function handleDropdownQuestion(qId, dropdownIds) {
  const key = answerKey[qId];
  if (!key || key.type !== "dropdown") return;

  dropdownIds.forEach(selectId => {
    const sel = document.getElementById(selectId);
    if (!sel) return;

    sel.addEventListener("change", () => {
      const questionSection = sel.closest(".question");
      const expected = key.correctDropdown;
      let allMatch = true;

      // reset gaya semua dropdown di soal ini
      dropdownIds.forEach(id => {
        const s = document.getElementById(id);
        if (!s) return;
        s.classList.remove("dropdown-correct", "dropdown-wrong");
      });

      for (const id in expected) {
        const s = document.getElementById(id);
        if (!s) continue;
        if (s.value !== expected[id]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        dropdownIds.forEach(id => {
          const s = document.getElementById(id);
          if (!s) return;
          s.classList.add("dropdown-correct");
        });
        setQuestionState(questionSection, "correct");
      } else {
        // tandai salah hanya untuk dropdown yang salah dan sudah diisi
        for (const id in expected) {
          const s = document.getElementById(id);
          if (!s) continue;
          if (s.value && s.value !== expected[id]) {
            s.classList.add("dropdown-wrong");
          }
        }
        setQuestionState(questionSection, "incorrect");
      }
    });
  });
}

// Q10: 3 dropdown
handleDropdownQuestion(10, ["q10-1", "q10-2", "q10-3"]);
// Q19: 3 dropdown
handleDropdownQuestion(19, ["q19-1", "q19-2", "q19-3"]);

// =======================
// TEXT INPUT: Q9, Q17, Q48, Q57
// =======================

function handleTextQuestion(qId) {
  const key = answerKey[qId];
  if (!key || key.type !== "text") return;

  const questionSection = document.getElementById(`q${qId}`);
  if (!questionSection) return;

  const input = questionSection.querySelector(".text-input");
  if (!input) return;

  input.addEventListener("blur", () => {
    const raw = input.value;
    const userText = raw.trim().toLowerCase();
    input.classList.remove("text-correct", "text-wrong");

    if (!userText) {
      // kosong => tidak dinilai
      setQuestionState(questionSection, null);
      return;
    }

    if (userText === key.correctText) {
      input.classList.add("text-correct");
      setQuestionState(questionSection, "correct");
    } else {
      input.classList.add("text-wrong");
      setQuestionState(questionSection, "incorrect");
    }
  });
}

handleTextQuestion(9);
handleTextQuestion(17);
handleTextQuestion(48);
handleTextQuestion(57);
