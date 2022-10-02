let arr = [3, 10, 24, 56, 56, 'gg', 33, 'gg'];
let res = true;
for (let i = 1 ; i < arr.length ; i = i+1){
    if (arr[0] == arr[i]){
        //console.log(true);
    } else{
        res = false;
        break;
    }
};
console.log(res);