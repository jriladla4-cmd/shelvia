// ==========================================
// DATA POETRY & REASONS
// ==========================================
const DEFAULT_POEMS = [
  {
    quote: "Aku menulis halaman ini bukan untuk dunia, tapi untuk satu jiwa yang membuat semesta terasa indah.",
    category: "Perasaan",
    liked: false
  },
  {
    quote: "Setiap kata adalah denyut, setiap baris adalah napas, semua menuju satu nama: kamu.",
    category: "Jiwa",
    liked: false
  },
  {
    quote: "Di antara ribuan kata, hanya satu yang selalu kutulis: namamu.",
    category: "Rindu",
    liked: false
  },
  {
    quote: "Jika malam punya bintang, maka hatiku punya kamu.",
    category: "Kagum",
    liked: false
  },
  {
    quote: "Aku ingin setiap halaman ini menjadi saksi, bahwa aku pernah jatuh cinta sedalam ini.",
    category: "Abadi",
    liked: false
  },
  {
    quote: "Senyummu adalah cahaya yang menyalakan seluruh halaman ini.",
    category: "Cahaya",
    liked: false
  },
  {
    quote: "Langkahmu adalah irama yang membuat waktu terasa begitu indah.",
    category: "Melodi",
    liked: false
  },
  {
    quote: "Semoga halaman ini selalu jadi rumah bagi perasaan yang tak pernah selesai.",
    category: "Harapan",
    liked: false
  }
];

const SECRET_REASONS = [
  "Hari ini yuk jalan-jalan sore bareng sambil minum kopi favoritmu ☕✨",
  "Ada waktu luang weekend ini? Aku mau ajak kamu kulineran tempat manis 🍨🌸",
  "Gimana kalau nanti kita keliling kota sambil dengerin lagu kesukaanmu? 🚗🎵",
  "Aku mau ajak kamu nonton film bioskop seru, kamu yang pilih filmnya ya 🎬🍿",
  "Yuk cari tempat estetik sambil foto-foto lucu bareng hari ini 📸🌹",
  "Mau nggak nanti malam kita cari makanan hangat sambil cerita-cerita santai? 🍜✨",
  "Weekend ini jalan ke taman/pantai menikmati senja bareng yuk 🌅💫",
  "Aku punya daftar kafe lucu yang pengen banget kubuka dan datangi bareng kamu 🎁✨",
  "Yuk cari gelato/ice cream manis sambil jalan-jalan sore sore ini 🍦🌸",
  "Nanti kalau ada waktu luang, aku jemput ya! Kita cari suasana baru bareng 🚲✨"
];

// Default Data State
let appData = {
  targetName: "Shelvia",
  senderName: "Dariku yang Mengagumimu",
  heroTitle: "Untukmu, Ruang Kata Ini Tercipta.",
  heroSubtitle: '"Setiap huruf adalah denyut, setiap baris adalah napas, semua menuju satu nama: kamu."',
  letterContent: `Aku menulis halaman ini bukan untuk dunia, tapi untuk satu jiwa yang membuat semesta terasa indah.

Setiap kata adalah denyut, setiap baris adalah napas, semua menuju satu nama: kamu. Sejak awal kehadiranmu, dunia terasa lebih hangat dan bermakna. Senyummu adalah cahaya yang menyalakan seluruh halaman ini, dan tawamu adalah lagu terindah yang selalu ingin kudengar berulang kali.

Jika malam punya bintang untuk menerangi gelapnya, maka hatiku punya kamu untuk menghiasi setiap detik kehidupan ini.

Semoga halaman kecil ini selalu menjadi saksi dan rumah hangat bagi perasaan yang tak pernah selesai.`,
  targetDate: "2027-02-14",
  poems: [...DEFAULT_POEMS]
};

// Load LocalStorage
function loadAppData() {
  const saved = localStorage.getItem("ruangKataData");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appData = { ...appData, ...parsed };
    } catch (e) {
      console.error("Failed to parse saved data:", e);
    }
  }
  // Safeguard: Ensure poems array is populated
  if (!appData.poems || !Array.isArray(appData.poems) || appData.poems.length === 0) {
    appData.poems = [...DEFAULT_POEMS];
  }
  updateDOMData();
}

function saveAppData() {
  localStorage.setItem("ruangKataData", JSON.stringify(appData));
  updateDOMData();
}

