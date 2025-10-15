const abc=
{
    name: "Biswa",
    Regd: 125,
    age:20,
    sem:5
}
console.log(abc)

 abc.Regd=230

 console.log(abc)

const bcd={...abc,sec:"a"}
console.log(bcd)

const{name,Regd,sem,sec}=bcd;
console.log(name,Regd,sem,sec);