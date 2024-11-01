

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.



 */

let dum = 0;
for(let num = 91 ; num <= 129 ; num = num + 2){
    if(num%2 === 1){
        dum += num
        
    }
    
}
console.log(dum);



/***


Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
let sum = 0;
for(let num = 51 ; num <= 85 ; num++){
    if(num%2 === 0){
        sum += num
        
    }
    
}
console.log(sum);
