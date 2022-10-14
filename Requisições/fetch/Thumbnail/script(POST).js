function show() {   
    let reader = new FileReader()
    let file = document.getElementById("foto").files[0]

    reader.onloadend = () => { //após finalizar a leitura do arquivo, vai executar uma função
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 500
        document.getElementById('divImg').appendChild(img)
    }
    reader.readAsDataURL(file) // funciona de forma assincrona
}
