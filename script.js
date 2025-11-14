// --- URL Gambar Hadiah ---
// (Kamu bisa ganti link gambar ini)

const imgSandal = "./images/dion.jpg";
const imgIpad = "./images/ipad.jpeg";

// ---------------------------

// Ambil semua elemen yang kita perlukan
const cards = document.querySelectorAll(".card");
const cardBackImages = document.querySelectorAll(".card-back img");

let prankTelahTerjadi = false; // Mencegah prank dieksekusi berkali-kali

// Tambahkan "event listener" (pendengar) ke setiap card
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Hentikan fungsi jika prank sudah terjadi
    if (prankTelahTerjadi) return;

    // Tandai bahwa prank sudah terjadi
    prankTelahTerjadi = true;

    // --- INTI LOGIKA PRANK ---

    // 1. Set gambar untuk SEMUA card di belakang
    cardBackImages.forEach((img, imgIndex) => {
      if (index === imgIndex) {
        // Jika ini card yang DI-KLIK, kasih gambar sandal
        img.src = imgSandal;
      } else {
        // Jika ini card LAINNYA, kasih gambar iPad
        img.src = imgIpad;
      }
    });

    // 2. Balik (flip) card yang di-klik
    card.classList.add("is-flipped");

    // 3. Beri jeda 1 detik, lalu balik semua card lainnya
    setTimeout(() => {
      cards.forEach((otherCard, otherIndex) => {
        if (index !== otherIndex) {
          // Pilih card yg BUKAN yg di-klik tadi
          otherCard.classList.add("is-flipped");
        }
      });
    }, 1000); // 1000ms = 1 detik
  });
});
