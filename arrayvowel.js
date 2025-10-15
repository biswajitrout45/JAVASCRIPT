const v=["Biswa","Rudra","Saurav","Dibya","Abhisek"]
for(i=0;i<v.length;i++)
{
    if((v[i].match(/[aeiou]/gii)>=3))
    {
        v.pop()
    }
}
console.log(v);