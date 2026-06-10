document.addEventListener("DOMContentLoaded", () => {
  /* ── Scroll-reveal via Intersection Observer ── */
  const revealEls = document.querySelectorAll(".reveal");

  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: isMobile ? 0.05 : 0.15,
      rootMargin: isMobile ? "0px 0px 20px 0px" : "0px 0px -40px 0px",
    }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  if (isMobile) {
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add("revealed"));
    }, 800);
  }

  /* ── Staggered entrance for career stack cards ── */
  const stackCards = document.querySelectorAll(".career-visual .stack-card");
  stackCards.forEach((card, i) => {
    card.classList.add("stack-enter");
    setTimeout(() => card.classList.add("stack-visible"), 400 + i * 180);
  });

  /* ── Floating effect on update card ── */
  const updateCard = document.querySelector(".update-card");
  if (updateCard) {
    setTimeout(() => updateCard.classList.add("floating"), 1200);
  }

  /* ── Play button pulse on skill courses card ── */
  const playBtn = document.querySelector(".video-player .play-btn");
  if (playBtn) {
    playBtn.addEventListener("mouseenter", () => {
      playBtn.style.transform = "scale(1.15)";
      playBtn.style.transition = "transform 0.3s ease, background 0.3s ease";
    });
    playBtn.addEventListener("mouseleave", () => {
      playBtn.style.transform = "scale(1)";
    });
  }

  /* ── Tip icon bounce on card hover ── */
  document.querySelectorAll(".tip-card").forEach((card) => {
    const icon = card.querySelector(".tip-icon");
    card.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.15) rotate(-6deg)";
      icon.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0deg)";
    });
  });

  /* ── Mentor images subtle zoom on hover ── */
  document.querySelectorAll(".mentor-grid img").forEach((img) => {
    img.style.transition = "transform 0.35s ease";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.08)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});
