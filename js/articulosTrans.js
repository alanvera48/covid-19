let cubos = document.querySelectorAll(".move");

let header = document.querySelector('.header');

function colorHeader(){
	let scrollHecho = document.documentElement.scrollTop;

	let headerAltura = header.offsetTop;

	if(headerAltura + 20 < scrollHecho){
		header.style.opacity = '0' 
	}else{
		header.style.opacity = '1';
	}
}

window.addEventListener('scroll',colorHeader);

let art1Abierto = document.querySelector('.art1Abierto');


function cambioFondo () {

	let scrollHecho = document.documentElement.scrollTop;

	let headerAltura = header.offsetTop;

	if(headerAltura  < scrollHecho){

		art1Abierto.style.background = '1';

	}else{

		art1Abierto.style.background = '1';

	}
}



