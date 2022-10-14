function parimp (n){
    if (n%2==0){
        return 'O número é par.'
    } else if (n==0) {
        return 'O número é 0.'
    } else {
        return 'O número é impar.'
    }
}
console.log(parimp(10))