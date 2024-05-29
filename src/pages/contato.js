window.onload = function(){
	let botaoCadastro = document.getElementById("btnEnviar");

	botaoCadastro.onclick = function(){
			alert("Cadastro enviado com sucesso!");
	};
}



function detecta(){
	let tel = document.getElementById('telefone').value
	let tamanho = ''
	if(tel.length < 9){
			document.getElementById('aviso').innerHTML = 'Nº de caracteres insuficiente'
	} else if (tel.length >= 9){
			document.getElementById('aviso').innerHTML = 'Nº de caracteres suficiente'
			for (let i = 0; i < 9; i++){
					tamanho = tamanho + tel[i]
					console.log(tamanho)
			}
			document.getElementById('telefone').value = tamanho
	}
}

function aumenta(){
	let div = document.querySelector('.button')
	div.style.transform = 'scale(1.5)'
}

function diminui(){
	let div = document.querySelector('.button')
	div.style.transform = 'scale(1)'
}
