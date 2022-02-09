const headerBat = document.querySelector(".header");
const btn = document.querySelectorAll(".btn");
const content = document.querySelector(".content");
const play = document.querySelector(".main__play");
let quotes = "https://type.fit/api/quotes";
const en = document.querySelector(".en");
const ru = document.querySelector(".ru");

play.addEventListener("click", getQuotes)
ru.addEventListener("click", toRu)
en.addEventListener("click", toEn)

async function getQuotes(){
	console.log(quotes)
	const res = await fetch(quotes);
	const data = await res.json();
	console.log(data);
	showData(data);
}
getQuotes()

function showData(data){
	let rand = Math.floor(Math.random()*(100 - 0 +1))+0;

	content.textContent = data[rand].text;
}

function toRu(){
	en.classList.remove("active")
	ru.classList.add("active")
	 quotes = "./json/data.json";
	 getQuotes()
}

function toEn(){
	ru.classList.remove("active")
	en.classList.add("active")
	 quotes = "https://type.fit/api/quotes";
	 getQuotes()
}

//анимация
const folio1 = document.querySelector(".folio11")
const pop = document.querySelector("#folio2")
//запустить анимацию при нажатии на кнопку
play.addEventListener("click", ()=>{
	folio1.classList.add("folio1")
	pop.classList.add("forfolio2")
	//через секунду удалить класс
	
	setTimeout(remClass, 1000)
})

function remClass(){
	folio1.classList.remove("folio1")
	pop.classList.remove("forfolio2")
}