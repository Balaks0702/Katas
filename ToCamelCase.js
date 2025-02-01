function toCamelCase(str) {
    for (var i = 0; i < str.length; i++)
    {
        if (str[i] == "_" || "-")
        {
            str = str.replace(/\-[a-z]/g, match => match.toUpperCase());
            str = str.replace(/\_[a-z]/g, match => match.toUpperCase());
            str = str.replace("-", "") 
            str = str.replace("_", "");
        }
    }
    return str;
}

console.log(toCamelCase("string-not_Found"));

