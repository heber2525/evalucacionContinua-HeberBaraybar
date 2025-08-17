let lanzador = '#menu-movil';
let desplegable = '#desplegable-movil';
let desplegarClase = 'menu-desplegado';

function nav() {
  let lanz = document.querySelector(lanzador);
  lanz.addEventListener('click', despliegaMenu);
}
function despliegaMenu(e) {
  let despl = document.querySelector(desplegable);
  despl.classList.toggle(desplegarClase);
}
nav();
