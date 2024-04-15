// strings 
let str="dev";
console.log(str[1]);
console.log(str.length); 

// template literals are the type of string write like this - 'hii my name is dev'
//used in to ${}// ${expression} also known as string interpolation to get value like this 
// for example 
let a ={
    name:"dev",
    age:19
};
console.log("name is : ",a.name,"age is : ",a.age);
// another way of writing this as -template literals 
console.log('name is ${a.name} and age is ${a.age}');

console.log("dev\nbatra");
console.log("dev\tbatra");

// string functions 
let b="my name is dev batra";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

let c="       my name is dev       ";
console.log(c.trim());

// slicing 
let d ="123456789";
console.log(d.slice(1,8));
console.log(d.slice(1));
// concatenation

let str1="dev";
let str2="batra";
console.log(str1.concat(str2));
// another method of concatenation
let result= str1+str2;
console.log(result); 

// replacing in string 
let str3="hello! my name is dev batra and i am ninteen years old";
console.log("original string",str3);
console.log("after replacing",str3.replace("ninteen","eighteen"));
// there is also one more method to replace all the values called - replaceAll("old value","new value");

// finding the index of the string 
string="my name is dev";
console.log(string.charAt(5));

// practise question for string
let name = prompt("Please enter your full name for verification");
console.log("Please avoid whitespaces between name");
alert("Please avoid whitespaces between name")
// Remove whitespaces from the name
let trimmedName = name.replace(/\s/g, '');

// Calculate the length of the trimmed name
let nameLength = trimmedName.length;

// Generate the ID by concatenating '@+' with the name and its length
let id_generated = `@${trimmedName}${nameLength}`;

// Output success message
console.log("Your account has been created successfully");
console.log("Your ID is: " + id_generated);

// Show alerts
alert("Your account has been created successfully");
alert("Your ID is: " + id_generated);
