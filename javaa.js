//var myName="John";





//console.log(myName);
let myName="john";
console.log(myName);
myName=5;
console.log(myName);
{
    var num = 5;
}
console.log(num);
//string interpolation
let firstName = "Prasoon";
let lastName = "Singh";
console.log(firstName + " " + lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(firstName);
//Default params
// function addTwoNmunbers(num1,num2){
//     return num1+num2;
// }
// console.log(addTwoNmunbers(1,2));
// let addTwoNmunbers = (num1,num2) => num1+num2;
// console.log(addTwoNmunbers(1,2));
let addTwoNmunbers = (num1,num2=5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(addTwoNmunbers(1,10));
//rest and spread operator
let array = [5,10,15,20,25];
//spread operator-> ...
console.log(array);
let newArray = [...array,30,35,40];
console.log(newArray);
//Rest -> ...
let maxOfTwoNumbers = (num1,num2) => Math.max(num1,num2);
let maxOfThreeNumbers = (num1,num2,num3) => Math.max(num1,Math.max(num1,num2));
console.log(maxOfTwoNumbers(2,3));
console.log(maxOfThreeNumbers(1,2,3));
let maxOfNumbers = (...numbers) => {
    let maximum = Number.MIN_VALUE;
    for(let number of numbers) {
        maximum = Math.max(maximum,number);
    }
    return maximum;
};
console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));
// for object
let object ={
    name: "john",
    age : 24,
    address: {
        city: "New york",
        state: "NY",
        country:"USA",

    },
    
};
let object2 = {...object , country:"USA",favorite: "Numb by new york" , name:"Prasoon"};
console.log(object2);
object2.address.city ="london";
//.map()
let array1 = [1,2,3,4,5];
let newArr =[];
for(let i = 0 ; i < array1.length ;i++){
    newArr[i]= array1[i]*array1[i];

}
console.log(newArr);
let arr = [5,10,15,20];
function functionForMap(element){
    return element * element;
}
let newArr2 = arr.map((element,index) =>{
    console.log(index);
    return element * element;
});
console.log(newArr2);
//.forEach()
let a1=[1,2,3,4,5];
a1.forEach((element,index) => {
    console.log(element*element);
});
console.log("Array is " , a1);
//.filter()
let a2=[10,20,30,40,50];
let n1= a2.filter((element) =>{
    return element>=30;
});
console.log(n1);
//.find()
let temp=a2.find((value)=>
{
    return value > 20;
}
);
console.log(temp);
//.sort()
 let a3=[50,40,60,10,70,111];
 let sortedAr = a3.sort((el1,el2)=>
 {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1-el2;
 });
 console.log(sortedAr);
 let details = { name: "Alex",
                    age: 24,
                    address: {
                        street: "Brooklyn",
                        city: "New York",
                        state: "NY",
                        country : "USA",
                        passportDetails:{
                            passNumber:"asdfgh1234",
                        },
                    },
                };
console.log(details.address.passportDetails.passNumber);
// object destructing
// let myName1 = details.name;
// let age = details.age;
// console.log(myName1,age);
let {name: myName2 , age} = details;
console.log(myName2,age);
//Array matching
//if(array1==array2)
//object matching
let obj1={name : "Shantanu" , age : 24} ;
let obj2 = {name:"Shantanu" , age : 24};
function areEqual(obj1,obj2){
    if(obj1==obj2){
        return true;
    }
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)){
        if(typeof obj2[key]=="undefined"){
            return false;
        }
        if(obj1[key]==obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(areEqual(obj1,obj2));
// map and set
let map = new Map();
map.set(1,"Shantanu");
map.set(2,"Alex");
console.log(map);
console.log(map.values());
console.log(map.keys());
let set = new Set();
set.add(1);
set.add(-1);
console.log(set);
// class
class Animal {
    noOfLegs;
    color;
    family;
    sound;

    constructor(noOfLegs,color,family,sound){
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
    showAnimal(){
        console.log(`The animal belongs to family ${this.family}`);
    }

}
let animal = new Animal(4,"brown","rodent","something");
console.log(animal);
animal.showAnimal();

//  list  node
////////// ListNode

class ListNode{
    val;
    next;

    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
};

class TestClass {
    head;

    constructor(head = null){
        this.head = head;
    }

    hasLast() {
        return this.head != null;
    }
    
    getLast() {
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
         let finalValue = current.val;
    
         current = this.head;
         while(current.next.next !== null && current.next !== null){
            current = current.next;
         }
         if(current.next!= null && current.next.next ==  null ){
              this.head = null;
         }
         current.next = null;
         return finalValue;
    }
}

let myVariable = new TestClass(
    new ListNode(
        1,
        new ListNode(2, new ListNode(3,new  ListNode(4, new ListNode(5)) ))
    )
);

console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast());
console.log(myVariable.getLast()); 




//////    promise


let promise = new Promise((fulfilled, notfulfilled) => {
    let num1 = 10;
    let num2= 15;
    let sum = num1+num2;
    if(sum > 24){
     fulfilled();
    } else { 
     notfulfilled();
    }
 });
 
 
 promise.then(()=>{
     console.log("promise is fulfilled")
 }).catch(() => {
     console.log("Promise is not fulfilled");
 });
 
 
 function addTwoNumbers(num1, num2){
     let sum =0;
     setTimeout(()=>{
        console.log(num1+ num2);
        sum = num1 + num2;
     }, 5000);
 
     console.log("Inside addTwoNumbers");
     return sum;
 }
 
 console.log(addTwoNumbers(5,8));
 
 function addTwoNumbers2(num1, num2){
     return new Promise((fulfilled, notfulfilled)=> {
         setTimeout(()=>{
             console.log("Inside setTimeout");
            fulfilled(num1+num2);
          }, 5000);
          
     });
     
 }
 
 addTwoNumbers2(10,5).then(()=>{
     console.log("promise is fulfilled")
 }).catch(() => {
     console.log("Promise is not fulfilled");
 });
