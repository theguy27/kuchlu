// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

// YES is clicked
// YES is clicked
yesBtn.addEventListener("click", () => {
    // 1. Original Success Logic
    title.textContent = "YAYAYAYYAYAYYYYYYY!";
    title.style.fontSize = "60px";
    catImg.src = "tbh-creature.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

    // 2. Heart Explosion Logic
    // Create 50 hearts
    confetti({
        particleCount: 500,
        spread: 100,
        origin: { y: 0.6 }
    });
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // You can use 💖, 💘, or even her name!

        // Randomize where they land
        // Math.random() gives 0 to 1. We multiply by screen width/height to spread them out.
        // We subtract half the width/height to make them go left/right/up/down from center.
        const x = (Math.random() - 0.5) * window.innerWidth;
        const y = (Math.random() - 0.5) * window.innerHeight;
        const r = Math.random() * 360; // Random rotation

        // Set the custom CSS variables for this specific heart
        heart.style.setProperty("--x", `${x}px`);
        heart.style.setProperty("--y", `${y}px`);
        heart.style.setProperty("--r", `${r}deg`);

        // Add to the page
        document.body.appendChild(heart);
    }
});