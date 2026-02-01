(function(){
  'use strict';
  const menuBtn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('nav');
  const ddBtn = document.querySelector('[data-dd-btn]');
  const ddMenu = document.querySelector('[data-dd-menu]');

  if(menuBtn && nav){
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  if(ddBtn && ddMenu){
    ddBtn.addEventListener('click', () => {
      const isOpen = ddMenu.style.display === 'block';
      ddMenu.style.display = isOpen ? 'none' : 'block';
      ddBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Close dropdown when clicking a link (mobile)
  ddMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ddMenu.style.display = 'none';
    ddBtn.setAttribute('aria-expanded', 'false');
  }));
})();
