// =============================
// DOM Elements
// =============================

const formCard = document.getElementById("formCard");
const loadingCard = document.getElementById("loadingCard");
const resultCard = document.getElementById("resultCard");
const surpriseCard = document.getElementById("surpriseCard");

const senderInput = document.getElementById("sender");
const receiverInput = document.getElementById("receiver");

const generateBtn = document.getElementById("generateBtn");
const againBtn = document.getElementById("againBtn");

const greeting = document.getElementById("greeting");
const signature = document.getElementById("signature");

// =============================
// Generate Surprise
// =============================

generateBtn.addEventListener("click", () => {
    console.log("Button Clicked");

    const sender = senderInput.value.trim() || "Someone";
    const receiver = receiverInput.value.trim() || "Friend";

    greeting.textContent = `Dear ${receiver} 💙`;
    signature.textContent = `~ ${sender}`;

    formCard.classList.add("hidden");
    loadingCard.classList.remove("hidden");

    setTimeout(() => {

        loadingCard.classList.add("hidden");
        resultCard.classList.remove("hidden");

    }, 2500);

});

// =============================
// Create Again
// =============================

againBtn.addEventListener("click", () => {

    senderInput.value = "";
    receiverInput.value = "";

    resultCard.classList.add("hidden");
    surpriseCard.classList.add("hidden");

    formCard.classList.remove("hidden");

});
// =============================
// Surprise Button
// =============================

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {

        resultCard.classList.add("hidden");

        surpriseCard.classList.remove("hidden");

    });

}

// =============================
// Floating Hearts
// =============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(

        [

            {
                transform: "translateY(0px)",
                opacity: 1
            },

            {
                transform: "translateY(-110vh)",
                opacity: 0
            }

        ],

        {

            duration: 5000,

            easing: "linear"

        }

    );

    setTimeout(() => {

        heart.remove();

    }, 5000);

}

setInterval(createHeart, 900);
// ==============================
// Download Card
// ==============================

function downloadCard(cardId) {

    const card = document.getElementById(cardId);

    if (!card) return;

    // Card ki copy banao
    const clone = card.cloneNode(true);

    // Buttons hata do
    clone.querySelectorAll(".buttonGroup").forEach(el => el.remove());

    // Screen ke bahar rakho
    clone.style.position = "fixed";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    clone.style.display = "block";

    document.body.appendChild(clone);

    html2canvas(clone, {
        backgroundColor: null,
        scale: 2
    }).then(canvas => {

        document.body.removeChild(clone);

        const link = document.createElement("a");
        link.download = "FriendshipCard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

    });

}

const downloadBtn = document.getElementById("downloadBtn");

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {

        downloadCard("resultCard");

    });

}

// ==============================
// Music
// ==============================

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("bgMusic");

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = "⏸";

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵";

        }

    });

}