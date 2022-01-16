/*****Меню бургер*****/

const iconMenu = document.querySelector('.header__menu-icon');
const menuHeader = document.querySelector('.header__menu');
if(iconMenu){
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
	});
}
const navMenu = document.querySelectorAll('.menu__link');
navMenu.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
	document.body.classList.toggle('_lock');
	iconMenu.classList.remove('_active');
	menuHeader.classList.remove('_active');
	
}


console.log('1.48\n 2.15\n 3.22\n итого 85')