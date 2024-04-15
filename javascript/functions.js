// functions - they are the blocks of code to perform the specific task,can be invoked whenever needed
 function name(){
    console.log("my name is dev");
 }
 name();

 function para(a){
    //parameter-> for input.
    // also known as arguments 
    console.log(a);
 }
 para("hii! this is a function with parameter");

 function add(a,b){
    sum=a+b;
    console.log("sum of a and b is :",sum); 
 }
 add(5,10);
  
 // NAN - STANDS FOR NOT AN NUMBER 
 // PARAMETERS DEFINED IN A FUNCTION ARE LOCAL VARIABLES FOR THAT FUNCTION AND 
 //CAN'T BE USED OUTSIDE THE BLOCK OF THAT FUNCTION.

// arrow functions - they are the compact way of writing the functions 
// const functionName=(param1,param2)=>{block of code}

let diff=(a,b)=>
{
    let difference = a-b;
    console.log("difference of a and b is : ",difference);
}
diff(10,5);

let hello=()=>{
console.log("hello world");
}
hello();
                            //   PRACTISE
// create a function using "function"  keyword that takes input as a string as a argument 
// and returns the number of vowels in the string.
// create an arrow function to perform the same task.

// function count_vowels() {
//     let str = prompt("Please enter the string");
//     if (str === null) {
//         console.log("Please enter a string. It can't be null.");
//         return; // Exit the function if the string is null
//     }

//     let count = 0; // Initialize count of vowels to 0

//     for (let i = 0; i < str.length; i++) {
//         // Check if the character at index i is a vowel
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             count++; // Increment the count if the character is a vowel
//         }
//     }

    // Display the count of vowels
//     console.log("The number of vowels in the string is: " + count);
//     alert("The number of vowels in the string is: " + count);
// }

// count_vowels();

// by using arrow function
// let count_vowel=()=>{
//     let str = prompt("Please enter the string");
//     if (str === null) {
//         console.log("Please enter a string. It can't be null.");
//         return; // Exit the function if the string is null
//     }

//     let count = 0; // Initialize count of vowels to 0

//     for (let i = 0; i < str.length; i++) {
//         // Check if the character at index i is a vowel
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             count++; // Increment the count if the character is a vowel
//         }
//     }

//     Display the count of vowels
//     console.log("The number of vowels in the string is: " + count);
//     alert("The number of vowels in the string is: " + count);
// }

// for- each loops- used in the arrays 
// imp- one function can also be used as an argument in another function. 
// also known as callback.
// syntax-arr.forEach(callbackFunction)
// callbackfunction-it is a function to execute for each element in the Array

// function abc(){
//     console.log("hello");
// }
// function myfunc(abc){
//     return abc;
// }

let arr=[1,2,3,4,5];
arr.forEach(function printval(val){   //value at each index
console.log(val);
});

arr.forEach((val,idx,arr)=>{
    console.log("hii",val,idx,arr);
})

//higher order function - for each functions -funct parameter and func return.
//which takes another function parameter and returns another func value.


//practise
//for the array print the square for each of value using for-each loop
let num=[1,2,3,4,5];
num.forEach((nums)=>console.log(nums*nums));
// another way of doing this
function calcsquare(num){
console.log(num*num);
}
num.forEach(calcsquare);


//some more array methods 
// 1) map method - creates a new array similar to for each loop

//2) filter- creates a new array of elements that gives true for a condition
let arr1=[1,2,3,4,5,6,7,8,9,10];
let even_arr=arr1.filter((val)=>{
return val%2==0;
})
console.log(even_arr);


//3) reduce method- performs the operations and reduces the array to a single value.
//it returns that single value.
// returing the larger value using reduce method
let arr2=[1,2,3,5,8,9,100];
let Output=arr2.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
}
)
console.log(Output);

// PRACTISE
let student_marks = [80, 85, 87, 88, 90, 99, 93, 97, 70, 77];
let count = 0;
let new_arr = student_marks.filter((val) => {
    if (val >= 90) {
        count++; // Increment count if the value is above 90
        return true; // Keep the value in the filtered array
    }
});

console.log("The students who scored above 90 marks are: ", new_arr);
console.log("Total number of students who scored above 90: ", count);

// practise
let employee_no=[100,110,200,550,540,340,890,44828,44];
let count_1=0;
let emp_new=employee_no.filter((val)=>
{
    if(val>=500){
        count++;
        return true;
    }
});

