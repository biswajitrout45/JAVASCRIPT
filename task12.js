const v=[]
const check=(a)=>{
    return v.push(a.match(/[aeiou]/gi)||0)
    }
check("Biswa")
console.log(v);