var a = [1,2,3,4,5,6,7,8,9];

var sum = ((arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
})(a);

console.log(sum);