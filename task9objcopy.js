const val={a:1,b:2}
const val2={b:2,c:3}
const val3={c:5,d:6}
const val4={...val,...val2,...val3}
console.log(val4)
val4.e=val.a
console.log(val4)