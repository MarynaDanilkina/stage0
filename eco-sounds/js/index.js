// Подсветка активной кнопки

const menuLink = document.querySelectorAll('.menu__link')
const menuList = document.querySelector('.menu__list')
const main = document.querySelector('.main')

menuList.addEventListener("click",  ActveButton);

 function ActveButton(event) {
	if(event.target.classList.contains('menu__link')) {
	  menuLink.forEach(el => {
				 el.classList.remove('active');
	})

	const target = event.target;
	target.classList.add('active') 
}}





//Замена изображения

const play = document.querySelector('.main__play');
menuList.addEventListener("click",  changeImage);
function changeImage(event) {

  if(event.target.classList.contains('menu__link')) {
	  play.classList.remove('pause')
	  const birds = event.target.dataset.birds 
	  main.style.backgroundImage = `url('./assets/jpg/${birds}.jpg')`;
	  document.getElementById("audioBirds").src=`./assets/audio/${birds}.mp3`;
  
  }
} 







//музыка

const audio = document.querySelector('audio');

const pause = document.querySelector('.pause');
let isPlay = false;
function playAudio() {
  isPlay = true;
 audio.currentTime = 0;
 audio.play();
}

function pauseAudio() {
isPlay = false;
 audio.pause();
}

function audioPlay(){
  if(!isPlay){
	  playAudio()
	  play.classList.add('pause')
  }else{
	  pauseAudio()
	  play.classList.remove('pause')
  }
}
play.addEventListener('click', audioPlay);


