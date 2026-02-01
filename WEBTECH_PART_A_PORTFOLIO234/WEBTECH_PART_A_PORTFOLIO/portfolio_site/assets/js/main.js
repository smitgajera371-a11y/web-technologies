(function(){
  'use strict';

  // Mobile menu toggle
  const menuBtn = document.querySelector('[data-menu-btn]');
  const navLinks = document.querySelector('[data-nav-links]');
  if(menuBtn && navLinks){
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Slider (Home)
  const slides = document.querySelectorAll('[data-slide]');
  const prevBtn = document.querySelector('[data-prev]');
  const nextBtn = document.querySelector('[data-next]');
  const counter = document.querySelector('[data-counter]');
  let idx = 0;

  function show(i){
    if(!slides.length) return;
    idx = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.hidden = n !== idx);
    if(counter) counter.textContent = `${idx + 1} / ${slides.length}`;
  }

  if(slides.length){
    show(0);
    if(prevBtn) prevBtn.addEventListener('click', () => show(idx - 1));
    if(nextBtn) nextBtn.addEventListener('click', () => show(idx + 1));
  }

  // Project filter (Projects)
  const filterButtons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-project]');
  if(filterButtons.length && cards.length){
    const setPressed = (btn) => {
      filterButtons.forEach(b => b.setAttribute('aria-pressed','false'));
      btn.setAttribute('aria-pressed','true');
    };
    const apply = (tag) => {
      cards.forEach(c => {
        const tags = (c.getAttribute('data-tags') || '').split(',').map(t => t.trim());
        c.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
      });
    };
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.getAttribute('data-filter');
        setPressed(btn);
        apply(tag);
      });
    });
  }

  // Contact validation (Contact)
  const form = document.querySelector('[data-contact-form]');
  if(form){
    const status = document.querySelector('[data-status]');
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const errors = [];
      const n = (name.value || '').trim();
      const em = (email.value || '').trim();
      const msg = (message.value || '').trim();

      if(n.length < 2) errors.push('Name must be at least 2 characters.');
      if(!isEmail(em)) errors.push('Enter a valid email address.');
      if(msg.length < 20) errors.push('Message must be at least 20 characters.');

      if(errors.length){
        status.className = 'help error';
        status.textContent = errors.join(' ');
        return;
      }

      status.className = 'help success';
      status.textContent = 'Validated successfully (demo). Replace with server submission if required.';
      form.reset();
    });
  }
})();
