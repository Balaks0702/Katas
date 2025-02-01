function duplicatEnconder(A) 
{
    var decode = []  , count;
    A = A.toLowerCase(); 
    for(var i=0; i<A.length; i++)
    {
        count = 0;
        for(var j=0; j<A.length; j++)
        {
            if(A[i] == A[j]) 
            {
                count++;
            }
        }
    
        if(count==1)
        {
            decode+="(";
        }
        else {
            decode+=")";
        }
    }
    console.log(decode);
}

duplicatEnconder("Success");