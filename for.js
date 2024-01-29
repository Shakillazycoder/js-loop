//  for ( variable   ; condition  ; variable change  ){
//  statement
// }
// 

for(let num =1; num <10; num++){
    if(num % 2 === 0){
        console.log('even;', num);
    }
}
for(let num = 1; num <10 ; num++){
    if(num % 2 !==0){
        console.log('odd:', num);
    }
}
for (let num = 1; num <= 10; num++){
    console.log('I will invest at least 6 hrs every single day for next 60 days!', num);
}

let sum = 0;

for(let num = 81; num <=131; num++){
    if( num % 2 !==0){
        sum = sum + num;
    }
    
}
console.log('sum of all the odd numbers from 81 to 131:', sum);

let sum = 0;

for(let num = 206; num <=311; num++){
    if( num % 2 ===0){
        sum = sum + num;
    }
    
}
console.log('sum of all the even numbers from 206 to 311:', sum);