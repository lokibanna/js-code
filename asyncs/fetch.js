// https://jsonplaceholder.typicode.com/posts


// browser api

// const response = fetch('https://jsonplaceholder.typicode.com/posts') 
// console.log('Response',response)


// function success (res){
//     console.log('api response',res)
//     res.json().then((result)=>{
//         console.log(result)
//     })
// }
// function error(){

// }

// response.then(success).catch(error)

//returning array of email from the given api


const response = fetch('https://jsonplaceholder.typicode.com/users')
console.log('Response',response)
function success(res){
    console.log('Api Response',res)
    res.json().then((result)=>{
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            console.log(result[i].email);
        }
    })
}
function error(err){
    console.log('Error',err)
}
response.then(success).catch(error)



