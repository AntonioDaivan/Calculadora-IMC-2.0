// dados do usuário

// Inserindo nome no cabeçalho
let nome = prompt("Antes de começar, nos informe seu nome: ")
let cabecalho = document.getElementById('primeiro-nome')
let primeiroNome = nome.split(" ")[0]
cabecalho.innerHTML = primeiroNome

// dados de entrada
let peso = document.getElementById('peso-usuario')
let altura = document.getElementById('altura-usuario')
let btnCalcular = document.getElementById('calcular-imc')
let btnRefazerTeste = document.getElementById('novo-teste')

// dados do relatório
let nomeRelatorio = document.getElementById('nome')
let resultadoPeso = document.getElementById('peso')
let resultadoAltura = document.getElementById('altura')
let resultadoIMCValor = document.getElementById('valor-imc')
let resultadoIMC = document.getElementById('resultado-imc-check')

// função para fazer o calculo do IMC 
const calculaIMC = function(altura, peso){
	peso = peso.replace(',', '.')
	altura = altura.replace(',', '.')

	var imc = peso / (parseFloat(altura) * parseFloat(altura));

	if (imc < 18.5){
		return ['Você está abaixo do seu peso ideal.', imc]
	} else if (imc >= 18.5 && imc <= 24.99) {
		return ['Você está no peso ideal.', imc]
	} else if (imc >= 25 && imc <= 29.99){
		return ['Você está no sobrepeso.', imc]
	} else if (imc >= 30 && imc <= 34.99){
		return ['Você está no 1º estágio da Obesidade.', imc]
	} else if (imc >= 35 && imc <= 39.99){
		return ['Você está no 2º estágio da Obesidade.', imc]
	} else {
		return ['Você está no 3º estágio da Obesidade.', imc]
	}
}

// botão para calcular

btnCalcular.addEventListener("click", (event) => {
	event.preventDefault()

	nomeRelatorio.innerHTML = nome
	resultadoPeso.innerHTML = `${peso.value} Kg`
	resultadoAltura.innerHTML = `${altura.value} m`
	let imcStatus = calculaIMC(altura.value, peso.value)
	resultadoIMC.innerHTML = imcStatus[0]
	resultadoIMCValor.innerHTML = imcStatus[1].toFixed(2)
})

btnRefazerTeste.addEventListener("click", (event) => {
	event.preventDefault()
	location.reload(true)
})