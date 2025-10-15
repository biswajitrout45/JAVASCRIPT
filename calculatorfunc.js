function abc(a,b,c)
{
    switch(c)
    {
        case  "+":
        {
            console.log(a+b)
            break
        }
        case  "-":
        {
            console.log(a-b)
            break
        }
        case  "/":
        {
            console.log(a/b)
            break
        }
        case  "*":
        {
            console.log(a*b)
            break
        }
        case  "**":
        {
            console.log(a**b)
            break
        }
        case "%":
        {
            console.log(a%b)
            break
        }
        default:{
            break
        }
    }
}
abc(10,2,"*")
abc(10,2,"+")
abc(10,2,"-")
abc(10,2,"/")
abc(10,2,"**")
abc(10,2,"%")