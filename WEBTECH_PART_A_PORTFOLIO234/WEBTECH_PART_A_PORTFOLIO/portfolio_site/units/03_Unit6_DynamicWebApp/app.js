(function(){
  'use strict';

  const form = document.querySelector('form');
  const status = document.querySelector('#status');
  const output = document.querySelector('#output');

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = '';

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    const errors = [];
    if(name.length < 2) errors.push('Name must be at least 2 characters.');
    if(!isEmail(email)) errors.push('Email must be valid.');
    if(comment.length < 10) errors.push('Comment must be at least 10 characters.');

    if(errors.length){
      status.className = 'error';
      status.textContent = errors.join(' ');
      return;
    }

    // Simulated AJAX call: fetch local JSON (works on local web server; some browsers block file:// fetch).
    try{
      const res = await fetch('./data/response.json', { cache: 'no-store' });
      const data = await res.json();

      output.innerHTML = `
        <h3>Server-style response (simulated)</h3>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Received:</strong> ${name} (${email})</p>
        <p><strong>Your comment:</strong> ${comment}</p>
      `;

      status.className = 'success';
      status.textContent = 'Submitted successfully. Content updated without page reload.';
      form.reset();
    }catch(err){
      // Fallback for file:// context
      output.innerHTML = `
        <h3>AJAX simulation (fallback)</h3>
        <p><strong>Received:</strong> ${name} (${email})</p>
        <p><strong>Your comment:</strong> ${comment}</p>
        <p class="small">Note: If opened via file://, some browsers block fetch. Use Live Server to demonstrate fetch.</p>
      `;
      status.className = 'success';
      status.textContent = 'Submitted successfully (fallback mode).';
      form.reset();
    }
  });
})();
