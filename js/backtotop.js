// Get the button element
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopBtn.classList.add('show');
    backToTopBtn.classList.remove('hide');
  } else {
    backToTopBtn.classList.add('hide');
    backToTopBtn.classList.remove('show');
  }
};

// When the button is clicked, scroll to the top of the document
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
