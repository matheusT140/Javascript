async function loadUsers() {   
    let req = await fetch('https://jsonplaceholder.typicode.com/users')// um await para cada promise: fetch e json()
    let users = await req.json()
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
}
