async function upload() {   
    let file = document.getElementById("foto").files[0] /*file é um objeto; se não especificado 'multiple' para varios arquivos
                                             sempre o escolhido será o primeiro elemento do objeto*/
    let body = new FormData()                                             
    body.append('title', 'Título Teste')
    body.append('Arquivo', file)

    let req = await fetch('https://www.sitequenãoexiste.com.br/upload', 
    {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
