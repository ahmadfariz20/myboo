
// FITUR TOMBOL SURPRISE

const surpriseButton = document.getElementById("surpriseButton");

const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function() {

    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {
        surpriseButton.textContent = "I Love You! ❤️";
    } else {
        surpriseButton.textContent = "Click For A Surprise 💗";
    }

});


// ANIMASI HATI BERJATUHAN

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart-fall");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 9000);

}

// Membuat hati muncul setiap 500 milidetik

setInterval(createHeart, 500);
