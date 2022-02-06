let allMusic = [
	{
		name: "Варвара",
		artict: "БИ-2",
		img: "./assets/jpg/Би2.jpg",
		src: "./assets/audio/би2.mp3"
	},
	{
		name: "The Show Must Go On",
		artict: "Queen",
		img: "./assets/jpg/queen.jpg",
		src: "./assets/audio/queen.mp3"
	},
	{
		name: "Крылья",
		artict: "Наутилус",
		img: "./assets/jpg/наутилус.jpg",
		src: "./assets/audio/наутилус.mp3"
	},
	{
		name: "Unstoppable",
		artict: "Sia",
		img: "./assets/jpg/Sia.jpg",
		src: "./assets/audio/sia.mp3"
	},
	{
		name: "Summertime Sadness",
		artict: "Lana Del Rey",
		img: "./assets/jpg/Lana.jpg",
		src: "./assets/audio/lana.mp3"
	},
];



const MusicImg = document.querySelector(".container img")
const MusicName = document.querySelector(".song")
const MusicArtist = document.querySelector(".tetle")
const audio = document.querySelector('audio');
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let musicIndex = 0;
const play = document.querySelector('.play')
const proress = document.querySelector('.input')
const proressArea = document.querySelector('.area')
const mainImg = document.querySelector('.mainImg')


window.addEventListener("load", ()=>{
	loadMusic(musicIndex)
})


function loadMusic(indexNumg){
	MusicName.innerText = allMusic[indexNumg].name;
	MusicArtist.innerText = allMusic[indexNumg].artict;
	MusicImg.src = allMusic[indexNumg].img;
	audio.src = allMusic[indexNumg].src;
	mainImg.src = allMusic[indexNumg].img;

}

let isPlay = false;
function playAudio() {
	
	isPlay = true;
	document.getElementById("play").src="./assets/svg/pause.png";
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

//прогресс цифры
audio.addEventListener("timeupdate", (e)=>{
	const currentTime = e.target.currentTime;
	const duration = e.target.duration;
	let progressWidth = (currentTime / duration) * 100;
	proress.style.width = `${progressWidth}%`


		let musicCurrentTime = document.querySelector(".current");
		let musicDuration = document.querySelector(".length");

	audio.addEventListener("loadeddata", () => {
	

		let audioDuration = audio.duration;
		let totalMin = Math.floor(audioDuration / 60);
		let totalSek = Math.floor(audioDuration %  60)
		if(totalSek < 10){
			totalSek = `0${totalSek}`
		}
		musicDuration.innerText = `${totalMin}:${totalSek}`;
	});

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
	let songDuration = audio.duration;

	audio.currentTime = (clickedOffSetX / progressWidthval * songDuration)
	playAudio()
})





