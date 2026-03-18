(function () {
  // Audio de fondo (los navegadores pueden bloquear autoplay)
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.15; // suave de fondo
    audio.play().catch(() => {
      window.addEventListener(
        "click",
        () => {
          audio.play().catch(() => {});
        },
        { once: true }
      );
    });
  }

  // Menú responsive (hamburguesa)
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cerrar menú al clicar un enlace
    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();