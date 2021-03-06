
let buscar = document.querySelector('.buscar');
let cubConteiner = document.querySelector('.cubConteiner');


window.addEventListener('load', async()=>{

let url = 'https://api.jornalia.net/api/v1/articles?apiKey=0f82c47a5b21435c8e2b1f1987f66a1d&search=covid';

let conseguiDireccion = await fetch(url);

let conseJso = await conseguiDireccion.json();


let comentaries = await conseJso.articles;


let result = await conseJso.articles.filter( cate =>

	cate.category == 'Últimas noticias'
			
	)


console.log(result)

if (result.length >= 4 || result.length <= 4 ) {

	newresult = result.slice(0, 4);

	for( i = 0; i < newresult.length ; i++){

				cubConteiner.innerHTML += 

				`<div class="cubos">
					<h3 class="text-white">${newresult[i].title}</h3>
					<div class="pImagen">
						<div class="textDescrip">${newresult[i].description.split(' ', 15).join(' ')+'...'}</div>	
					</div>
					<button class="btn btn-dark buscar ">
						<a href="./php/noticias.html" class="text-white"> Continue leyendo</a>
					</button>
				</div>`

		
		}
}

}
)

