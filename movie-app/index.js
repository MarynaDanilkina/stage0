const url =  "https://api.themoviedb.org/3/search/movie?api_key=dbd18ae8e944776fe949cc13cc244733&query=london";
const newImg ="https://www.themoviedb.org/t/p/w300"


async function getData(url){
	const res = await fetch(url);
	const data = await res.json();
	console.log(data)
	showImg(data)
}
getData(url)


function showImg(data){

	const gallery = document.querySelector(".gallery");
	gallery.innerHTML = ""
	data.results.forEach(element => {
		const movie = document.createElement("div");
		movie.classList.add("movie");
		movie.innerHTML = `
		<img class="gallery-img"
						src="${newImg+element.poster_path}"
						alt="${element.original_title}">
					<div class="info">
						<div class="movie__title">
						${element.original_title}
						</div>
						<div class="movie__average">
							<p class="movie_average">
							${element.vote_average}
							</p>
						</div>
					</div>
		`;
		gallery.appendChild(movie);
	});
}

//для поиска
const form = document.querySelector("form")
const input = document.querySelector(".input")
const urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=dbd18ae8e944776fe949cc13cc244733&query=";
form.addEventListener("submit", (event) => {
	event.preventDefault();
 
	const result = `${urlSearch}${input.value}`;
	if (input.value) {
	  getData(result);
	  console.log(input.value);
	}
 });