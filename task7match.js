function abc(a){
    return a.match(/[aeiou]/gi)?.length||0  ;   
    
}
console.log(abc("apple"))