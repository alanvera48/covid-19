

let contenedorNoticias = document.querySelector('.noticias');


window.addEventListener('load', async()=>{

let link = 'https://api.jornalia.net/api/v1/articles?apiKey=9236bf2f119e4a8ebdac3115de7caa4b&search=covid';

let direccio = await fetch(link);

let notice = await direccio.json();


console.log(notice);

if (notice.articles.length > 4 || notice.articles.length < 4) {

	resultado = notice.articles.slice(0, 10);

	for( i = 0; i < resultado.length  ; i++){
				contenedorNoticias.innerHTML += 
				`<div class="cuboNoticias">
					<h3 class="text-dark">${resultado[i].title}</h3>
					<div class="descripcionNoticia">${resultado[i].description}</div>
					<img  class="imagenNoticia" src="${resultado[i].imageUrl}" alt="${resultado[i].imageUrl}">
					<div class="bottonInfo">${resultado[i].publishedAt}</div>		
				</div>`

		}
		}
	}

)