function updateDOMData() {
  // Update all instances of target name
  document.querySelectorAll(".displayTargetName").forEach(el => {
    el.textContent = appData.targetName;
  });
  const heroNameEl = document.getElementById("displayTargetName");
  if (heroNameEl) heroNameEl.textContent = appData.targetName;

  // Update Sender Name
  const senderEl = document.getElementById("displaySenderName");
  if (senderEl) senderEl.textContent = appData.senderName;

  // Update Hero Title
  const heroTitleEl = document.getElementById("displayHeroTitle");
  if (heroTitleEl && heroTitleEl.childNodes.length > 0) {
    heroTitleEl.childNodes[0].nodeValue = appData.heroTitle + " ";
  }

  // Update Letter Content
  const letterEl = document.getElementById("displayLetterContent");
  if (letterEl) letterEl.innerText = appData.letterContent;

  // Update Form inputs
  const inputTargetName = document.getElementById("inputTargetName");
  if (inputTargetName) inputTargetName.value = appData.targetName;

  const inputSenderName = document.getElementById("inputSenderName");
  if (inputSenderName) inputSenderName.value = appData.senderName;

  const inputHeroTitle = document.getElementById("inputHeroTitle");
  if (inputHeroTitle) inputHeroTitle.value = appData.heroTitle;

  const inputLetterContent = document.getElementById("inputLetterContent");
  if (inputLetterContent) inputLetterContent.value = appData.letterContent;

  const inputTargetDate = document.getElementById("inputTargetDate");
  if (inputTargetDate) inputTargetDate.value = appData.targetDate;

  // Format Display Target Date
  if (appData.targetDate) {
    const dateObj = new Date(appData.targetDate);
    const formattedDate = dateObj.toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
    const dateDisplay = document.getElementById("displayCountdownDate");
    if (dateDisplay) dateDisplay.textContent = formattedDate;
  }
}

// ==========================================
// ANIMATED CANVAS BACKGROUND (Sakura & Hearts)
// ==========================================
const canvas = document.getElementById("canvas-bg");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 12 + 6;
    this.speedY = Math.random() * 1.2 + 0.6;
    this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
    this.opacity = Math.random() * 0.6 + 0.3;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 1.5;
    this.type = Math.random() > 0.4 ? 'petal' : 'heart';
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
    this.rotation += this.rotSpeed;

    if (this.y > canvas.height + 20) {
      this.reset();
      this.y = -20;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;

    if (this.type === 'heart') {
      ctx.fillStyle = "#f43f5e";
      ctx.beginPath();
      const topCurveHeight = this.size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
      ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
      ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
      ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.fill();
    } else {
      // Petal
      ctx.fillStyle = "#fbcfe8";
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.4, this.size * 0.8, Math.PI / 4, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.restore();
  }
}

function initParticles() {
  particles = [];
  const count = window.innerWidth < 768 ? 25 : 55;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ==========================================
// WEB AUDIO SYNTHESIZER (Piano Melody Engine)
// ==========================================
let audioCtx = null;
let isMusicPlaying = false;
let melodyInterval = null;

const pianoNotes = [
  // Fmaj7 chord notes (F, A, C, E)
  349.23, 440.00, 523.25, 659.25,
  // Cmaj7 chord notes (C, E, G, B)
  261.63, 329.63, 392.00, 493.88,
  // Am7 chord notes (A, C, E, G)
  220.00, 261.63, 329.63, 392.00,
  // G chord notes (G, B, D, F#)
  196.00, 246.94, 293.66, 369.99
];

function playPianoNote(freq, duration = 2.5) {
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  // Warm overtone multiplier
  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(freq * 2, audioCtx.currentTime);
  gain2.gain.setValueAtTime(0.08, audioCtx.currentTime);

  // Attack & Decay Envelope
  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gain);
  osc2.connect(gain2);
  gain2.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc2.start();
  osc.stop(audioCtx.currentTime + duration);
  osc2.stop(audioCtx.currentTime + duration);
}

function startAmbientPiano() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isMusicPlaying = true;
  updateMusicUI(true);

  let noteIdx = 0;
  // Play soft arpeggiated piano melody
  melodyInterval = setInterval(() => {
    const note = pianoNotes[noteIdx % pianoNotes.length];
    playPianoNote(note, 3.0);

    // Occasionally play soft bass root note
    if (noteIdx % 4 === 0) {
      playPianoNote(note / 2, 4.0);
    }
    noteIdx++;
  }, 1200);
}

function stopAmbientPiano() {
  isMusicPlaying = false;
  updateMusicUI(false);
  if (melodyInterval) {
    clearInterval(melodyInterval);
    melodyInterval = null;
  }
}

