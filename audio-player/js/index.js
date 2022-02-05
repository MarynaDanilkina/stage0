let allMusic = [
	{
		name: "Филипп Киркоров",
		artict: "Стеснение Пропало",
		img: "./assets/jpg/киркоров.jpg",
		src: "./assets/audio/Киркоров.mp3"
	},
	{
		name: "Миллион Алых Роз",
		artict: "Алла Пугачева",
		img: "./assets/jpg/Алла.jpg",
		src: "./assets/audio/Пугачева.mp3"
	},
	{
		name: "Танцуй Под Бузову",
		artict: "Ольга Бузова",
		img: "./assets/jpg/бузова.jpg",
		src: "./assets/audio/Бузова.mp3"
	},
	
];



const MusicImg = document.querySelector(".body__container img")
const MusicName = document.querySelector(".song")
const MusicArtist = document.querySelector(".tetle")
const audio = document.querySelector('audio');
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let musicIndex = 0;
const play = document.querySelector('.play')

window.addEventListener("load", ()=>{
	loadMusic(musicIndex)
})


function loadMusic(indexNumg){
	MusicName.innerText = allMusic[indexNumg].name;
	MusicArtist.innerText = allMusic[indexNumg].artict;
	MusicImg.src = allMusic[indexNumg].img;
	audio.src = allMusic[indexNumg].src;

}

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

	//следующая песня

function nextSong(){
	musicIndex++
	if(musicIndex > allMusic.length -1){
		musicIndex = 0
	}
	
	loadMusic(musicIndex)
	playAudio()
	
}
next.addEventListener('click', nextSong )


//песня назад
function prevSong(){
	musicIndex--
	if(musicIndex < 0){
		musicIndex = allMusic.length -1
	}
	loadMusic(musicIndex)
	playAudio()
}
prev.addEventListener('click', prevSong )