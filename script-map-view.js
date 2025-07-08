(() => {
  const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const locationList = document.getElementById('location-list');
  const locationSearch = document.getElementById('location-search');

  // Filter locations based on input
  locationSearch.addEventListener('input', () => {
    const filter = locationSearch.value.toLowerCase();
    [...locationList.children].forEach(loc => {
      if (loc.textContent.toLowerCase().includes(filter)) {
        loc.style.display = '';
      } else {
        loc.style.display = 'none';
      }
    });
  });

  // Add a simple click handler on locations (just highlight)
  locationList.addEventListener('click', (e) => {
    if (e.target.classList.contains('location')) {
      [...locationList.children].forEach(loc => loc.style.backgroundColor = '');
      e.target.style.backgroundColor = '#d1fae5'; // light green
    }
  });

  // Simple chat interaction demo
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (!msg) return;

    // Append user's message
    appendMessage(msg, 'user');

    // Clear input
    chatInput.value = '';

    // Simulate bot reply (you can replace with real backend)
    setTimeout(() => {
      appendMessage('Thanks for your message! We\'ll get back to you soon.', 'bot');
    }, 1000);
  });

  function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('chat-message', sender);
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
})();