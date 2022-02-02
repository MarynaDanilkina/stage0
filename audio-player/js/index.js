
//музыка play pause

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
	  document.getElementById("play").src="./assets/svg/pause.png";
	  
  }else{
	  pauseAudio()
	  document.getElementById("play").src="./assets/svg/play.png";
	  
  }
}
play.addEventListener('click', audioPlay);