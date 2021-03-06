let cubos = document.querySelectorAll(".move");
let header = document.querySelector('.header');

function colorHeader(){
	let scrollHecho = document.documentElement.scrollTop;

	let headerAltura = header.offsetTop;

	if(headerAltura + 200 < scrollHecho){
		header.style.backgroundColor = 'rgba(135, 173, 173, 0.0)';
	}else{
		header.style.backgroundColor = 'rgba(135, 173, 173, 0.75)';
	}
}

window.addEventListener('scroll',colorHeader);


function mostrar(){
	var distancia = document.documentElement.scrollTop;
	for (var i = 0 ;i < cubos.length ; i++) {

		var altura = cubos[i].offsetTop;

		if(altura - 500 < distancia ){
			cubos[i].style.opacity = 1;
		} else{
			cubos[i].style.opacity = 0;
		}
	}
}

window.addEventListener("scroll", mostrar);



let login = document.querySelector('.login');
let register = document.querySelector('.register');
let loger = document.querySelector('.loger');
let popupregister = document.querySelector('.popupregister');
let closeLoger = document.querySelector('#close-loger');
let closeRegister = document.querySelector('#close');


login.addEventListener('click', ()=>{
	loger.style.display = 'block';
})

register.addEventListener('click', ()=>{
	popupregister.style.display = 'block';
})

closeLoger.addEventListener('click', ()=>{
	loger.style.display = 'none';
})
closeRegister.addEventListener('click', ()=>{
	popupregister.style.display = 'none';
})

