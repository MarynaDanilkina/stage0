const gallery = document.querySelector(".gallery");
const url =  "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=9cHhCOX5z-1jnwPd7nSgLZfFuBTGbkRYXbP36bwKwM4";
console.log("ffv")
async function getData(url){
	
	const res = await fetch(url);
	const data = await res.json();
	
	showData(data);
}
getData(url)

function showData(data){
	console.log(data)
	data.results.map((value)=>{
		
			const img = `<img class="gallery-img" src="${value.urls.regular}" alt="image">`;
			gallery.insertAdjacentHTML('beforeend', img);
	})


}