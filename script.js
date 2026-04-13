/* ============================================================
   Parag Khuman — Portfolio Script
   ============================================================ */

/* ── Mobile nav ─────────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── Active nav highlight on scroll ─────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.site-nav a[href^="#"]');

const highlightNav = () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--cyan)'
      : '';
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });

/* ── Scroll reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal, .reveal-delay').forEach(el => {
  revealObserver.observe(el);
});

/* ── Counter animation ───────────────────────────────────── */
const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const dur    = 1400;
      const step   = 16;
      const inc    = target / (dur / step);
      let  cur     = 0;

      const tick = () => {
        cur = Math.min(cur + inc, target);
        el.textContent = Math.floor(cur);
        if (cur < target) setTimeout(tick, step);
      };
      tick();
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-num[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ── Terminal typing animation ───────────────────────────── */
function typeText(el, text, speed, onDone) {
  let i = 0;
  const tick = () => {
    el.textContent += text[i++];
    if (i < text.length) setTimeout(tick, speed);
    else if (onDone) onDone();
  };
  tick();
}

function hideCursor(id) {
  const c = document.getElementById(id);
  if (c) c.style.display = 'none';
}

function showEl(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = '';
}

function fadeIn(id) {
  const el = document.getElementById(id);
  if (el) requestAnimationFrame(() => el.classList.add('visible'));
}

window.addEventListener('load', () => {
  // Small delay so the page settles
  setTimeout(() => {
    // Command 1: whoami
    typeText(
      document.getElementById('cmd1'),
      'whoami',
      70,
      () => {
        hideCursor('cur1');
        fadeIn('out1');

        // Command 2: cat skills.txt
        setTimeout(() => {
          showEl('line2');
          typeText(
            document.getElementById('cmd2'),
            'cat skills.txt',
            65,
            () => {
              hideCursor('cur2');
              fadeIn('out2');
              setTimeout(() => showEl('line3'), 300);
            }
          );
        }, 600);
      }
    );
  }, 400);
});
