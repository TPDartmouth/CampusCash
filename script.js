(() => {
  const modal = document.getElementById('login-modal');
  const openBtn = document.getElementById('open-login');
  const closeBtn = document.getElementById('close-login');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const loginTab = document.getElementById('login-tab');
  const signupTab = document.getElementById('signup-tab');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus email on open
    setTimeout(() => {
      document.getElementById('email').focus();
    }, 100);
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordBtn.setAttribute('aria-label', 'Hide password');
    } else {
      passwordInput.type = 'password';
      togglePasswordBtn.setAttribute('aria-label', 'Show password');
    }
  });

  function switchTab(toLogin) {
    if (toLogin) {
      loginTab.classList.add('active');
      loginTab.setAttribute('aria-selected', 'true');
      loginTab.tabIndex = 0;
      loginForm.style.display = '';
      loginForm.setAttribute('aria-hidden', 'false');

      signupTab.classList.remove('active');
      signupTab.setAttribute('aria-selected', 'false');
      signupTab.tabIndex = -1;
      signupForm.style.display = 'none';
      signupForm.setAttribute('aria-hidden', 'true');

      // Focus first input in login
      setTimeout(() => {
        document.getElementById('email').focus();
      }, 50);
    } else {
      signupTab.classList.add('active');
      signupTab.setAttribute('aria-selected', 'true');
      signupTab.tabIndex = 0;
      signupForm.style.display = '';
      signupForm.setAttribute('aria-hidden', 'false');

      loginTab.classList.remove('active');
      loginTab.setAttribute('aria-selected', 'false');
      loginTab.tabIndex = -1;
      loginForm.style.display = 'none';
      loginForm.setAttribute('aria-hidden', 'true');
    }
  }

  loginTab.addEventListener('click', () => switchTab(true));
  signupTab.addEventListener('click', () => switchTab(false));

  // Keyboard navigation for tabs
  loginTab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      switchTab(false);
      signupTab.focus();
    }
  });
  signupTab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      switchTab(true);
      loginTab.focus();
    }
  });

  // Optional: prevent form submission for demo
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Log In submitted! (replace with backend logic)');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
})();