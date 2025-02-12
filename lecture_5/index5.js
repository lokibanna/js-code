newarr = [1,2,3,4,5,6,7,8,9]
function printoddoreven(elem,index){
    if(elem % 2 === 0){
        console.log(`The element ${elem} at index ${index} is even`);
    }
    else{
        console.log(`The element ${elem} at index ${index} is odd`);
    }
}
newarr.forEach(printoddoreven) // it print all the elements in the array and also tell us that the element is odd or even

const array1 = [3,4,5,6,7]
function square(elem,index){
    return elem*elem
}
const result1 = array1.map(square)
console.log(result1)

/// given 
const array34 = [3,4,5,6,7];
function sum(acc,elem,index){
    return acc+elem;

}
const res33 = array34.reduce(sum,0)
console.log(res33)

// paas by reference
function modifyObject(obj){
    obj.name = "Vishal"}

    const details = {name : 'Rajaji'}
    modifyObject(details);
    console.log(`after pass by reference`,details)


//creating a copy of non primitive data type

const employees = {
    id:1,
    employee_id: 23456

}
const copyOfEmployee = employees;
copyOfEmployee.id=3456;
copyOfEmployee.city=`Ramgarh`
console.log(employees)
console.log(copyOfEmployee)   


const students = {
    id:123,
    name: 'vishal'
}
const copyOfStudent = {...students};
copyOfStudent.name='sahi hai..';
console.log('copy',copyOfStudent)
console.log('original',students)


// copying nested object with spread operator
// shallow copy
const A ={
    a:2,
    b:{
        c:{
            d:2
        }
    }
}

const B = {...A}
B.a="tu badal gayi"
B.b.c.d="hello kuchh to hai"
console.log('Original',A)
console.log('Copy',B)

// here we do not want to modify the original values is nested object is there

// 1. structurelone => NEW MWTHOD MOST OF THE BROWSER DOES NOT SUPORT
//2. Json.stringify and JSON.parse
// 3. writing own deep copy function
