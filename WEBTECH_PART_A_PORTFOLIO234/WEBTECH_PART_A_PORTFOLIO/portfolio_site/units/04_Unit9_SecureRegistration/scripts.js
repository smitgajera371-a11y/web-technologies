(function(){
  'use strict';
  const form = document.querySelector('form');
  const status = document.querySelector('#status');

  const strong = (pw) => {
    const rules = [
      { ok: pw.length >= 12, msg: 'Password must be at least 12 characters.' },
      { ok: /[a-z]/.test(pw), msg: 'Password must include a lowercase letter.' },
      { ok: /[A-Z]/.test(pw), msg: 'Password must include an uppercase letter.' },
      { ok: /[0-9]/.test(pw), msg: 'Password must include a number.' },
      { ok: /[^A-Za-z0-9]/.test(pw), msg: 'Password must include a symbol.' }
    ];
    return rules.filter(r => !r.ok).map(r => r.msg);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.className = '';
    status.textContent = '';

    const email = document.querySelector('#email').value.trim();
    const pw = document.querySelector('#password').value;
    const confirm = document.querySelector('#confirm').value;
    const consent = document.querySelector('#consent').checked;

    const errors = [];
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
    errors.push(...strong(pw));
    if(pw !== confirm) errors.push('Passwords do not match.');
    if(!consent) errors.push('Consent is required to proceed.');

    if(errors.length){
      status.className = 'error';
      status.textContent = errors.join(' ');
      return;
    }

    status.className = 'success';
    status.textContent = 'Registration validated successfully (demo). In a real system, passwords must be hashed server-side.';
    form.reset();
  });
})();
