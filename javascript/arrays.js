// arrays are the collection of similar types or homogeneous elements saved at the contiguous memory locations 
let data=[1,2,3,4,5];
console.log(data);
// we can access any element through its index value also.
console.log(data[2]);
console.log(data.length);
// array is special type of object type in js.
// strings are immutable [ can't be changable ]
// arrys are mutable [ can be changable ]
let heroes=["iron man","shati man","bat man","thor"];
for(i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
for(i=heroes.length-1;i>0;i--){
    console.log("array in reversed order is ",heroes[i]);
}
// for-of-loops - used in arrays 
let cities=["delhi","haryana","punjab","gurgaon","maharashtra"];
for(let city of cities){
    console.log(city.toUpperCase());
}

// practise question
// marks of student =[88,89,44,55,67]; find avg , sum of marks and highest mark
let marks=[88,89,44,55,67];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];

}

console.log("the sum  of student marks is : ",sum);
let average=sum/5;
console.log("the average of student marks is : ",average);

// array methods
//push() add item to end
//pop() remove element from end
// toString() converts array to strings
let city=["delhi","haryana","punjab","gurgaon","maharashtra"];
console.log(city)
console.log(city.push("uttar pradesh"));
console.log(city) 
// pop 
let citi=["delhi","haryana","punjab","gurgaon","maharashtra"];
console.log(citi);
console.log(citi.pop());
console.log(citi)

//toStrings()-converts arrays to strings.
let mobile=["samsung","vivo","oppo","apple","redmi","blackberry"];
console.log("before conversion",mobile);
console.log("after conversion",mobile.toString());

// concatinaton
let mobiles=["samsung","vivo","oppo","apple","redmi"];
 let citis=["delhi","haryana","punjab","gurgaon","maharashtra"];
 console .log("after concatenation",mobiles.concat(citis));

 // unshift method- also works like push [add to start]
 // shift method - [similar to pop method] delete from start and end 

 let mobili=["samsung","vivo","oppo","apple","redmi"];
 console.log("after applying shift",mobili.shift());
console.log(mobili);

// unshift method
let mobilis=["samsung","vivo","oppo","apple","redmi"];
 console.log("after applying unshift",mobilis.unshift("blackberry"));
console.log(mobilis);

// slicing-returns a piece of an array 
let marvel_heroes=["iron man","shati man","bat man","thor"];
console.log("before slice",marvel_heroes);
console.log("after slice",marvel_heroes.slice(1,2));
console.log("after slice",marvel_heroes.slice(0));

// splice - VERY USEFULL IN ARRAYS CHANGES ORIGINAL ARRAY (ADD,REMOVE,REPLACE);
//syntax-splice(starting index,delete count, replacing)
let marvel_hero=["iron man","shati man","bat man","thor"];
console.log("before splice",marvel_hero);
console.log("after splice",marvel_hero.splice(1,1,"kallu-kalli"));
console.log(marvel_hero);

// spicing in more deep level

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.splice(2,2,100,101));
console.log(arr);
// adding element through splice

console.log(arr.splice(2,0,1000));
console.log(arr);
// deleting element through splice

console.log(arr.splice(2,1));
console.log(arr);

// replacing element through splice

console.log(arr.splice(2,1,10000));
console.log(arr);

//practise question 2
// array to store companies =["bloomberg","microsoft","uber","google","IBM","netflix"]
// a) remove the first company form Array
// b)remove ola and add ola from the place
// c) add amazon at end

let company=["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log("before the operation",company);
console.log("after the operation",company.shift(0));
// b)
console.log("before the operation",company);
console.log("after the operation",company.splice(1,1,"OLA"));
console.log("after the operation",company);
// c)
console.log("before the operation",company);
console.log("after the operation",company.push("amazon"));
console.log("after the operation",company);
