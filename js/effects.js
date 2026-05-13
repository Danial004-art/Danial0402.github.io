document.addEventListener("DOMContentLoaded", () => {

    // 🌌 PARTICLE BACKGROUND
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = -2;

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            dx: (Math.random() - 0.5) * 1,
            dy: (Math.random() - 0.5) * 1
        });
    }

    function animate() {
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

            ctx.beginPath();
            ctx.fillStyle = "#00fff7";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#00fff7";
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // ⚡ GLITCH TITLE RANDOM
    setInterval(() => {
        const h1 = document.querySelector("h1");
        if (!h1) return;

        h1.style.transform = "skew(" + (Math.random() * 4 - 2) + "deg)";
        h1.style.textShadow = `
            2px 0 #ff00ff,
            -2px 0 #00fff7
        `;

        setTimeout(() => {
            h1.style.transform = "none";
            h1.style.textShadow = "0 0 10px #00fff7";
        }, 120);
    }, 2000);

});