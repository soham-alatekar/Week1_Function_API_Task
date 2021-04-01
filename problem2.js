var titleCaps = ((str) => {
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str;
   })(["my", "name", "is", "soham", "alatekar"]);
   console.log(titleCaps.join(" "));