function updateMusicUI(playing) {
  const btnIcon = document.getElementById("musicIcon");
  const statusText = document.getElementById("musicStatusText");
  if (btnIcon) {
    btnIcon.className = playing ? "fa-solid fa-pause" : "fa-solid fa-play";
  }
  if (statusText) {
    statusText.textContent = playing ? "Musik Latar Berputar 🎶" : "Piano Instrumental Soft";
  }
}

// Sound FX for Envelope & Likes
function playSoftChime() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  playPianoNote(523.25, 1.5);
  setTimeout(() => playPianoNote(659.25, 1.5), 150);
  setTimeout(() => playPianoNote(783.99, 2.0), 300);
}

// Automatic Music Autoplay on First Touch/Click Anywhere
function startMusicOnFirstInteraction() {
  if (!isMusicPlaying) {
    startAmbientPiano();
  }
  document.removeEventListener("click", startMusicOnFirstInteraction);
  document.removeEventListener("touchstart", startMusicOnFirstInteraction);
}
document.addEventListener("click", startMusicOnFirstInteraction);
document.addEventListener("touchstart", startMusicOnFirstInteraction);

// ==========================================
// FLOATING HEART EXPLOSION WIDGET
// ==========================================
let loveCount = 0;
const loveBurstBtn = document.getElementById("loveBurstBtn");
const loveCounterBadge = document.getElementById("loveCounterBadge");

if (loveBurstBtn) {
  loveBurstBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    loveCount++;
    if (loveCounterBadge) loveCounterBadge.textContent = `${loveCount} ♥`;
    playSoftChime();

    // Spawn 15 bursting hearts
    for (let i = 0; i < 15; i++) {
      spawnFloatingHeart(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight - 50);
    }
  });
}

function spawnFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "burst-heart-particle";
  heart.innerHTML = "♥";

  const size = Math.random() * 20 + 16;
  const angle = Math.random() * Math.PI * 2;
  const dist = Math.random() * 120 + 40;
  const tx = Math.cos(angle) * dist;
  const ty = Math.sin(angle) * dist - 80;

  heart.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    font-size: ${size}px;
    color: ${Math.random() > 0.5 ? '#f43f5e' : '#fb7185'};
    pointer-events: none;
    z-index: 9999;
    transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s linear;
    transform: translate(0, 0) scale(1);
    opacity: 1;
  `;

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translate(${tx}px, ${ty}px) scale(1.5) rotate(${(Math.random() - 0.5) * 60}deg)`;
    heart.style.opacity = "0";
  });

  setTimeout(() => {
    heart.remove();
  }, 1000);
}

// ==========================================
// ENVELOPE & LETTER INTERACTION
// ==========================================
const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelopeCard = document.getElementById("envelopeCard");
const letterPaper = document.getElementById("letterPaper");
const closeLetterBtn = document.getElementById("closeLetterBtn");

envelopeCard.addEventListener("click", () => {
  playSoftChime();
  envelopeCard.style.transform = "scale(0.95)";
  envelopeCard.style.opacity = "0";

  setTimeout(() => {
    envelopeCard.style.display = "none";
    letterPaper.style.display = "block";
  }, 300);
});

closeLetterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  letterPaper.style.display = "none";
  envelopeCard.style.display = "block";
  setTimeout(() => {
    envelopeCard.style.transform = "scale(1)";
    envelopeCard.style.opacity = "1";
  }, 50);
});

// ==========================================
// GALERI PUISI RENDERING & INTERACTION
// ==========================================
const poetryGrid = document.getElementById("poetryGrid");

function renderPoems() {
  poetryGrid.innerHTML = "";
  appData.poems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "poetry-card";
    card.innerHTML = `
      <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
      <p class="poetry-text">"${item.quote}"</p>
      <div class="poetry-footer">
        <span class="poetry-tag">#${item.category}</span>
        <button class="like-btn ${item.liked ? 'liked' : ''}" data-index="${index}">
          <i class="${item.liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          <span>${item.liked ? 'Suka' : 'Simpan'}</span>
        </button>
      </div>
    `;
    poetryGrid.appendChild(card);
  });

  // Attach like events
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.currentTarget.getAttribute("data-index");
      appData.poems[idx].liked = !appData.poems[idx].liked;
      if (appData.poems[idx].liked) playSoftChime();
      saveAppData();
      renderPoems();
    });
  });
}

