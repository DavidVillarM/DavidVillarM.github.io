window.initCarousel = function initCarousel(carousel) {
  if (!carousel) return;

  if (carousel._carouselCleanup) carousel._carouselCleanup();

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let velocity = 0;
  let lastX = 0;
  let lastTime = 0;
  let momentumId = 0;
  let autoScrollId = 0;
  let paused = false;
  let loopWidth = 0;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function getLoopWidth() {
    return loopWidth || carousel.scrollWidth / 2;
  }

  function normalizeScroll() {
    const half = getLoopWidth();
    if (half <= 0) return;
    if (carousel.scrollLeft >= half) carousel.scrollLeft -= half;
    if (carousel.scrollLeft < 0) carousel.scrollLeft += half;
  }

  function snapToNearest() {
    const card = carousel.querySelector(".project-card");
    if (!card) return;
    const gap = 24;
    const step = card.offsetWidth + gap;
    const target = Math.round(carousel.scrollLeft / step) * step;
    carousel.scrollTo({ left: target, behavior: "smooth" });
  }

  function stopMomentum() {
    if (momentumId) cancelAnimationFrame(momentumId);
    momentumId = 0;
  }

  function applyMomentum() {
    stopMomentum();
    if (Math.abs(velocity) < 0.35) {
      snapToNearest();
      return;
    }

    const step = () => {
      carousel.scrollLeft -= velocity;
      velocity *= 0.92;
      normalizeScroll();

      if (Math.abs(velocity) >= 0.35) {
        momentumId = requestAnimationFrame(step);
      } else {
        momentumId = 0;
        snapToNearest();
      }
    };

    momentumId = requestAnimationFrame(step);
  }

  function pauseAuto() {
    paused = true;
    window.setTimeout(() => {
      paused = false;
    }, 3000);
  }

  function startAutoScroll() {
    if (prefersReducedMotion || loopWidth <= 0) return;

    const tick = () => {
      if (!paused && !isDown && !carousel.classList.contains("is-dragging")) {
        carousel.scrollLeft += 0.45;
        normalizeScroll();
      }
      autoScrollId = requestAnimationFrame(tick);
    };

    autoScrollId = requestAnimationFrame(tick);
  }

  function pointerDown(clientX) {
    isDown = true;
    stopMomentum();
    pauseAuto();
    carousel.classList.add("is-dragging");
    startX = clientX;
    lastX = clientX;
    lastTime = performance.now();
    scrollLeft = carousel.scrollLeft;
    velocity = 0;
  }

  function pointerMove(clientX) {
    if (!isDown) return;
    const now = performance.now();
    const dt = now - lastTime || 16;
    const dx = clientX - lastX;
    velocity = (dx / dt) * 16;
    lastX = clientX;
    lastTime = now;
    carousel.scrollLeft = scrollLeft - (clientX - startX);
    normalizeScroll();
  }

  function pointerUp() {
    if (!isDown) return;
    isDown = false;
    carousel.classList.remove("is-dragging");
    applyMomentum();
  }

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    pointerDown(e.pageX);
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    pointerMove(e.pageX);
  };

  const onMouseUp = () => pointerUp();

  const onTouchStart = (e) => {
    pointerDown(e.touches[0].pageX);
  };

  const onTouchMove = (e) => {
    if (!isDown) return;
    pointerMove(e.touches[0].pageX);
  };

  const onTouchEnd = () => pointerUp();

  const onWheel = (e) => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    e.preventDefault();
    pauseAuto();
    carousel.scrollLeft += e.deltaY;
    normalizeScroll();
  };

  const onMouseEnter = () => {
    paused = true;
  };

  const onMouseLeave = () => {
    if (!isDown) {
      paused = false;
      pointerUp();
    }
  };

  carousel.addEventListener("mousedown", onMouseDown);
  carousel.addEventListener("mousemove", onMouseMove);
  carousel.addEventListener("mouseup", onMouseUp);
  carousel.addEventListener("mouseleave", onMouseLeave);
  carousel.addEventListener("mouseenter", onMouseEnter);
  carousel.addEventListener("touchstart", onTouchStart, { passive: true });
  carousel.addEventListener("touchmove", onTouchMove, { passive: true });
  carousel.addEventListener("touchend", onTouchEnd);
  carousel.addEventListener("wheel", onWheel, { passive: false });

  loopWidth = carousel.scrollWidth / 2;
  startAutoScroll();

  carousel._carouselCleanup = () => {
    stopMomentum();
    if (autoScrollId) cancelAnimationFrame(autoScrollId);
    carousel.removeEventListener("mousedown", onMouseDown);
    carousel.removeEventListener("mousemove", onMouseMove);
    carousel.removeEventListener("mouseup", onMouseUp);
    carousel.removeEventListener("mouseleave", onMouseLeave);
    carousel.removeEventListener("mouseenter", onMouseEnter);
    carousel.removeEventListener("touchstart", onTouchStart);
    carousel.removeEventListener("touchmove", onTouchMove);
    carousel.removeEventListener("touchend", onTouchEnd);
    carousel.removeEventListener("wheel", onWheel);
  };
};
