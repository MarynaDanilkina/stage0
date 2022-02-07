
"use strict";
/*сохраняем данные языка и темы в localStorage*/

let themaFirst = "false";


function setLocalStorage() {
	
  localStorage.setItem("thema", themaFirst);
  
}
window.addEventListener("beforeunload", setLocalStorage)

/* считываем данные языка и темы из localStorage*/
function getLocalStorage() {
  
  if(localStorage.getItem("thema") === "true"){
    changeSubject();
  }
 
}
window.addEventListener('load', getLocalStorage)




/*****Меню бургер*****/
//бургер меню
const iconMenu = document.querySelector('.header__menu-icon');
const iconMenuAc = document.querySelector('._active');
//общий класс для навигации
const menuHeader = document.querySelector('.header__menu');

if(iconMenu){
	//при клике на бургер меню
	iconMenu.addEventListener("click", function(e){
		//блокируется весь экран
		if(iconMenuAc){
			document.body.classList.add('_lock');
		}
		

		iconMenu.classList.toggle('_active');
		menuHeader.classList.toggle('_active');
	});
}

const navMenu = document.querySelectorAll('.menu__link');
navMenu.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
	document.body.classList.remove('_lock');
	iconMenu.classList.remove('_active');
	menuHeader.classList.remove('_active');
	
}

/*****Смена значка при разных темах светлая и темная*****/





const moon = document.querySelector('.header__moon')
const sun = document.querySelector('.header__sun')
const icon = document.querySelector('.header__icon')

moon.addEventListener("click", changeSubject);
icon.addEventListener("click", changeSubject);



