let diaSemana = new Date().getDay()
let nomeDiaSemana

switch (diaSemana) {
    case 0:
        nomeDiaSemana = 'Hoje é Domingo'
        break;
    case 1: 
        nomeDiaSemana = 'Hoje é Segunda-Feira'
        break;
    case 2:
        nomeDiaSemana = 'Hoje é Terça-Feira'
        break;
    case 3:
        nomeDiaSemana = 'Hoje é Quarta-Feira'
        break;
    case 4:
        nomeDiaSemana = 'Hoje é Quinta-Feira'
        break;
    case 5:
        nomeDiaSemana = 'Hoje é Sexta-Feira'
        break;
    case 6:
        nomeDiaSemana = 'Sábado'

}

document.write(`O dia da semana é: ${nomeDiaSemana}`)