let dia = new Date().getDay()
let mostrarDia = ''
switch (dia){
    case 0: mostrarDia = 'Domingo'
        break        
    case 1: mostrarDia = 'Segunda-feira'
        break
    case 2: mostrarDia = 'Terça-feira'    
        break
    case 3: mostrarDia = 'Quarta-feira'
        break
    case 4: mostrarDia = 'Quinta-feira'
        break
    case 5: mostrarDia = 'Sexta-feira'
        break
    case 6: mostrarDia = 'Sábado'
        break
    default: mostrarDia = '?' 
}
console.log(`O dia da semana é: ${mostrarDia}.`)
/*
  getDay() pega o dia em valor de número
  sendo: Domingo = 0, Segunda = 1..., Sábado = 6
*/
