let hora = new Date().getHours() /* ou --> let horario = new Date()
                                           let hora = horario.getHours()              */
if (hora >= 18){
    console.log('Boa noite!')
} else if (hora > 12) {
    console.log('Boa tarde!')
} else {
    console.log('Bom dia!')
}
console.log(`Agora são ${hora} horas.`)

