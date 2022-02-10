const gallery = document.querySelector(".gallery");
const url =  "https://api.unsplash.com/search/photos?query=london&per_page=30&tag_mode=all&orientation=landscape&client_id=9cHhCOX5z-1jnwPd7nSgLZfFuBTGbkRYXbP36bwKwM4";

async function getData(url){
	
	const res = await fetch(url);
	const data = await res.json();
	if (data.total > 0) {
		showData(data);
	 } else {
		gallery.innerHTML = "";
			const img = `<img class="gallery-error" src="./img/error.jpg" alt="error">`;
		gallery.insertAdjacentHTML('beforeend', img);

	 }
}
getData(url)

function showData(data){

	gallery.innerHTML = "";

	console.log(data)
	data.results.map((value)=>{
		const img = document.createElement('img');
		img.classList.add('gallery-img');
		img.src = `${value.urls.regular}`;
		img.alt = `image`;
		gallery.append(img);
		//или 
		//const img = `<img class="gallery-img" src="${el.urls.regular}" alt="image">`;
		//gallery.insertAdjacentHTML('beforeend', img);
	})
}

const form = document.querySelector("form")
const input = document.querySelector(".input")
const urlSearch = "https://api.unsplash.com/search/photos?query=";
form.addEventListener("submit", (event) => {
	event.preventDefault();
 
	const result = `${urlSearch}${input.value}&tag_mode=all&orientation=landscape&client_id=9cHhCOX5z-1jnwPd7nSgLZfFuBTGbkRYXbP36bwKwM4`;
	if (input.value) {
	  getData(result);
	  console.log(input.value);
	}
 });