




// console.log(`hello functions...`);

function greetMessage () {
    console.log(`hello`)
}

greetMessage();


function loveMessage (name) {
    console.log(`hello ${name}, i love you sweetheart.`)

}

loveMessage(`Yukta`);
loveMessage(`Neha`);
loveMessage(`Akshara`);
loveMessage(`Tanu`)

const array = [`Yukta`,`NEHA`,`Akshara`,`tanu`] 
for (let i = 0; i<array.length;i++) {
    loveMessage(array[i])
}

function multiply(a,b,c) {
    const result = a*b*c;
    console.log(result)
}
multiply(1,2,3)
multiply(2,3) // 2*3*undefined = NaN

function multiply(a,b,c) {
//     if (a&&b&&c) {
//     const result = a*b*c;
//     console.log(result)
// } else if(a&&b) {
//     const result = a;
//     console.log(result)
// } else {
//     console.log(a)
// }
// }

const result = a*b*c;
console.log(result)
}

multiply(1,2,3)
multiply(2,3) // 2*3*undefined = NaN
multiply(4)
multiply() // undefined*1*1

// return keyword
// function sum(a,b,c) {

// spread operator
const Mystudent = [1,2,3,4,,5,6,7]
console.log(Mystudent)
console.log(...Mystudent)

const myarr = [100,300,100,245,1,34]
console.log(Math.max(...myarr))

const myarr1 = [123,234,34,321,400]
console.log(Math.min(...myarr1))


function sum(a,b,...res) {
    let sum = a+b;
    for(let i = 0;i<res.length;i++) {
        sum = sum + res[i]


    }
    return sum

}

const res1 = sum(1,2,3,4,5,6,6,6,6,6,6)
console.log(res1)


// find the sum of array of numbers with 1<n<1000000000000;

const employee = [1,1,2,3,3,3,3,3,3,3,3,3]
const res2 = sum(...employee)
console.log(res2)


// Javascript sort ,find and for ech method

// sort given array 

const A = [`a`,`b`,`c`,`d`,`q`,`l`,`z`,`y`]
A.sort();
console.log(`after sort`,A)


const numb = [1,2,100,300,23,28,9]
//ascending
function compareFunc(a,b) {
    return a-b;
}
//descendeing 
function compareFunc(a,b) {
    return b-a;
}

numb.sort(compareFunc)
console.log(`after number sort`,numb) 


const mister = [3,6,4,7,100,900,7]

function check(a){
    return a%5 == 0 && a%10 ==0
}
const findvalue = mister.find(check)
console.log('findvalue',findvalue)

const arrr = [2,4,5,6,"hello",'love']
const c = arrr.includes('love')
console.log(c)

// function printElement(elem,index){
//     const res elem*elem
//     let result = res/100;
//     }
//     console.log(result)


// }
// arrayElem.forEach(printElement)
// for(let i =0;i<arrayElem.length;i++) {
//     console.log(arrayElem[i])
