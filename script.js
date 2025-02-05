// Grab references to the elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const yesMessage = document.getElementById('yesMessage');
const noMessage = document.getElementById('noMessage');

// Add click event listeners
yesBtn.addEventListener('click', () => {
  yesMessage.style.display = 'block';
  noMessage.style.display = 'none';
});

noBtn.addEventListener('click', () => {
  noMessage.style.display = 'block';
  yesMessage.style.display = 'none';
});

