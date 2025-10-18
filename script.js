// --- 1. DATA SOAL (20 SOAL PENGETAHUAN DASAR ISLAM) ---
const quizData = [
    {
        question: "Apa arti kata 'Islam' secara bahasa?",
        options: ["Ketaatan", "Kebersihan", "Penyerahan diri", "Ketenangan"],
        answer: 2,
        explanation: "Islam berarti penyerahan diri kepada Allah SWT."
    },
    {
        question: "Siapa Nabi terakhir dalam ajaran Islam?",
        options: ["Nabi Musa AS", "Nabi Isa AS", "Nabi Muhammad SAW", "Nabi Ibrahim AS"],
        answer: 2,
        explanation: "Nabi Muhammad SAW adalah nabi terakhir yang diutus oleh Allah SWT."
    },
    {
        question: "Kitab suci umat Islam adalah...",
        options: ["Taurat", "Zabur", "Injil", "Al-Qur'an"],
        answer: 3,
        explanation: "Al-Qur'an adalah kitab suci umat Islam yang diturunkan kepada Nabi Muhammad SAW."
    },
    {
        question: "Berapa jumlah Rukun Islam?",
        options: ["Tiga", "Lima", "Enam", "Tujuh"],
        answer: 1,
        explanation: "Rukun Islam berjumlah lima: syahadat, shalat, zakat, puasa, dan haji."
    },
    {
        question: "Rukun Iman yang pertama adalah iman kepada...",
        options: ["Kitab", "Malaikat", "Allah", "Rasul"],
        answer: 2,
        explanation: "Rukun iman pertama adalah iman kepada Allah SWT."
    },
    {
        question: "Umat Islam diwajibkan shalat sebanyak...",
        options: ["3 kali sehari", "4 kali sehari", "5 kali sehari", "7 kali sehari"],
        answer: 2,
        explanation: "Umat Islam wajib shalat lima kali dalam sehari semalam."
    },
    {
        question: "Puasa wajib bagi umat Islam dilakukan pada bulan...",
        options: ["Syawal", "Rajab", "Ramadhan", "Muharram"],
        answer: 2,
        explanation: "Puasa wajib dilakukan pada bulan Ramadhan selama satu bulan penuh."
    },
    {
        question: "Tempat suci umat Islam untuk berhaji adalah...",
        options: ["Madinah", "Yerusalem", "Ka'bah di Makkah", "Masjidil Aqsha"],
        answer: 2,
        explanation: "Haji dilakukan di Makkah dan mengelilingi Ka'bah sebagai pusat ibadah."
    },
    {
        question: "Hari raya yang dirayakan setelah Ramadhan adalah...",
        options: ["Idul Adha", "Idul Fitri", "Isra Mi’raj", "Maulid Nabi"],
        answer: 1,
        explanation: "Idul Fitri dirayakan setelah berpuasa di bulan Ramadhan."
    },
    {
        question: "Kalimat syahadat berisi tentang...",
        options: ["Kewajiban shalat", "Pernyataan iman kepada Allah dan Rasul", "Perintah zakat", "Larangan berbohong"],
        answer: 1,
        explanation: "Syahadat adalah pengakuan bahwa tiada Tuhan selain Allah dan Muhammad adalah utusan-Nya."
    },
    {
        question: "Nama malaikat yang menyampaikan wahyu kepada para nabi adalah...",
        options: ["Mikail", "Israfil", "Jibril", "Izrail"],
        answer: 2,
        explanation: "Malaikat Jibril bertugas menyampaikan wahyu kepada para nabi."
    },
    {
        question: "Zakat fitrah biasanya dibayarkan dalam bentuk...",
        options: ["Pakaian", "Emas", "Beras atau makanan pokok", "Uang dolar"],
        answer: 2,
        explanation: "Zakat fitrah dibayar dengan beras atau makanan pokok sesuai ketentuan daerah."
    },
    {
        question: "Nabi pertama yang diciptakan oleh Allah adalah...",
        options: ["Nabi Nuh AS", "Nabi Adam AS", "Nabi Ibrahim AS", "Nabi Yusuf AS"],
        answer: 1,
        explanation: "Nabi Adam AS adalah manusia pertama yang diciptakan Allah."
    },
    {
        question: "Ibadah haji dilaksanakan pada bulan...",
        options: ["Ramadhan", "Dzulhijjah", "Syawal", "Rabiul Awal"],
        answer: 1,
        explanation: "Ibadah haji dilaksanakan pada bulan Dzulhijjah setiap tahunnya."
    },
    {
        question: "Surah pertama dalam Al-Qur’an adalah...",
        options: ["Al-Baqarah", "An-Nas", "Al-Fatihah", "Al-Ikhlas"],
        answer: 2,
        explanation: "Surah Al-Fatihah adalah pembuka dalam Al-Qur’an."
    },
    {
        question: "Kiblat umat Islam menghadap ke arah...",
        options: ["Madinah", "Yerusalem", "Ka'bah di Makkah", "Langit"],
        answer: 2,
        explanation: "Umat Islam berkiblat ke Ka'bah yang terletak di Masjidil Haram, Makkah."
    },
    {
        question: "Shalat lima waktu dimulai dari...",
        options: ["Maghrib", "Subuh", "Isya", "Dzuhur"],
        answer: 1,
        explanation: "Urutan shalat dimulai dari Subuh, Dzuhur, Ashar, Maghrib, dan Isya."
    },
    {
        question: "Rukun Islam yang terakhir adalah...",
        options: ["Zakat", "Puasa", "Haji", "Shalat"],
        answer: 2,
        explanation: "Rukun Islam terakhir adalah menunaikan ibadah haji bagi yang mampu."
    },
    {
        question: "Doa sebelum makan diawali dengan kalimat...",
        options: ["Bismillahirrahmanirrahim", "Alhamdulillah", "Subhanallah", "Astaghfirullah"],
        answer: 0,
        explanation: "Doa sebelum makan diawali dengan membaca 'Bismillahirrahmanirrahim'."
    },
    {
        question: "Kitab Al-Qur’an diturunkan menggunakan bahasa...",
        options: ["Ibrani", "Arab", "Latin", "Yunani"],
        answer: 1,
        explanation: "Al-Qur’an diturunkan dalam bahasa Arab sebagai bahasa wahyu."
    }
];

