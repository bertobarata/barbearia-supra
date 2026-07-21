/* Barbearia Supra — minimal interactions */

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav: scrolled state + burger
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const setMenu = (open) => {
  navLinks.classList.toggle('is-open', open);
  nav.classList.toggle('is-menu', open);
  document.body.classList.toggle('nav-open', open);
};
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
// Esc closes
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Gallery carousel
const track = document.getElementById('galTrack');
const prev = document.getElementById('galPrev');
const next = document.getElementById('galNext');
if (track && prev && next) {
  const step = () => (track.querySelector('.gcard')?.offsetWidth || 300) + 16;
  const sync = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();

  // Auto-slide: advance every 3.5s, loop back at end; pause on hover/touch
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer = null;
  const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  const advance = () => {
    if (atEnd()) track.scrollTo({ left: 0, behavior: 'smooth' });
    else track.scrollBy({ left: step(), behavior: 'smooth' });
  };
  const start = () => { if (!reduce && !timer) timer = setInterval(advance, 3500); };
  const stop = () => { clearInterval(timer); timer = null; };
  ['mouseenter', 'touchstart', 'focusin'].forEach(e => track.addEventListener(e, stop, { passive: true }));
  ['mouseleave', 'touchend'].forEach(e => track.addEventListener(e, start, { passive: true }));
  // pause when tab hidden / carousel offscreen
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  new IntersectionObserver(es => es.forEach(en => en.isIntersecting ? start() : stop()), { threshold: 0.2 })
    .observe(track);
}

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  '.section__title, .service, .member, .review, .stat, .about__text, .visit__info, .visit__map'
);
revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => io.observe(el));
