let n = [3, 2, 4, 7, 10, 11, 6, 9]
/* for (let i = 0; i < n.length; i++) { 
    console.log(`O elemento ${i+1} de índice ${i} possui o conteúdo ${n[i]}.`)
}*/
for (let i in n){ // Nessa forma o i tem valor de string
    console.log(`O elemento ${parseInt(i)+1} de índice ${i} possui o conteúdo ${n[i]}.`)
}