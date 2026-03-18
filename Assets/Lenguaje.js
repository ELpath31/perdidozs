  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.volume = 0.8; // volumen bajito (0 = mute, 1 = máximo)
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