function changeSubject() {
		themaFirst = (icon.classList.contains("header__moon")).toString();
		icon.classList.toggle('header__moon')
		icon.classList.toggle('header__sun')
	if(icon.classList.contains('header__sun')){
		//header
		document.querySelector('.logo').style.fill = "#000";
		document.querySelectorAll('.menu__link').forEach((el) => {
			el.classList.add("sun") });
		document.querySelectorAll('.lang').forEach((el) => {
			el.classList.add("sun") });
		document.querySelector('.language__item1').style.color = "#000";
		document.querySelector('.wrapper').style.backgroundColor = "#FFF";
		document.querySelector('.main-block__image').style.backgroundImage = "url('./assets/img/bg2.jpg')";
		document.querySelectorAll('.all__body-title').forEach((el)=>{
			el.style.backgroundColor = "#FFF"});
		document.querySelectorAll('.all__body-titles').forEach((el)=>{
			el.style.color = "#000"});
		document.querySelector('.skills__body-title').style.backgroundColor = "#FFF";
		document.querySelectorAll('.section__body-line').forEach((el)=>{
			el.style.backgroundColor = "#BDAE82"});
		//mein
		document.querySelector('.header__hero-title').style.color = "#000";
		document.querySelector('.header__hero-text').style.color = "#000";
		document.querySelector('.header__hero-button').classList.add('sunWhB')
		//skills
		document.querySelector('.skills__header').style.color = "#000";
		//portfolio
		document.querySelectorAll('._portfolio-btn').forEach((el) => {
			el.classList.add('sunWB') });
		//video
		document.querySelector(".screen").style.fill ="#000"
		//price
		document.querySelector('.price__header-body').style.color = "#000";
		document.querySelectorAll('.price__header-button').forEach((el) => {
			el.classList.add('sunWB') });
		
		//contact
		document.querySelector('.button-gold').classList.add('sunWhB')
		document.querySelector('.contact__me-title').style.color = "#000";
		document.querySelector('.contacts').style.backgroundImage = "url('./assets/img/contacts2.jpg')";
		
		//footer
		document.querySelector('.footer').style.backgroundColor = "#FFF";
		document.querySelectorAll('.footer a').forEach((el) => {
			el.style.color = "#000"; });
		document.querySelectorAll('.footer').forEach((el) => {
			el.style.color = "#000"; });
		document.querySelectorAll('.footer__ico li a svg').forEach((el) => {
			el.style.fill = "#000"; });
		
		
	

	}else if(icon.classList.contains('header__moon')){
		//header
		document.querySelector('.logo').style.fill = "#FFF";
		document.querySelectorAll('.menu__link').forEach((el) => {
			el.classList.remove("sun") });
		document.querySelectorAll('.lang').forEach((el) => {
			el.classList.remove("sun") });
			document.querySelector('.language__item1').style.color = "#FFF";
		document.querySelector('.wrapper').style.backgroundColor = "#000";	
		document.querySelector('.main-block__image').style.backgroundImage = "url('./assets/img/bg.jpg')";
		
		document.querySelectorAll('.all__body-title').forEach((el)=>{
			el.style.backgroundColor = "#000"});
		document.querySelectorAll('.all__body-titles').forEach((el)=>{
			el.style.color = "#BDAE82"});
		document.querySelector('.skills__body-title').style.backgroundColor = "#000";
		document.querySelectorAll('.section__body-line').forEach((el)=>{
			el.style.backgroundColor = "#BDAE82"});
		//mein
		document.querySelector('.header__hero-title').style.color = "#FFF";
		document.querySelector('.header__hero-text').style.color = "#FFF";
		document.querySelector('.header__hero-button').classList.remove('sunWhB')
		//skills
		document.querySelector('.skills__header').style.color = "#FFF";
		//portfolio
		document.querySelectorAll('._portfolio-btn').forEach((el) => {
			el.classList.remove('sunWB') });
		//video
		document.querySelector(".screen").style.fill ="#FFF"
		//price
		document.querySelector('.price__header-body').style.color = "#FFF";
		document.querySelectorAll('.price__header-button').forEach((el) => {
			el.classList.remove('sunWB') });
		//contact
		document.querySelector('.button-gold').classList.remove('sunWhB')
		document.querySelector('.contact__me-title').style.color = "#BDAE82";
		document.querySelector('.contacts').style.backgroundImage = "url('./assets/img/contacts.jpg')";
		


		//footer
		document.querySelector('.footer').style.backgroundColor = "#000";
		document.querySelectorAll('.footer a').forEach((el) => {
			el.style.color = "#FFF"; });
		document.querySelectorAll('.footer').forEach((el) => {
			el.style.color = "#FFF"; });
		document.querySelectorAll('.footer__ico li a svg').forEach((el) => {
			el.style.fill = "#FFF"; });
		
	}	
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

//


/* Смена языка */
import i18Obj from './translate.js';

 //родитель переключателей
const langContainer = document.querySelector('.language__list')
//для родителя при клике функция
langContainer.addEventListener("click",  getActive);

const toTranslate = document.querySelectorAll('[data-i18]')

function getActive(event){
//найти кнопку что нажали вывод ее ""
	const languages = event.target.dataset.leng
	return getTranslate(languages)


function getTranslate(languages){

	toTranslate.forEach((el) => {
			
		el.textContent = i18Obj[languages][el.dataset.i18]
		console.log(i18Obj)

})
}}





//video
const video = document.querySelector('video')
const videoPl = document.querySelector('.video-player')
const proressArea = document.querySelector('.area')
const playBt = document.querySelector('.playBt')
const playVideo = document.querySelector('.video-play')
const proress = document.querySelector('.input')



let isPlay = false;
function plVideo() {
	document.getElementById("playBt").src="./assets/img/svg/pause.svg";
	isPlay = true;
	video.play();
	playVideo.classList.add('none');
	}
	
function pauseVideo() {
	document.getElementById("playBt").src="./assets/img/svg/play.svg";
	isPlay = false;
	video.pause();
	playVideo.classList.remove('none');
}
	
function videoPlay(){
	if(!isPlay){
		plVideo()
	}else{
		pauseVideo()
	}
}


	playBt.addEventListener('click', videoPlay);
	videoPl.addEventListener('click', videoPlay);
	playVideo.addEventListener('click', videoPlay);
	




	
//прогресс цифры
video.addEventListener("timeupdate", (e)=>{
	
	const currentTime = e.target.currentTime;
	const duration = e.target.duration;
	let progressWidth = (currentTime / duration) * 100;
	proress.style.width = `${progressWidth}%`

		let musicCurrentTime = document.querySelector(".current");
		let musicDuration = document.querySelector(".length");

		let audioDuration = video.duration;
		let totalMin = Math.floor(audioDuration / 60);
		
		let totalSek = Math.floor(audioDuration %  60)
		if(totalSek < 10){
			totalSek = `0${totalSek}`
		}
		musicDuration.innerText = `${totalMin}:${totalSek}`;
	
		let currentMin = Math.floor(currentTime / 60);
		let currentSek = Math.floor(currentTime %  60)
		if(currentSek < 10){
			currentSek = `0${currentSek}`
		}
		musicCurrentTime.innerText = `${currentMin}:${currentSek}`;
	

});
// прогресс input


proressArea.addEventListener("click", (e)=>{
	let progressWidthval = proressArea.clientWidth;
	let clickedOffSetX = e.offsetX;
	let songDuration = video.duration;

	video.currentTime = (clickedOffSetX / progressWidthval * songDuration)
	plVideo() 
})

//на весь экран

const controlFullScreen = document.querySelector('.player__fullscreen');
controlFullScreen.addEventListener('click', goFullScreen);

function goFullScreen(){
	console.dir(video);
	if(video.webkitSupportsFullscreen) video.webkitEnterFullScreen();
 }
 //звук
 const controlVol = document.querySelector('.player__slider[name="volume"]');

const volumButton = document.querySelector('.volum_active')



 controlVol.addEventListener('change', updateVol);


 volumButton.addEventListener("click",()=>{
	volumButton.classList.toggle('activeVideo')
	volumButton.classList.toggle('volumActive')
	if(volumButton.classList.contains('activeVideo')){
		video.volume = 0;
		controlVol.style.display = 'none'
	}
	if(volumButton.classList.contains('volumActive')){
		video.volume = 1;
		controlVol.style.display = 'block'
	}
})



 function updateVol(){
 	const volume = this.value;
	video.volume = volume;
}






  