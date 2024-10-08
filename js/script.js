// Array pertanyaan
const questions = [
    "1 + 1 = 10, apakah benar?",                                                                    //0,s
    "Bumi berbentuk datar, apakah benar?",                                                          //1,s
    "Air mendidih pada 100°C, apakah benar?",                                                       //2,b
    "2 x 2 = 5, apakah benar?",                                                                     //3,s
    "Matahari terbit di barat, apakah benar?",                                                      //4,s
    "Kelereng terbuat dari kaca, apakah benar?",                                                    //5,b
    "Matahari terbenam di timur, apakah benar?",                                                    //6,s
    "Bumi berputar di sekitar Matahari, apakah benar?",                                             //7,b
    "Rp.100.000.000,00 - Rp.100.000,00 x Rp.1.000,00 + Rp.1.000,00 = Rp.1000,00, apakah benar?",    //8,b
    "Mittan Cantik buanget, apakah benar?"                                                          //9,b
];

// Fungsi untuk memulai permainan
function startGame() {
    const backsound = document.getElementById('backsound');
    backsound.play(); // Memulai backsound saat permainan dimulai
    loadQuestion(); // Memuat pertanyaan pertama
    document.getElementById('gameArea').style.display = 'block'; // Menampilkan area permainan
    document.getElementById('startButton').style.display = 'none'; // Menyembunyikan tombol mulai
}

// Pilih pertanyaan secara acak dan muat
function loadQuestion() {
    const questionElement = document.getElementById('question');
    let randomIndex = Math.floor(Math.random() * questions.length);
    questionElement.textContent = questions[randomIndex];
}

// Fungsi untuk menampilkan jawaban dan menghentikan backsound
function jawaban(choice) {
    const message = document.getElementById('message');
    const image = document.getElementById('image');
    const yesAudio = document.getElementById('yesAudio');
    const noAudio = document.getElementById('noAudio');
    const backsound = document.getElementById('backsound'); // Ambil elemen backsound
    const questionElement = document.getElementById('question');

    // Disable both buttons after selection
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;

    // Hentikan backsound saat salah satu jawaban dipilih
    backsound.pause();
    backsound.currentTime = 0; // Reset backsound ke awal

    // Menentukan jawaban yang benar atau salah
    const currentQuestion = questionElement.textContent;
    let isCorrect = false;

    if (choice === 'iya') {
        if (currentQuestion === questions[2] || currentQuestion === questions[5] || currentQuestion === questions[7] || currentQuestion === questions[8] || currentQuestion === questions[9]) { // "Air mendidih pada 100°C"
            message.textContent = 'Lah iya Bener dong, Kelas!';
            image.src = 'img/happy.gif'; // Ganti dengan gambar bahagia
            yesAudio.loop = true; // Set audio untuk looping
            yesAudio.play(); // Putar audio untuk jawaban benar
            isCorrect = true;
        } else {
            message.textContent = 'Lah salah? Kasihan mana masih muda lagi.';
            image.src = 'img/sad.png'; // Ganti dengan gambar sedih
            noAudio.loop = true; // Set audio untuk looping
            noAudio.play(); // Putar audio untuk jawaban salah
        }
    } else {
        if (currentQuestion === questions[0] || currentQuestion === questions[1] || currentQuestion === questions[3] || currentQuestion === questions[4] || currentQuestion === questions[6]) {
            message.textContent = 'Lah iya Bener dong, Kelas!';
            image.src = 'img/happy.gif'; // Ganti dengan gambar bahagia
            yesAudio.loop = true; // Set audio untuk looping
            yesAudio.play(); // Putar audio untuk jawaban benar
            isCorrect = true;
        } else {
            message.textContent = 'Lah salah? Kasihan mana masih muda lagi.';
            image.src = 'img/sad.png'; // Ganti dengan gambar sedih
            noAudio.loop = true; // Set audio untuk looping
            noAudio.play(); // Putar audio untuk jawaban salah
        }
    }

    image.classList.remove('hidden'); // Tampilkan gambar jika masih tersembunyi

    // Hentikan audio setelah selesai diputar
    yesAudio.onended = function() {
        yesAudio.loop = false; // Matikan looping setelah selesai
    };
    
    noAudio.onended = function() {
        noAudio.loop = false; // Matikan looping setelah selesai
    };
}

// Memuat pertanyaan pertama saat halaman dimuat
window.onload = function() {
    // Halaman akan menunggu hingga tombol mulai diklik
};
