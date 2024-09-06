// Function to set the mode
(() => {
    'use strict';
function setMode(mode) {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    const buttonText = mode === 'dark' ? 'Light' : 'Dark';
    const iconText = mode === 'dark' ? '<i class="fa-duotone fa-solid fa-sun"></i>' : '<i class="fa-duotone fa-solid fa-moon-stars"></i>';
    document.getElementById('mode-toggle').textContent = `${buttonText} Mode`;
    document.getElementById('mode-icon').innerHTML = `${iconText}`;
  }
  
  // Check localStorage for the user's preference
  const savedMode = localStorage.getItem('theme');
  if (savedMode) {
    setMode(savedMode);
  } else {
    setMode('light'); // Default to light mode if no preference is saved
  }
  
  // Add event listener to the button
  document.getElementById('mode-toggle').addEventListener('click', function () {
    const currentMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    
    // Toggle mode
    setMode(currentMode);
  
    // Save the user's preference to localStorage
    localStorage.setItem('theme', currentMode);
  });
  
})();