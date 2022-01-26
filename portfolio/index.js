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



/********* Замена изображения в portfolio ***********/


const portfolioBtns = document.querySelector('.portfolio__header-buttons');
portfolioBtns.addEventListener("click", changeImage);
function changeImage(event) {
	/*что целевой элемент event.target имеет класс portfolio-btn, то есть является кнопкой. */
	if(event.target.classList.contains('_portfolio-btn')) {
		/*Ближайший общий родитель кнопок с классом portfolio-btn - их общий контейнер portfolio__header-buttons. Находим его на странице и присваиваем переменной portfolioBtns */
	  const portfolioBtn = document.querySelector('.portfolio__header-buttons'); 
	  /*Найдём на странице все изображения с классом portfolio__header-photo и запишем результат поиска в переменную portfolioImages */
	  const portfolioImages = document.querySelectorAll('.portfolio__header-photo img');
	  const season = event.target.dataset.season 
	  portfolioImages.forEach((img, index) => img.src = `../portfolio/assets/img/${season}/${index + 1}.jpg`);
	}
 }

 /* Подсветка активной кнопки */

 /*Найти все кнопки используя метод querySelectorAll() */

 const portfolioButton = document.querySelectorAll('._portfolio-btn')
const portfoliocontainer = document.querySelector('.portfolio__header-buttons')

portfoliocontainer.addEventListener("click",  Buttonevent);

 function Buttonevent(event) {
	if(event.target.classList.contains('_portfolio-btn')) {
		 portfolioButton.forEach(Butoo => {
			 	Butoo.classList.remove('active');
	})

	const target = event.target;
	target.classList.add('active') 
}}

