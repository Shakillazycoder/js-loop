// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//   continue;
//  }
//  console.log(array[i]);
// }

// const array =['Apple', 'banana', 'orange']

// for(let i = array.length -1; i >=0; i--){
//     console.log(array[i]);
// }

let nums = [10, 20, 30, 40, 50];
let sum = 0;

for ( let i = 0; i < nums.length; i++){
    let currentNumber = nums[i];
    sum = sum + currentNumber;
}
console.log(sum);