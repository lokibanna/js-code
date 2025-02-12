// const isKycDone = tru2;
// if(isKycDone){
//     console.log(`this is product ome page..`)

// }
// else {
//     console.log(`this is kyc page`)


// }

// const userName = 'loki'

// let greet = `Good morning ${userName},sir`
// if (userName) {
//     const greeet = `Good morning ${userName},sir`
// }


let percentage = 80;

if (percentage>=90){
    console.log(`A+`) }
else if (percentage<90 && percentage>=80){
    console.log(`A`)
}

else if (percentage<80 && percentage>=70){
    console.log(`B`)
}

else if (percentage<60 && percentage>=50){
    console.log(`C`)

}
else {
    console.log(`fail`)

}
// ternary operator

// const message = percentage > 80 ? `hurrah !! You are pass `: `sorry try next time`

// let tempmessage = percentage < 90 && percentage >80 && isKeyDone percentage%2 == 0 ? `hurrah !! You are pass `: `sorry try next time`

for (let i=0;i<100;i++){
    if(i%2==0){
        console.log(`hey,im even`)
    }
}

// for (const i=0;i<100;i++){
//     if(i%2==0){
//         console.log(`hey,im even`)
//         break;
//     }
// }

// // array 
// const array = [1,2,3,4]
// console.log(array[6])//undefined
// console.log(array)

// //objects
// const employee = {
//     name :'abc'
//     company :'xyz'
//     mobile : '1234'
// }
// console.log(employee.mobile)



let month = 1;
switch(month){
    case 1:{
        console.log(`cold season`)

    }

case 2: {

    console.log(`cold season`)
        
}
case 3:{
    console.log(`cold season 2`)
}
case 4:{
    console.log(`holi season`)
}
case 5:{
    console.log(`mid season`)
}
case 6:{
    console.log(`end season`)
}
case 7:{
    console.log(`summer season`)
}
case 8:{
    console.log(`juniors season`)
}
case 9:{
    console.log(`party season`)
}
case 10:{
    console.log(`midsem season`)
}
case 11:{
    console.log(`diwali season`)
}
case 12:{
    console.log(`endsem season`)
}
default : {

} 
}
