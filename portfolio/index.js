
/*****Меню бургер*****/
//бургер меню
const iconMenu = document.querySelector('.header__menu-icon');
//общий класс для навигации
const menuHeader = document.querySelector('.header__menu');
if(iconMenu){
	//при клике на бургер меню
	iconMenu.addEventListener("click", function(e){
		//блокируется весь экран
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

/*****Смена значка при разных темах светлая и темная*****/
const moon = document.querySelector('.header__moon')
const sun = document.querySelector('.header__sun')
const icon = document.querySelector('.header__icon')

	moon.addEventListener("click", function(a){
		icon.classList.toggle('header__moon')
		icon.classList.toggle('header__sun')
		
	})
	const wrapper = document.querySelector('.wrapper')
	const skills = document.querySelector('.skills__body-title')
	const skillsTitle = document.querySelector('.skills__body-titles')
	const portfolio = document.querySelector('.portfolio__body-title')
	const portfolioTitle = document.querySelector('.portfolio__body-titles')
	const video = document.querySelector('.video__body-title')
	const videoTitle = document.querySelector('.video__body-titles')
	const price = document.querySelector('.price__body-title')
	const priceTitle = document.querySelector('.price__body-titles')
	const footer = document.querySelector('.footer')
	const footerA = document.querySelector('.footer__rss a')
	const footerB = document.querySelector('.footer__github-github a')
	const footerInsta = document.querySelector('.ico__insta')
	const footerFb = document.querySelector('.ico__fb')
	const footerTw = document.querySelector('.ico__tw')
	const footerPinterest = document.querySelector('.ico__pinterest')
	const headerTitle = document.querySelector('.header__hero-title')
	const headerText = document.querySelector('.header__hero-text')
	const languageList = document.querySelector('.language__list')
	const portfolioBtn = document.querySelectorAll('._portfolio-btn')

	

const arr = [wrapper, skills, skillsTitle, portfolio, portfolioTitle, video, videoTitle, price, priceTitle, footer, footerA, footerB, footerInsta, footerFb, footerTw, footerPinterest];
	
const arr1 = [headerTitle, headerText, languageList];


moon.addEventListener("click", function(c){
	
	
	portfolioBtn.forEach(el=> But(el))
	arr.forEach(el=> el.classList.toggle('__sun'))
	
	arr1.forEach(el=> el.classList.toggle('_sun'))
	


	
})
function But(el){
	el.classList.toggle('sun')
}
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

 /* Подсветка активной кнопки в разделе portfolio*/

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

 /* Подсветка активной кнопки в разделе lang*/

const langButton = document.querySelectorAll('.lang')
const langcontainer = document.querySelector('.language__list')

langcontainer.addEventListener("click",  ButtonLeng);

 function ButtonLeng(event) {
	if(event.target.classList.contains('lang')) {
		langButton.forEach(Buto => {
			 	Buto.classList.remove('_active');
	})

	const target = event.target;
	target.classList.add('_active') 
		
}}


/* Смена языка */
import i18Obj from './translate.js';

const buttonLang = document.querySelectorAll('.lang')
 //родитель переключателей
const langContainer = document.querySelector('.language__list')
//для родителя при клике функция
langContainer.addEventListener("click",  getActive);

const language = document.querySelectorAll('[data-i18]')

function getActive(event){
//найти кнопку что нажали вывод ее ""
	const languages = event.target.dataset.leng
	return getTranslate(languages)


function getTranslate(lng){

language.forEach((el) => {
			
		el.textContent = i18Obj[lng][el.dataset.i18]
		console.log(i18Obj)

})
}}