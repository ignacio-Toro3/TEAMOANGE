const heart = document.getElementById("heart");

function explotarCorazones() {
    const cantidad = 60; // MUCHOS más corazones
    const rect = heart.getBoundingClientRect();

    for (let i = 0; i < cantidad; i++) {
        const mini = document.createElement("div");
        mini.classList.add("mini-heart");
        mini.innerHTML = "❤️";

        mini.style.left = rect.left + rect.width / 2 + "px";
        mini.style.top = rect.top + rect.height / 2 + "px";

        // Explosión más amplia
        mini.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
        mini.style.setProperty("--y", `${Math.random() * 400 - 200}px`);

        // Tamaños random
        mini.style.fontSize = `${Math.random() * 20 + 16}px`;

        document.body.appendChild(mini);

        setTimeout(() => mini.remove(), 2000);
    }
}

// Explota con cada latido
setInterval(explotarCorazones, 1400);
