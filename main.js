//Button
const button = document.getElementById('Log-btn');
const img = document.getElementById('imgbtn');
const logContainer = document.getElementById('Log-container');

  button.addEventListener('click', function() {
  img.src = 'https://img.icons8.com/ios-filled/50/user-menu-male.png';
  logContainer.classList.toggle('show');
});
