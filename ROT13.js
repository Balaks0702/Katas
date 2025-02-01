function rot13(string){
    var input = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var output = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    var result = "";
    
    for( var j = 0; j < string.length; j++ )
    {
        if(input.includes(string[j])){
            var index = input.indexOf(string[j]);
            result += output[index];
        } else {
            result += string[j];
        }
        
    }
    return result;
}

console.log(rot13("This is my first ROT13 excercise!"));