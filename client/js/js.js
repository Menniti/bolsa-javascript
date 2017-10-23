
let campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
]

let form = document.querySelector('.form');



form.addEventListener('submit', function(){
	
	event.preventDefault();

	let tr = document.createElement('tr');

	let tdVolume = document.createElement('td');

	let table = document.querySelector('table tbody');

	campos.forEach(function(campo){
		let td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	tdVolume.textContent = campos[1].value * campos[2].value
	tr.appendChild(tdVolume)
	table.appendChild(tr)

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();


})