// --- 2. VARIABEL GLOBAL ---
let currentQuestionIndex = 0;
let score = 0;
let participantName = '';
let participantAnswers = Array(quizData.length).fill(null);
const totalQuestions = quizData.length;

// --- 3. DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameForm = document.getElementById('name-form');
const initialInput = document.getElementById('initial-input');
const questionContainer = document.getElementById('question-container');
const questionCounter = document.getElementById('question-counter');
const nextButton = document.getElementById('next-button');
const submissionForm = document.getElementById('submission-form');
const exitButton = document.getElementById('exit-button');
const submissionStatus = document.getElementById('submission-status');

// --- 4. FUNGSI ---
function changeScreen(showElement) {
    const screens = [startScreen, quizScreen, resultScreen];
    screens.forEach(s => s.classList.add('hidden'));
    showElement.classList.remove('hidden');
    setTimeout(() => showElement.classList.add('active'), 10);
}

function loadQuestion() {
    const q = quizData[currentQuestionIndex];
    questionCounter.textContent = `Soal ${currentQuestionIndex + 1} / ${totalQuestions}`;
    nextButton.textContent = (currentQuestionIndex === totalQuestions - 1) ? "Lihat Hasil" : "Lanjut";
    nextButton.disabled = true;

    let html = `
        <div class="question-slide">
            <p class="question-text">${q.question}</p>
            ${q.options.map((opt, i) => `
                <div class="option" data-index="${i}">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </div>
            `).join('')}
            <div id="explanation-box" class="info-text" style="display:none; margin-top:10px; font-style:italic;"></div>
        </div>
    `;

    questionContainer.innerHTML = html;

    document.querySelectorAll('.option').forEach(opt => {
        opt.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(e) {
    const q = quizData[currentQuestionIndex];
    const selected = e.currentTarget;
    const selectedIndex = parseInt(selected.dataset.index);
    const correctIndex = q.answer;
    const explanationBox = document.getElementById('explanation-box');

    participantAnswers[currentQuestionIndex] = selectedIndex;
    document.querySelectorAll('.option').forEach(opt => opt.style.pointerEvents = 'none');

    if (selectedIndex === correctIndex) {
        selected.style.backgroundColor = '#d4edda';
        selected.style.borderColor = '#28a745';
        score++;
        explanationBox.innerHTML = `✅ Benar! ${q.explanation}`;
    } else {
        selected.style.backgroundColor = '#f8d7da';
        selected.style.borderColor = '#dc3545';
        document.querySelector(`.option[data-index="${correctIndex}"]`).style.backgroundColor = '#d4edda';
        document.querySelector(`.option[data-index="${correctIndex}"]`).style.borderColor = '#28a745';
        explanationBox.innerHTML = `❌ Salah. ${q.explanation}`;
    }

    explanationBox.style.display = 'block';
    nextButton.disabled = false;
}

function calculateResults() {
    const correctList = quizData
        .map((q, i) => (participantAnswers[i] === q.answer ? i + 1 : null))
        .filter(Boolean);

    document.getElementById('result-name').textContent = participantName;
    document.getElementById('result-score').textContent = `${score} / ${totalQuestions}`;
    document.getElementById('result-correct-count').textContent = score;
    document.getElementById('result-correct-list').textContent = correctList.join(', ');

    document.getElementById('form-name').value = participantName;
    document.getElementById('form-score').value = `${score}/${totalQuestions}`;
    document.getElementById('form-correct-list').value = correctList.join(', ');

    submissionForm.submit();
    changeScreen(resultScreen);
    submissionStatus.textContent = '✅ Hasil Berhasil Dikirim!';
}

// --- 5. EVENT LISTENER ---
nameForm.addEventListener('submit', e => {
    e.preventDefault();
    participantName = initialInput.value.trim();
    if (participantName) {
        changeScreen(quizScreen);
        loadQuestion();
    }
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateResults();
    }
});

exitButton.addEventListener('click', () => {
    window.location.href = 'https://instagram.com/assabah07';
});

// 🔹 Tambahan baru:
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', () => {
    window.location.href = 'https://ppfhas-sabah.github.io/laman_quizz/';
});
changeScreen(startScreen);
