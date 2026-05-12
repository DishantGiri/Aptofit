/* ============================================================
   APTOFIT TRACKPRO – HERO SCRIPT
   ============================================================ */

// Animate feature list items on load with stagger
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.hero__feature');
  features.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-18px)';
    el.style.transition = `opacity 0.45s ${0.15 + i * 0.09}s ease, transform 0.45s ${0.15 + i * 0.09}s ease`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      });
    });
  });

  // Animate copy block fade-in
  const copyEls = document.querySelectorAll(
    '.hero__badge, .hero__headline, .hero__sub, .hero__features-heading, .hero__offer, .hero__triggers, .hero__cta, .hero__trust'
  );
  copyEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = `opacity 0.5s ${0.05 + i * 0.08}s ease, transform 0.5s ${0.05 + i * 0.08}s ease`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  });
});
