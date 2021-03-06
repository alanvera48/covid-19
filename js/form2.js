

let formRegister = document.querySelector('.formRegister');

let nombreInputRegister = document.querySelectorAll('.nombreInputRegister');

let nombreDelRegistro = document.querySelector('.nombreDelRegistro');

var casoCorrectoNombre = '';
var casoCorrectoUser = '';
var casoCorrectoEmail = '';
var casoCorrectoPassword = '';


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



const valForm = (e)=>{
	switch (e.target.name) {
		case'nombre': if(expresiones.nombre.test(e.target.value)){
			e.target.style.borderBottom = '2px solid rgba(255,255,255,0.20)';
			e.target.style.color = 'black';	
			casoCorrectoNombre = 1;

		}else{
			e.target.style.borderBottom = '2px solid rgba(180, 24, 24, 1)';
			e.target.style.color = 'rgba(180, 24, 24, 1)';
			casoCorrectoNombre = 0;
		}
				
			break;
		case 'usuario': if(expresiones.usuario.test(e.target.value)){

			e.target.style.borderBottom = '2px solid rgba(255,255,255,0.20)';
			e.target.style.color = 'black';
			casoCorrectoUser = 1;
			

		}else{
			e.target.style.borderBottom = '2px solid rgba(180, 24, 24, 1)';
			e.target.style.color = 'rgba(180, 24, 24, 1)';
			casoCorrectoUser = 0;

		}	
			
		break;
		case 'email': if(expresiones.correo.test(e.target.value)){

			e.target.style.borderBottom = '2px solid rgba(255,255,255,0.20)';
			e.target.style.color = 'black';
			casoCorrectoEmail = 1;
			

		}else{
			e.target.style.borderBottom = '2px solid rgba(180, 24, 24, 1)';
			e.target.style.color = 'rgba(180, 24, 24, 1)';
			casoCorrectoEmail = 0;

		}
			
			
			break;
		case 'password': if(expresiones.password.test(e.target.value)){

			e.target.style.borderBottom = '2px solid rgba(255,255,255,0.20)';
			e.target.style.color = 'black';
			casoCorrectoPassword = 1;
			

		}else{
			e.target.style.borderBottom = '2px solid rgba(180, 24, 24, 1)';
			e.target.style.color = 'rgba(180, 24, 24, 1)';
			casoCorrectoPassword = 0;

		}
			
			
		break;		

	}

}


nombreInputRegister.forEach( (input)=> {
	input.addEventListener('keyup', valForm );
	input.addEventListener('blur', valForm );
});


formRegister.addEventListener('submit', function registrar(e){
	e.preventDefault();

	if (casoCorrectoNombre == 1 && casoCorrectoUser == 1 && casoCorrectoEmail == 1 && casoCorrectoPassword == 1) {

			let usererror = document.querySelector('.usererror');
	
			let data = new FormData(formRegister);
	
			fetch('./php/registro.php',{
				method: 'POST',
				body : data, 
			})
			.then(resul => resul.json())
			.then((dato) => { if(dato.mensaje ==1){
				usererror.innerHTML = 'User already exist'; 
				}else if(dato.mensaje==2){
					usererror.innerHTML='All input must be complete';
					}else if(dato.mensaje==3){usererror.innerHTML= 'Success Sign in';
					setTimeout(()=>{
						popupregister.style.display = 'none';
	
					},1500)
					}})
	

	}else{

		return;
	}

});


