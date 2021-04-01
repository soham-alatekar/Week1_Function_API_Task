var a = [1,2,3,4,5,6,7,8,9];
var b = [80,70,60,50,40,30,20,10];

var newArr = [...a,...b] ;
newArr.sort(function(a,b){
    return a-b; 
 });

 ((arr) => {

    arr.sort(function(a,b){
       return a-b; 
    });

    if(arr.length %2 == 0)
    {
        let x = arr.length/2;
        let y = x - 1;
        let med = (arr[y] + arr[x]) / 2;
         console.log("Median of two arrays: " +med);
    }
    else
    {
        let x = parseInt(arr.length/2);
        let med = arr[x];
        console.log("Median of two arrays: " +med);
    }   
    
})(newArr);


