var a = [1,2,3,4,5,6,7,8,9];
var ans = [];

(function (){
    for(var i = 0 ; i<a.length ; i++)
    {
        if(a[i] % 2 == 1)
        {
            ans.push(a[i]);
        }
    }
}(a));

console.log(ans.join(" "));