for(let i=1;i<50;i++){
    console.log("dev");
}
// finding the sum of the numbers ;
let sum=0;
for (let n=0; n<=5;n++){
    let result=sum=sum+n;
    console.log("i =" + result);
}
// finding the reverse of the number
let num=[1,2,3,4,5,6,7,8,9,10];
for(let j=num.length-1;j>=0;j--){
    console.log("the reverse of the number is : ");
console.log(num[j]);
}

// for of loop - used to iterate strings 
let str="DEVBATRA";
let size=0;
for(let i of str){
    console.log("i :",i);
    
    size++;
    console.log("size of the string is : ",size);
}
// for of loop - this loop is used in iterating the objects.
 let student={
    name: "dev",
    age: 19,
    city: "ambala",
    branch: "bca"
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}
// printing the even numbers form 0 to 100;

for(let number=0;number<100;number++){
    if(number%2==0){
        console.log("the even numbers are : ",number);
    }
}