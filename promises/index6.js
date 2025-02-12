function outputName(){
    const name = document.getElementById('nameInput').value;
    const outputPlaceholder = document.getElementById("name")

    outputPlaceholder.innerHTML = name + " loki ka beta tha loki ka beta hai or loki ka beta rahega";
}

// // creating promises 
// console.log('here we will just understand only sintax')

// // resolve and reject are the functions which are passed as arguments to the callback function
// function promiseCallback1(resolved,rejected){
    
// }
// const promise = new Promise(promiseCallback1)
// console.log('pending',promise)  


// //resolved

// function promiseCallback(resolved,rejected){
//     resolved()
    
// }
// const promise1 = new Promise(promiseCallback) 
// console.log('fulfilled',promise1) 

// // rejected

// function promiseCallback2(resolved,rejected){
//     rejected()
    
// }
// const promise2 = new Promise(promiseCallback2);
// console.log('rejected promise',promise2)

// create  a promise 

const promise3 = new Promise((resolved,reject)=>{
    const random = Math.ceil(Math.random()*10);
    if(random%2===0){
        resolved('even')
    } else {
        reject('odd')       
    }    

})

console.log('promise3',promise3)

function success(data){ 
    console.log('success',data)
}
function error(data){
    console.log('error',data)
}
promise3.then(success).catch(error)

