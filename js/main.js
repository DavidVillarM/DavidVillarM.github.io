(function () {
  function initTheme() {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme") || root.getAttribute("data-theme") || "dark";
    root.setAttribute("data-theme", stored);

    const btn = document.getElementById("theme-toggle");
    btn?.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeAria(next);
    });
    updateThemeAria(stored);
  }

  function updateThemeAria(theme) {
    const btn = document.getElementById("theme-toggle");
    if (!btn || !window.I18n) return;
    const key = theme === "dark" ? "theme.light" : "theme.dark";
    btn.setAttribute("aria-label", I18n.t(key));
  }

  function initNav() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navOverlay = document.querySelector(".nav-overlay");
    const navClose = document.querySelector(".nav-close");

    function openNav() {
      navOverlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      navOverlay?.classList.remove("active");
      document.body.style.overflow = "";
    }

    menuToggle?.addEventListener("click", openNav);
    navClose?.addEventListener("click", closeNav);
    navOverlay?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  function initFadeIn() {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    fadeElements.forEach((el) => observer.observe(el));
  }

  initTheme();
  initNav();
  initFadeIn();
  window.I18n?.init();
  window.Projects?.renderAll();
})();
