// data type number
// in js for numeric value we have only one data type


//2.5, 3,-5,12334   numbers

let age = 19;
console.log(age)


console.log(typeof age)

// method of numbers

let percentage = 2345.6666666666;
console.log('value.fixed()' , percentage.toFixed(2))


//math.max

// let value = (1,2,3,4,10);
console.log(Math.max(1,2,3,4,10))

console.log(Math.ceil(4.3))
console.log(Math.ceil(4.7))

//math.random 
console.log(Math.random())


// using Math.random gives value btw 2 to 8

Math.random()*6 +2


// string datatype 

let lastName = "Rajput"
let firstName = 'lokendra singh '
let city = `Jaipur`


// string template

let username = 'lokendra singh'
let food = 'coffee'
let message = `Hi ${username} , how are you ding today is best for ${food}.`
console.log(`string template` , message)

// note : using string template you can write multiline string, you cannot do with single or double quotes.

// let notification = `

// `

// string method 

// accessing character 

let country = `India`;
console.log(country[0])

// replace method , tostring, trim , includes 

const employMsg = `Hey where are you ?`;
console.log(employMsg)
const result = employMsg.replace(`where`,`how`)
console.log(result)

// includes

const str = ` Hey relax,Guys,it is just starting, we will learn more in javascript`
const substr = `we will learn more in javascript`

console.log(str.includes(substr))

// booleans

const check = true;
const uncheck = false 

// In js null,undefined,NaN,'',0 consider as a falsy value


// NaN => not a number

console.log(2*`hello`)

// undefined
let college;
console.log(college)
console.log(typeof college)

let a = 20;
const d = a++ +2;
const dd= ++a +2;
console.log(`d`,d)
console.log(`dd`,dd)

console.log(a++)
console.log(++a)

// comaparison operator 
// == only check value
// === check the value and type
let tt =  20;
let pp= `20`;
console.log(`tt==pp`,tt==pp)
console.log(`tt===pp`,tt===pp)