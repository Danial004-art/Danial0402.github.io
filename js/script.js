document.addEventListener("DOMContentLoaded", function () {

    // ✨ TYPEWRITER EFFECT (title animasi macam game intro)
    const title = document.querySelector("h1");
    if (title) {
        const text = title.innerText;
        title.innerText = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                title.innerText += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        type();
    }

    // 💡 NEON RANDOM FLICKER (effect glitch ringan)
    setInterval(() => {
        const elements = document.querySelectorAll("h1, nav a");
        elements.forEach(el => {
            let random = Math.random();
            if (random > 0.95) {
                el.style.textShadow = "0 0 20px #ff00ff, 0 0 40px #00fff7";
                setTimeout(() => {
                    el.style.textShadow = "";
                }, 200);
            }
        });
    }, 500);

    // 🖱️ CURSOR FOLLOW LIGHT (game vibe)
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    cursor.style.borderRadius = "50%";
    cursor.style.background = "#00fff7";
    cursor.style.boxShadow = "0 0 15px #00fff7";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

});
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.body.style.transition = "all 0.5s ease";
        document.body.style.opacity = "0";
        document.body.style.transform = "scale(1.1)";

        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 60%, rgba(0,255,247,0.1));
    animation: pulseBg 3s infinite;
    pointer-events: none;
}

@keyframes pulseBg {
    0% {transform: scale(1);}
    50% {transform: scale(1.05);}
    100% {transform: scale(1);}
}

/* 🔥 HARD GLITCH BORDER EFFECT */
.container {
    animation: containerGlitch 5s infinite;
}

@keyframes containerGlitch {
    0% {filter: none;}
    96% {filter: none;}
    97% {filter: hue-rotate(90deg) contrast(2);}
    98% {filter: invert(1);}
    99% {filter: none;}
}
.card:hover {
    animation: shake 0.2s linear infinite;
}

@keyframes shake {
    0% {transform: translate(1px, 1px);}
    25% {transform: translate(-1px, 0px);}
    50% {transform: translate(1px, -1px);}
    75% {transform: translate(-1px, 1px);}
    100% {transform: translate(0px, 0px);}
}
function showPopup(title, text) {
    console.log("POPUP CLICKED"); // 👈 TEST
   document.getElementById("popup").style.display = "block";
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
}