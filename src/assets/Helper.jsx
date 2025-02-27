 function RandomNumber(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1); // Generates numbers between 1-10
}

 function Sum(arr) {
    return arr.reduce((sum, curr) => sum + curr, 0);
}
export {RandomNumber,Sum}
