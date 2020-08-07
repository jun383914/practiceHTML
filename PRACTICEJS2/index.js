//Purpose: Gives behavior functionality to our website.

//variable assignment + data types
// = assignment
// ==
// ===

var firstName='zhen'; //string
var age =31; //number
var isFemale=true; //boolean

//string concatentation
var sentence='my name is ' + firstName;

console.log(sentence)
//using node + file name to run cosole.log

//if statements + boolean/conditions

//if (condition)

var someCondition=true;
var someOtherCondition=false;

if(someCondition){

}
else if(someOtherCondition){

}
else{

}

//ex. boolean operators || or, && and 

if(age>=25){
    console.log('You are old.')
}
else{
    console.log('still wet behind the ears,eh?')
}

//objects - a mao of key and value pairs

var obj={}; //declare

//set value
obj['someKeyHere']='someValueHere';
obj['name']='zhen';

//get value
var key='name';
console.log(obj['name']);
console.log(obj.name);
console.log(obj[key])

//array - a list/collection of elements

var array=[];

//add element 
array.push(firstName)

//retrieve element
// array are 0 indexed

//functions -a set of instructions to be executed or invoked

//declare functions

function functionName(para){

}

//to invoke or execute this function
functionName();