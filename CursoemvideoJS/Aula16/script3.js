function fatorial (n) { //função recursiva. Uma função que chama outra função ou ela mesma.
    if (n == 1){
        return 1
    } else {
        return n*fatorial(n-1)
    }
}
console.log(fatorial(5))