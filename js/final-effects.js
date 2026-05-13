document.addEventListener("DOMContentLoaded", () => {

    // 🌌 PARALLAX MOUSE EFFECT (UI ikut cursor)
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        document.querySelectorAll(".card, h1").forEach(el => {
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // 💀 RANDOM GLITCH FLASH (macam hack system)
    setInterval(() => {
        const flash = document.createElement("div");
        flash.style.position = "fixed";
        flash.style.top = 0;
        flash.style.left = 0;
        flash.style.width = "100%";
        flash.style.height = "100%";
        flash.style.background = "rgba(255,0,255,0.2)";
        flash.style.zIndex = 9999;
        flash.style.mixBlendMode = "screen";
        document.body.appendChild(flash);

        setTimeout(() => flash.remove(), 100);

    }, 6000);

    // ⚡ TEXT GLITCH RANDOM
    setInterval(() => {
        const h1 = document.querySelector("h1");
        if (!h1) return;

        let original = h1.innerText;

        h1.innerText = original.split("")
            .map(char => Math.random() > 0.9 ? "█" : char)
            .join("");

        setTimeout(() => {
            h1.innerText = original;
        }, 120);
    }, 4000);

});