((arr) => {
    let pals = [];
   for(let i=0; i<arr.length; i++){
       if(Palindrome(arr[i]) == true){
           pals.push(arr[i]);
       }
   }
   console.log("Number palindromes: " +pals.join(" "));
  
})([101,151,606,507]);

function Palindrome(num)
	{
		var rem, temp, final = 0;

		temp = num;
		while(num>0)
		{
			rem = num%10;
			num = parseInt(num/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			return true;
		}
		else
		{
			return false;
		}
	}



((arr) => {
    let pals = [];
   for(let i=0; i<arr.length; i++){
       if(isPalindrome(arr[i])){
           pals.push(arr[i]);
       }
   }
   console.log("String palindromes: " +pals.join(" "));
  
})(["REFER","PREFER","ABCBD","AABBAA"]);

function isPalindrome(str){
   let l = 0;
   let r = str.length-1;
   while(l<=r){
       if(str[l] !== str[r]){
           return false;
       }else{
           l++;
           r--;
       }
   }
   return true;
}