function loadUsers (){
    fetch('https://jsonplaceholder.typicode.com/users')//método 'get'
    .then(function(result){ // 'result' é o parametro que recebe os dados carregados no URL especificado
        return result.json() //retorna uma promise, portanto segue-se outro 'then' para e retorno efetivo da mesma
    }).then(function(users){ 
        document.getElementById('users').innerText = ''       
            for(let i=0; i <= 9; i++){
                document.getElementById('users').innerText += `Usuário ${i+1}:
                id: ${users[i].id}
                Nome: ${users[i].name}
                Username: ${users[i].username}
                email: ${users[i].email}

                `  
            }            
            console.log(JSON.stringify(users))
    })
    .catch(function(){
        window.alert('ERROR - Load user error!')
    })
    .catch(function(){
        window.alert('ERROR - JSON convertion error!')
    })
}