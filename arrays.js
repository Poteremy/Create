

let array = Array.of(12,9,3);

function add (a,b,c) {
    return a+b+c;
}

let added = add(...array)

console.log(added)