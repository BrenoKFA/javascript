function fatorial(n) {
    let fat = 1
    for (let c = 1; c <= n; c++) {
        fat = c*fat
    }
    return fat
}

console.log(fatorial(1))