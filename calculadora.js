/*Crie um programa que vai receber 5 notas,
calcular a média e dizer se a aluna foi aprovada, 
reprovada ou ficou em recuperação.

para ser aprovada a média tem que ser maior ou igual 7
para ser reprovada a média tem que ser menor que 5
para ir para recuperação a média tem que ser maior ou igual a 5 e menor que 7
*/

console.log("ESCOLA {REPROGRAMA}\r\n")

console.log("Calculadora de Médias\r\n")

//pacote que permite adicionar respostas no terminal
const readline = require('readline-sync')


const nome = readline.question("Qual o nome do Aluno(a)? ")

console.log(`Ok, vamos adicionar as notas de ${nome}\r\n`)

//pegando(input) das notas e salvando em variáveis
const nota1 = parseFloat(readline.question("Informe a primeira nota: "))
const nota2 = parseFloat(readline.question("Agora a segunda nota: "))
const nota3 = parseFloat(readline.question("Por favor, a terceira nota: "))
const nota4 = parseFloat(readline.question("Qual a quarta nota? "))
const nota5 = parseFloat(readline.question("Finalmente a quinta nota: "))

//calculando média e guardando numa variável
const media = (nota1 + nota2 + nota3 + nota4 + nota5)/5

console.log(`A média de  ${nome} é ${media}\r\n`)

//testando condições para aprovação de acordo com a média
if(media >= 7 ){
    console.log(`Parabéns! ${nome}. Você foi APROVADO.`)

}else if(media <5){
    console.log(`Sinto muito, ${nome}. Você foi REPROVADO.`)

}else{
    console.log(`Estude um pouco mais ${nome}, você está de RECUPERAÇÃO.`)
}
