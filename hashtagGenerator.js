function hashGenerator(string)
{
    var hash = "#";
    string = string.trim(); //eleminate whitespaces
    const arr = string.split(" "); //create new array of all words in the string
    for(var i=0; i<arr.length; i++)
    {
        //make each word = capital first letter + rest of the word
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    string = arr.join(""); // make the string by joining capitalized words with no spaces

    hash+=string; //hashTag

    //restrictions: cannot be empty and has to be under 140 chars
    if (hash.length==1 || hash.length>140)
    {
        return false;
    }

    return hash;
}

console.log(hashGenerator("I have learned something"));