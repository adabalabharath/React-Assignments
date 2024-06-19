// let prom=createOrder(cart)
// prom.then(x)

// function createOrder(cart){
//   let pr=new Promise((resolve, reject) => {
//     if(!validite(cart)){
//       let err= new Error("something is not crct")
//       reject(err)
//     }
//     let id='1234'
//     if(id){
//       resolve(id)
//     }
//   })

//   return pr
// }

// function validite(cart){
//   return true
// }

// const promise=new Promise((resolve, reject) => {
// setTimeout(()=>{resolve('clicked')},5000)

  
// })

// console.log(promise)

// promise.then(x=>console.log(x))


//checking microstack

// const promise=()=>{
//   let p=new Promise((res,rej)=>{
//    setTimeout(()=> res("clicked"),10000)
//   })

//   return p;
// }
// const call=()=>{
//    setTimeout(()=> console.log("timeout clicked"),10001)
// }

// const back=(call)=>{
//   call()
// }
// function getData(){

// promise().then(res=>console.log(res))

// }

// getData()





// let promise=new Promise((res,rej)=>{
//   setTimeout(() => {
//     res("p1")
//   }, 10000);
// })

// let promise2=new Promise((res,rej)=>{
//   setTimeout(() => {
//     res("prom2")
//   }, 20000);
// })

// async function handle(){
//   console.log("hello")

//   let val=await promise;
//   console.log("Namaste");
//   console.log(val)

//   let val2=await promise2;
//   console.log('js')
//   console.log(val2)
// }

// handle()


let momHappy;

let prom=new Promise((res,rej)=>{
   if(momHappy){
    res('iphone')
   }else{
    rej("check ur marks")
   }
})
console.log(prom)



async function myfn(){
 try{
    
 }catch(err){
   console.log(err)
 }
}
myfn()












