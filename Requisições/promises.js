function pegarTemp () {
    return new Promise (function(resolve, reject){
        console.log("Pegando temperatura...")  
        
        setTimeout(function(){// ao executar a promise.then a função será levada ao 'resolve' mas entrará antes, automaticamente, no Timeout
            resolve('40º na sombra')
        },2000)        
    })
}
console.log("Código antes")
let temp = pegarTemp()
console.log("Código durante")
temp.then(function(res){
    console.log("Temperatura: "+res)
})
temp.catch(function(error){
    console.log("ERRO!")
})
console.log("Código depois")