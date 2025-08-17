const popup = document.getElementById('idpopupCookie');
const btn = document.getElementById('aceptarCookies');

if (!localStorage.cookiesAccepted) {
  popup.classList.add('show');
}

btn.addEventListener('click', function () {
  localStorage.cookiesAccepted = 'true';
  popup.classList.remove('show');
});
