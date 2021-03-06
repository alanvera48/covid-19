let division1 = document.querySelector('.division1');
let division2 = document.querySelector('.division2');
let division3 = document.querySelector('.division3');

let imagenIcon = document.querySelector('.imagenIcon');

let selecion1 = document.querySelector('.selecion1');
let selecion2 = document.querySelector('.selecion2');
let selecion3 = document.querySelector('.selecion3');


division1.addEventListener('click', ()=>{
	division1.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
	division2.style.backgroundColor = 'rgba(0,0,0,0.20)';
	division3.style.backgroundColor = 'rgba(0,0,0,0.20)';

	selecion1.style.transform = 'translateX(0%)';
	selecion2.style.transform = 'translateX(100%)';
	selecion3.style.transform = 'translateX(200%)';

})

division2.addEventListener('click', ()=>{
	division2.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
	division1.style.backgroundColor = 'rgba(0,0,0,0.20)';
	division3.style.backgroundColor = 'rgba(0,0,0,0.20)';

	selecion2.style.transform = 'translateX(-100%)';
	selecion1.style.transform = 'translateX(-100%)';
	selecion3.style.transform = 'translateX(100%)';

})

division3.addEventListener('click', ()=>{

	division3.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
	division1.style.backgroundColor = 'rgba(0,0,0,0.20)';
	division2.style.backgroundColor = 'rgba(0,0,0,0.20)';

	selecion3.style.transform = 'translateX(-200%)';
	selecion1.style.transform = 'translateX(-100%)';
	selecion2.style.transform = 'translateX(-200%)';

})

