/* ============================================================
   APTOFIT TRACKPRO – HERO SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Animate feature list items on load with stagger
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

  /* ============================================================
     NAVIGATION LOGIC
     ============================================================ */
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navHeader = document.getElementById('navbar');

  /* ── Toggle Menu ── */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.remove('show-menu');
    });
  }

  /* ── Remove Menu on Mobile Link Click ── */
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  }));

  /* ── Change Navbar Background on Scroll ── */
  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      navHeader.classList.add('nav--scroll');
    } else {
      navHeader.classList.remove('nav--scroll');
    }
  };
  window.addEventListener('scroll', scrollHeader);
  scrollHeader();

  /* ============================================================
     LIVE PURCHASE NOTIFICATION
     ============================================================ */
  const notifications = [
    { user: "William M.", location: "Île-de-France, FR", time: "Just now", img: "public/product1.webp" },
    { user: "Sarah K.", location: "Texas, USA", time: "1 min ago", img: "public/product2.webp" },
    { user: "James O.", location: "Sydney, AU", time: "3 mins ago", img: "public/product3.webp" },
    { user: "Elena P.", location: "Berlin, DE", time: "5 mins ago", img: "public/product4.webp" },
    { user: "Michael S.", location: "London, UK", time: "Just now", img: "public/product2.webp" }
  ];

  let currentNotify = 0;
  const notifyEl = document.getElementById('purchase-notification');
  const notifyUser = document.getElementById('notification-user');
  const notifyLoc = document.getElementById('notification-loc');
  const notifyTime = document.getElementById('notification-time');
  const notifyImg = document.getElementById('notification-img');

  function showNotification() {
    if (!notifyEl) return;
    
    const data = notifications[currentNotify];
    notifyUser.innerText = data.user;
    notifyLoc.innerText = data.location;
    notifyTime.innerText = data.time;
    notifyImg.src = data.img;

    notifyEl.classList.add('active');

    setTimeout(() => {
      notifyEl.classList.remove('active');
    }, 5000);

    currentNotify = (currentNotify + 1) % notifications.length;
  }

  // Initial delay
  setTimeout(() => {
    showNotification();
    setInterval(showNotification, 12000);
  }, 3000);

  const closeNotify = document.querySelector('.purchase-notification__close');
  if (closeNotify) {
    closeNotify.addEventListener('click', () => {
      notifyEl.classList.remove('active');
    });
  }

  /* ============================================================
     FAQ ACCORDION LOGIC
     ============================================================ */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items for a cleaner accordion effect
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
