let arr = [3, 10, 0, 56, 56, null, 33, 'gg'];
let Chetnoe = 0;
let Ne_Chetnoe = 0;
let Nol = 0;
for (let i = 0 ; i < arr.length ; i = i + 1){
    if (typeof arr[i] == "number"){
        if (arr[i] === 0){
            Nol = Nol + 1
        } else if (arr[i] % 2 === 0){
            Chetnoe = Chetnoe + 1;
        } else{
            Ne_Chetnoe = Ne_Chetnoe + 1;
        }
    }
};
console.log('Chetnoe '+ Chetnoe +' Ne_Chetnoe '+ Ne_Chetnoe +' Nol '+ Nol);