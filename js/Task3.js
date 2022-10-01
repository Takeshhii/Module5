let x = "Hello";
let res = "";

for (let i = x.length -1; i >= 0; i = i - 1) {
    //console.log(i);
    //console.log(x[i]);
    res = res + x[i]
}
console.log(res);