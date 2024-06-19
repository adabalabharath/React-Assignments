//closures
let ba='hi'
function a(A){
    let x=9
    return function b(){
    console.log(x,ba,A)
    }
   
}



a('hi')()



//HOF

let rad=[3,4,1,2]

const area=(rad)=>{
    return Math.PI*rad*rad
}
const calc=(rad,form)=>{
    let arr=[]
    rad.forEach(x=>arr.push(Math.PI*x*x))
    return arr

}

console.log(calc(rad,area))

// Display a prompt box and capture user input
let userInput = prompt("Please enter your name:", "Default Name");

// Check if the user entered something or canceled the prompt
if (userInput !== null) {
    // User entered a value and clicked "OK"
    console.log("User input:", userInput);
} else {
    // User clicked "Cancel"
    console.log("User canceled the prompt.");
}

let st="123"
console.log(parseInt(st))

