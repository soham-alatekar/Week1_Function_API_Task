var array = [1,2,3,4,5,6,7,8,9,10,11,12]

var primenums = (() => {
    let primenums = [];
    for(let i=0; i<array.length ; i++)
    {
        if(isPrime(array[i]))
        {
            primenums.push(array[i]);
        }
    }
    return primenums;
})(array);

console.log("Prime numbers in given array are " +primenums);



function isPrime(a){
    let flag = true;
    if(a<2){
        return false;
    }
    else if(a === 2){
        return true;
    }

    for(let i = 2 ; i <= a/2 ; i++)
    {
        if(a%i === 0)
        {
            flag = false;
            break;
        }
    }
    return flag;
}