const randomQuoteBtn = document.getElementById("randomQuoteBtn");
if (randomQuoteBtn) {
  randomQuoteBtn.addEventListener("click", () => {
    playSoftChime();
    const randomIndex = Math.floor(Math.random() * appData.poems.length);
    const cards = document.querySelectorAll(".poetry-card");

    cards.forEach((c, idx) => {
      c.style.border = idx === randomIndex ? "2px solid var(--primary-pink)" : "1px solid var(--card-border)";
      c.style.transform = idx === randomIndex ? "scale(1.05)" : "scale(1)";
    });

    cards[randomIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ==========================================
// POLAROID GALLERY LIGHTBOX
// ==========================================
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

document.querySelectorAll(".polaroid-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.getAttribute("data-img");
    const caption = card.getAttribute("data-caption");

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightboxModal.style.display = "flex";
  });
});

lightboxCloseBtn.addEventListener("click", () => {
  lightboxModal.style.display = "none";
});

lightboxModal.addEventListener("click", (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = "none";
  }
});

// ==========================================
// EXPORT TO MS WORD
// ==========================================
const exportWordBtn = document.getElementById("exportWordBtn");
if (exportWordBtn) {
  exportWordBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playSoftChime();
    
    const targetName = appData.targetName;
    const senderName = appData.senderName;
    const letterContent = appData.letterContent;
    const dateObj = new Date(appData.targetDate);
    const formattedDate = dateObj.toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
    
    // Create elegant HTML template for Microsoft Word
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>Surat Digital Untuk ${targetName}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body {
            font-family: 'Georgia', 'Times New Roman', serif;
            color: #2b1810;
            line-height: 1.8;
            background-color: #fffdfa;
            padding: 40px;
          }
          .letter-container {
            max-width: 600px;
            margin: 0 auto;
            border: 2px solid #fecdd3;
            padding: 40px;
            background-color: #ffffff;
            border-radius: 10px;
          }
          .header {
            border-bottom: 2px dashed #fecdd3;
            padding-bottom: 15px;
            margin-bottom: 30px;
            font-style: italic;
            color: #fb7185;
            font-size: 14pt;
          }
          .salutation {
            font-size: 18pt;
            color: #f43f5e;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .content {
            font-size: 12pt;
            margin-bottom: 30px;
          }
          .signature {
            text-align: right;
            font-size: 16pt;
            color: #fb7185;
            margin-top: 30px;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="letter-container">
          <div class="header">
            ${formattedDate}
          </div>
          <div class="salutation">
            Untuk Jiwa yang Paling Spesial, ${targetName} ✨
          </div>
          <div class="content">
            ${letterContent.replace(/\n/g, '<br>')}
          </div>
          <div class="signature">
            Dengan segenap rindu,<br>
            <strong>${senderName}</strong> 🌹
          </div>
        </div>
      </body>
      </html>
    `;
    
    const blob = new Blob(['\ufeff' + htmlContent], {
      type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Surat_Digital_${targetName.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function updateCountdown() {
  const targetTime = new Date(appData.targetDate + "T00:00:00").getTime();
  const currentTime = new Date().getTime();
  const diff = targetTime - currentTime;

  if (diff <= 0) {
    document.getElementById("cdDays").textContent = "00";
    document.getElementById("cdHours").textContent = "00";
    document.getElementById("cdMinutes").textContent = "00";
    document.getElementById("cdSeconds").textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("cdDays").textContent = String(days).padStart(2, "0");
  document.getElementById("cdHours").textContent = String(hours).padStart(2, "0");
  document.getElementById("cdMinutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("cdSeconds").textContent = String(seconds).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================================
// SECRET REASON JAR GENERATOR
// ==========================================
const reasonDisplay = document.getElementById("reasonDisplay");
const pickReasonBtn = document.getElementById("pickReasonBtn");

pickReasonBtn.addEventListener("click", () => {
  playSoftChime();
  reasonDisplay.style.opacity = "0";

  setTimeout(() => {
    const randomReason = SECRET_REASONS[Math.floor(Math.random() * SECRET_REASONS.length)];
    reasonDisplay.textContent = `"${randomReason}"`;
    reasonDisplay.style.opacity = "1";
  }, 250);
});

// ==========================================
// PERSONALIZER MODAL & FORM
// ==========================================
const personalizeModal = document.getElementById("personalizeModal");
const personalizeBtn = document.getElementById("personalizeBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const personalizeForm = document.getElementById("personalizeForm");
const resetDefaultBtn = document.getElementById("resetDefaultBtn");

if (personalizeBtn && personalizeModal) {
  personalizeBtn.addEventListener("click", () => {
    personalizeModal.style.display = "flex";
  });
}

if (closeModalBtn && personalizeModal) {
  closeModalBtn.addEventListener("click", () => {
    personalizeModal.style.display = "none";
  });
}

if (personalizeModal) {
  personalizeModal.addEventListener("click", (e) => {
    if (e.target === personalizeModal) personalizeModal.style.display = "none";
  });
}

if (personalizeForm) {
  personalizeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    appData.targetName = document.getElementById("inputTargetName")?.value || "Shelvia";
    appData.senderName = document.getElementById("inputSenderName")?.value || "Dariku";
    appData.heroTitle = document.getElementById("inputHeroTitle")?.value || "Untukmu, Ruang Kata Ini Tercipta.";
    appData.letterContent = document.getElementById("inputLetterContent")?.value || "";
    appData.targetDate = document.getElementById("inputTargetDate")?.value || "2027-02-14";

    saveAppData();
    if (personalizeModal) personalizeModal.style.display = "none";
    playSoftChime();
  });
}

if (resetDefaultBtn) {
  resetDefaultBtn.addEventListener("click", () => {
    if (confirm("Reset kembali ke teks awal?")) {
      localStorage.removeItem("ruangKataData");
      location.reload();
    }
  });
}

// ==========================================
// DARK / LIGHT THEME TOGGLE
// ==========================================
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = themeToggleBtn.querySelector("i");

function initTheme() {
  const savedTheme = localStorage.getItem("ruangKataTheme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.className = "fa-solid fa-sun";
  }
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  localStorage.setItem("ruangKataTheme", isDark ? "dark" : "light");
});

// ==========================================
// MOBILE FULLSCREEN MENU OVERLAY
// ==========================================
const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");

if (mobileNavToggle && mobileMenuOverlay) {
  mobileNavToggle.addEventListener("click", () => {
    mobileMenuOverlay.classList.add("active");
  });
}

if (closeMobileMenuBtn && mobileMenuOverlay) {
  closeMobileMenuBtn.addEventListener("click", () => {
    mobileMenuOverlay.classList.remove("active");
  });
}

document.querySelectorAll(".mobile-menu-item").forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove("active");
  });
});

// ==========================================
// FAST PRELOADER & SCROLL STORYTELLING OBSERVER
// ==========================================
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader && preloader.style.display !== "none") {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 400);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(hidePreloader, 350);
  initScrollReveal();
});

// Fallback safety timeout (500ms max)
setTimeout(hidePreloader, 500);

if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(hidePreloader, 200);
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.05 });

  revealElements.forEach(el => observer.observe(el));

  // Safety fallback: reveal all elements after 1s so content is always visible
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add("is-visible"));
  }, 1000);
}

// ==========================================
// DISCRETE MUTE TOGGLE BUTTON
// ==========================================
let isMuted = false;
const muteToggleBtn = document.getElementById("muteToggleBtn");
const muteIcon = document.getElementById("muteIcon");

if (muteToggleBtn) {
  muteToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isMuted = !isMuted;
    if (isMuted) {
      stopAmbientPiano();
      if (muteIcon) muteIcon.className = "fa-solid fa-volume-xmark";
    } else {
      startAmbientPiano();
      if (muteIcon) muteIcon.className = "fa-solid fa-volume-high";
    }
  });
}

// ==========================================
// INTERACTIVE REPLY MODAL HANDLERS
// ==========================================
const openReplyBtn = document.getElementById("openReplyBtn");
const replyModal = document.getElementById("replyModal");
const closeReplyModalBtn = document.getElementById("closeReplyModalBtn");
const localReplyBtn = document.getElementById("localReplyBtn");
const replySuccessMessage = document.getElementById("replySuccessMessage");

if (openReplyBtn && replyModal) {
  openReplyBtn.addEventListener("click", () => {
    replyModal.style.display = "flex";
  });
}

if (closeReplyModalBtn && replyModal) {
  closeReplyModalBtn.addEventListener("click", () => {
    replyModal.style.display = "none";
  });
}

if (replyModal) {
  replyModal.addEventListener("click", (e) => {
    if (e.target === replyModal) replyModal.style.display = "none";
  });
}

if (localReplyBtn && replySuccessMessage) {
  localReplyBtn.addEventListener("click", (e) => {
    playSoftChime();
    for (let i = 0; i < 25; i++) {
      spawnFloatingHeart(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
    }
    replySuccessMessage.style.display = "block";
  });
}

// INITIALIZATION
loadAppData();
renderPoems();
initTheme();
