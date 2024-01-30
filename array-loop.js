// // Reverse arrray

// const array =['Apple', 'banana', 'orange']

// for(let i = array.length -1; i >=0; i--){
//     console.log(array[i]);
// }

// // Sum of the array elements


// let nums = [10, 20, 30, 40, 50];
// let sum = 0;

// for ( let i = 0; i < nums.length; i++){
//     let currentNumber = nums[i];
//     sum = sum + currentNumber;
// }
// console.log(sum);

// swap array elements
//  let nums = [10, 20, 30, 40, 50]

//  let temp = nums[4];
//  nums[4] = nums [0];
//  nums[0] = temp;

//  console.log(nums)

// //  find array elements
// const fruits =['Apple', 'banana', 'orange']

// let target = 'banana';
// let foundedIndex = -1;

// for(let i = 0; i <fruits.length; i++){
//     const currentFruit = fruits[i];
//     if ( currentFruit == target){
//        foundedIndex = i;
//     }
// }

// if (foundedIndex > -1){
//     console.log(foundedIndex, "founded")
// }

// // find max/min number
//  let nums = [ 25, 6, 36, 58, 283, 47, 5]

//  let maxNum = nums[0];
//  let minNum = nums[0];

//  for(let i = 0; i <nums.length; i++){
//     let currentNumber = nums [i];
//     if (maxNum > currentNumber){
//         maxNum = currentNumber;
//     }
//     if ( minNum < currentNumber){
//         minNum = currentNumber;
//     }
//  }

//  console.log(minNum, maxNum);

// filter an array
const purchaseHistory = [100, 364, 845, 58, 300, 245]
// using loop
// const filteredPurchaseHistory = [];

// for (let i =0; i < purchaseHistory.length; i++){
//     const currentElements = purchaseHistory[i];
//     if (currentElements <= 500){
//         filteredPurchaseHistory.push(currentElements);
//     }
// }
// console.log(filteredPurchaseHistory);

// using filter ()
// const filteredPurchaseHistory = purchaseHistory.filter(function(currentElements){
//     return currentElements <=500;
// })

// console.log(filteredPurchaseHistory);

// discount filter array
// calculate discount
// let discountPrice = [];
// for ( let i =0; i < purchaseHistory.length; i++){
//     const currentElements = purchaseHistory[i];
//     if (currentElements >= 500){
//         const calculatedDiscount = currentElements - currentElements * 10/100;
//         discountPrice.push(calculatedDiscount)
//     }
// }

// console.log (discountPrice)

// // calculate discount using map
// let discountPrice = [];
// const discountPriceUsingMap = purchaseHistory.map(function(currentElements){
//  if (currentElements > 500){
//     const calculatedDiscount = currentElements - currentElements * 10/100
//     return calculatedDiscount
//  } else{
//     return currentElements
//  }
// })

// console.log (discountPriceUsingMap)


// frequency array

// const frequency = [0,0,0,0,0,0,0,0,0,0]
//  let sample = '9348435428745872462771911874242663'

//  for( let i = 0; i <sample.length; i++){
//     const currentDigit = sample [i];
//     // frequency[currentDigit] = frequency[currentDigit] +1;
//     frequency[currentDigit]++;

//  }
//  console.log(frequency);

// // findout maximum occurrence

// let maxOccurrence = frequency [0];
// let minxOccurrence = frequency [0];
// let maxOccurrenceIndex = 0;
// let minxOccurrenceIndex = 0;
// for( let i =0; i <frequency.length; i++){
//     const currentOccurrence = frequency [i];
//     if ( currentOccurrence > maxOccurrence){
//         maxOccurrence = currentOccurrence;
//         maxOccurrenceIndex = i;

//     }
//     if ( currentOccurrence < minxOccurrence){
//         minxOccurrence = currentOccurrence;
//         minxOccurrenceIndex = i;
//     }
// }

// console.log(maxOccurrence, maxOccurrenceIndex, minxOccurrence, minxOccurrenceIndex)

// serial change
const serial = [45, 64, 77, 38, 94, 29, 84]
let target = 94;
while(true){
    const firstElements = serial [0];
    if(firstElements == target){
        break;
    }
    const extractedElements = serial.shift();
    serial.push(extractedElements)
}

console.log(serial)