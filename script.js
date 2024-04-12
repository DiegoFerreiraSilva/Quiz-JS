var quiz = document.querySelector('.pergunta');
var info = document.querySelector('.informacoes');
var pontos = 0;
var index = 0;

var perguntas = [{
    question: "Quem descobriu o Brasil?",
    options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Ferdinand Magellan"],
    answer: 1
},
{
    question: "Qual é a capital da França?",
    options: ["Paris", " Londres", "Berlim"],
    answer: 0
},
{
    question: "Quantos anéis compõem o símbolo dos Jogos Olímpicos?",
    options: ["2", "3", "4"],
    answer: 1
},
{
    question: "Qual é o símbolo químico do ouro?",
    options: ["Au", "Ag", "Hg"],
    answer: 0
},
{
    question: "Qual é a última letra do alfabeto grego?",
    options: ["Delta", "Alpha", "Omega"],
    answer: 2
},
{
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília"],
    answer: 2
},
{
    question: "Qual é o maior planeta do sistema solar?",
    options: ["Mercúrio", "Vênus", "Júpiter"],
    answer: 2
},
{
    question: "Qual é a estrela mais próxima da Terra?",
    options: ["Antares", "Proxima Centauri", "Sirius"],
    answer: 1
},
{
    question: "Qual é o animal mais rápido do mundo?",
    options: ["Guepardo", "Tigre", "Puma"],
    answer: 0
},
{
    question: "Qual é a célula mais básica de todos os organismos vivos?",
    options: ["Célula procarionte", "Célula eucarionte", "Célula animal"],
    answer: 0
},
{
    question: "Qual é a constelação mais visível no céu noturno?",
    options: ["Ursa Maior", "Aquário", "Orion"],
    answer: 2
},
{
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Terra", "Mercúrio", "Marte"],
    answer: 1
}];

function Quiz() {
    let informacao = `<p>Pontos: ${pontos}</p> 
                        <p>${index + 1}/12</p>`;
    let pergunta = `<p>${perguntas[index].question}</p>
                    <p><input type="radio" name="opcao" value="0" id="op1"> ${perguntas[index].options[0]}</p>
                    <p><input type="radio" name="opcao" value="1" id="op2"> ${perguntas[index].options[1]}</p>
                    <p><input type="radio" name="opcao" value="2" id="op3"> ${perguntas[index].options[2]}</p>`;

    info.innerHTML = informacao;
    quiz.innerHTML = pergunta;
}
Quiz();

function checar() {
    var opcoes = document.querySelectorAll('input[type="radio"');
    opcoes.forEach(opcao => {
        if (opcao.checked) {
            if (opcao.value != perguntas[index].answer) {
                alert(`Resposta errada!\nSua pontuação final foi de ${pontos} Pontos!\nVoltando do início...`);
                index = 0;
                pontos = 0;
                Quiz();
            }
            else {
                index++;
                pontos += 5;
                if (index == perguntas.length) {
                    alert(`Parabéns você acertou todas as questões!\nSua pontuação final foi de ${pontos} Pontos!\nVoltado do início...`);
                    index = 0;
                    pontos = 0;
                    Quiz();
                }
                else {
                    Quiz();
                }
            }
        }
    })
}