
let Name = "Calculator";

function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}


function mul(a,b){
    const mul = a*b;
    return mul;
}

function div(a,b){
    var div = a/b;
    div = div.toFixed(2);//for decimal place value ke liye used hota hai toFixed(2)
    return div;
}


export {Name,add,sub,mul,div};