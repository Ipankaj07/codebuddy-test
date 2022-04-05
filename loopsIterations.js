// level {1/2/3}

//level - 2

function fibb(n) {
    if (n <= 1) {
        return n;
    }
    return fibb(n - 1) + fibb(n - 2);
}

function sumOfFibb(n) {
    return fibb(n + 2) - 1;
}

console.log(sumOfFibb(6))
