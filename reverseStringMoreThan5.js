function reverseStringMoreThan5(string = "StillGreater"){
    var strArr = string.split(' ').map( w => { if(w.length>5) return w.split('').reverse().join(''); else return w; }).join(' ');
    return strArr;
}

console.log(reverseStringMoreThan5());   