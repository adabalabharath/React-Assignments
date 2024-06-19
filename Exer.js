for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 15 == 0) {
    console.log(i);
  }
}

let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

let eve = arr.filter((x) => x % 2 == 0).reduce((a, b) => a + b, 0);
console.log(eve);

let double = [];
let mul = 1;

while (mul < 2048) {
  double.push(mul);
  mul = mul * 2;
}
console.log(double);

// for (let i = 1; i <= 50; i++) {
//     if (i <= 10) {
//         console.log("A");
//     } else if (i > 10 && i <= 20) {
//         console.log("B");
//     } else if (i > 20 && i <= 30) {
//         console.log("C");
//     } else if (i > 30 && i <= 40) {
//         console.log("D");
//     } else if (i > 40 && i <= 50) {
//         console.log("E");
//     }
// }

const arr1 = [1, 2, 3];

//tostring
console.log("string-----", arr1.toString());

//
let joined = arr1.join("-");
console.log("join------", typeof joined);

const array = [1, 2, 3, 4, 5, 6];

//slice
console.log("slice-----", array.slice(0, 3));

//map
array.map((x) => x * 3);

//index of an element
console.log("index------", array.indexOf(3));

//concat
let arr3 = arr1.concat(array);
console.log(arr3);

//sorting arrays
console.log(array.sort((a, b) => b - a));

//foreach
array.forEach((x) => console.log(x));

//removing an element

array.splice(1, 1);

console.log(array);

const s = [1, 2, 6, 7];
let i = 0;
let add = 0;
while (i < s.length) {
  add += s[i];
  i++;
}
console.log(add);

//filter
let even = array.filter((x) => x % 2 == 0);
console.log(even);

//includes
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("orange"));

//add all even
let q = [1, 2, 3, 4, 5];
let addEven = q.filter((x) => x % 2 == 0).reduce((a, b) => a + b, 0);
console.log(addEven);

//Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
// let uni = array.concat(q);
// let com = [];
// const unique = () => {
//   for (let i = 0; i < uni.length; i++) {
//     let isuni = true;
//     for (let j = 0; j < uni.length; j++) {
//       console.log(i, j);
//       if (uni[i] === uni[j]) {
//         isuni = false;
//         break;
//       }
//     }
//     if (isuni) {
//       com.push(uni[i]);
//     }
//   }

//   return com;
// };
// console.log(unique(uni));


//Given an array of strings, write a function that returns the longest string in the array.
const str=['apple','banana','orange']

const totStr= str.map(x=>x.length).reduce((a,b)=>a+b,0)

console.log('--------',totStr)
const longString=()=>{
    let a=str.sort((a,b)=>b.length-a.length)
    console.log(a[0])
}

longString()

let int=[]
for(let i=0;i<array.length;i++){
    for(let j=0;j<q.length;j++){
        if(array[i]===q[j]){
          int.push(array[i])
          break
        }
    }
}
console.log(int)

let avg=int.reduce((a,b)=>a+b/int.length,0)
console.log(avg)


let strings = ["apple", "banana", "cherry", "date"];

console.log(sortStringsByLength(strings)); // Output: ["date", "apple", "cherry", "banana"]

console.log(strings.filter(x=>x.includes('a')))

function sortStringsByLength(str){
   let sort= str.sort((a,b)=>a.length-b.length);
   return sort
}

//Write a function that takes an array of numbers and returns the second highest number.
console.log(q)
console.log(secHigh(q))
function secHigh(q){
 return q.sort((a,b)=>b-a)[1]
}

const dup=[1, 2, 3, 4, 3, 2, 5, 6, 1]
let uniq=[]
for(let i=0;i<dup.length;i++){
    
        if(!uniq.includes(dup[i])){
          uniq.push(dup[i])
        
        }
    
}
console.log(uniq)

// Example usage
let arrs = ['hello', 'world'];
console.log(arrs.join('').split(''))
 // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

const person={
  name:'a',
  lname:'b',
  email:'@gmail.com',
  phn:'9876543211'
}

const full=(person)=>{
    return Object.keys(person).sort()
}
console.log(full(person))

function functionName(...restParameter) {
    console.log(restParameter)
    return restParameter.splice(0,1)
}
let p=[1,2,3,4]
console.log(functionName(p))


const rev=(Str)=>{
   return Str.split('').reverse().join('')
}

console.log(rev('guy'))

const fn=(arr)=>{
    const [,...rest]=arr
    return rest
}
console.log(fn(p))
