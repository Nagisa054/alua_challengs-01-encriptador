/*VARIABLES Y CONSTANTES*/
const input = document.getElementById('input');//es el campo de ingreso de datos
const output = document.getElementById('output');//es el campo de salidad de datos
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnCopiar = document.getElementById('btnCopiar');
var mensaje = input.value;//es el texto de entrada
var valido = true;

/*FUNCIONES*/
function validarInput() {
	mensaje = input.value;//se actualiza el valor de mensaje
	if (/[^a-z0-9\s]/gi.test(mensaje) == true || /[A-Z]/.test(mensaje) == true) {
		console.log(mensaje +  " no es valido");
		//input.value = "*";
		input.placeholder = "❗❗❗⚠ no se permiten MAYUSCULAS ⚠❗❗❗\n  ❗❗❗⚠ no caracteres especiales ⚠❗❗❗";
		input.style.borderColor = "red";
		valido = false;
	} else {
		console.log(mensaje + " es valido")
		input.style.borderColor = "#3ACFB8";
		valido = true;
	}
}
function encriptar(){
	// si el input es valido lo encriptará, si no salta un alert
	if (valido == true) {
		console.log("encriptando...");
		// ENCRIPTACION/CODIFICACION
		let encriptado = mensaje.replace(/[aeiou]/g, function(letra) {
	  		switch (letra) {
	    		case 'a':
	      			return 'ai';
	    		case 'e':
	      			return 'enter';
	    		case 'i':
			    	return 'imes';
	    		case 'o':
	      			return 'ober';
	    		case 'u':
	      			return 'ufat';
			}
		});
		output.value = encriptado;
		console.log(encriptado);
	}else{
		alert("No se puede encriptar input no valido\n\n❗❗❗⚠ No se permiten MAYUSCULAS ⚠❗❗❗\n  ❗❗❗⚠ No caracteres especiales ⚠❗❗❗ ");
	}
}
function desencriptar(){
	let desencriptado = mensaje;
	if (valido == true) {
		desencriptado = desencriptado.replace(/ai/g, 'a');
    	desencriptado = desencriptado.replace(/enter/g, 'e');
		desencriptado = desencriptado.replace(/imes/g, 'i');
    	desencriptado = desencriptado.replace(/ober/g, 'o');
		desencriptado = desencriptado.replace(/ufat/g, 'u');
		console.log("desencriptando...");
		output.value = desencriptado;
	}else{
		alert("No se puede encriptar input no valido\n\n❗❗❗⚠ No se permiten MAYUSCULAS ⚠❗❗❗\n  ❗❗❗⚠ No caracteres especiales ⚠❗❗❗ ");
	}
}
function copiar(){
	console.log("funcion copiar conectada");
	navigator.clipboard.writeText(output.value);
	alert("TEXTO COPIADO");
}
/*LLAMADO DE FUNCIONES*/
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
setInterval(validarInput, 500);// lansa la funcion validadIput cada 500 milisegundos

/*por: JUAN PABLO ROJAS / Nagisa054$*/
