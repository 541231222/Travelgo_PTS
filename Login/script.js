window.addEventListener('load', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm !== null) {
    loginForm.addEventListener('submit', function(event){
      event.preventDefault();

      const correctUsername = 'admin@gmail.com';
      const correctPassword = 'admin123';

      const username = document.getElementById('email')?.value;
      const password = document.getElementById('password')?.value;

      if(username === correctUsername && password === correctPassword){
        alert("login berhasil");
        window.location.href =  '/landingPage/index.html';
      }else{
        alert("salah bro");
      }
    });
  }
});

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const eyeImage = document.getElementById('eye-image');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeImage.src = '/IMG/eyeopen.png'; /* update the eye image to open eye */
  } else {
    passwordInput.type = 'password';
    eyeImage.src = '/IMG/jam_eye-close.png'; /* update the eye image to closed eye */
  }
}