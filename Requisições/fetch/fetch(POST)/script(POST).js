async function post_loadUsers() {   
    let req = await fetch('https://jsonplaceholder.typicode.com/users'
    , {
        method: 'POST',
        body: JSON.stringify({
            id: 0,
            name: 'testName',
            username: 'testUser',
            email: 'test@test.com'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    let users = await req.json()            
    console.log(users)
}
