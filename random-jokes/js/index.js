const headerBat = document.querySelector(".header");
const btn = document.querySelectorAll(".btn");
let url = 'https://api.icndb.com/jokes/random';
const content = document.querySelector(".content");
const play = document.querySelector(".main__play");
import i18Obj from './ru.js';
const en = document.querySelector(".en");
const ru = document.querySelector(".ru");

headerBat.addEventListener("click", addActive);
headerBat.addEventListener("click", checkLeng);

function checkLeng(){
	if(en.classList.contains("active")){
	console.log('en');
	play.addEventListener("click", addNew);
	
	}
	if(ru.classList.contains("active")){
	console.log('ru');
	toRu();
	play.addEventListener("click", toRu);
	}
}
//checkLeng()



async function getData(url) {
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	showData(data);
}
 getData(url);


function showData(data){

	content.textContent = data.value.joke;
}


function addNew(){
	getData(url);
}


function addActive(event){
	if(event.target.classList.contains('btn')) {
		btn.forEach(Buto => {
			 	Buto.classList.remove('active');
	})

	const target = event.target;
	target.classList.add('active') ;
	
}}

function toRu(){
	let rand = Math.floor(Math.random()*(77 - 0 +1))+0;
	content.textContent = i18Obj[rand].текст;

}
