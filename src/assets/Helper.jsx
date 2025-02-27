function RandomNumber(n){
    let arr = new Array(n);
    for (let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*100);
    }
    return arr;
}
function Sum(arr){
     return arr.reduce((sum,curr) => sum+curr ,0);
}
// Example usage
const numbers = RandomNumber(5);
console.log(numbers); // [random numbers]
console.log(Sum(numbers)); // sum of the random numbers

export { RandomNumber, Sum };

