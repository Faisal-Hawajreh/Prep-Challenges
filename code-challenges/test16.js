// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    //write your code here ...
    return string.split("").reverse().join("");
}
console.log(reverseString("Hello ' B"))

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;
let arr1 = ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"]
const detectFace = (arr) => {
    //write your code here ...
    return arr.filter(Str=>/\^_\^/gi.test(Str))
}
console.log(detectFace(arr1))

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"
let Str1 = "coding"
const eveCharacter = (str) => {
    //write your code here ...
    let newStr = [];
    let strArr = str.split("")
    for(let i = 0;i<strArr.length;i++){
        if(i%2==0){newStr.push(strArr[i])}
    }
    return newStr.join("")
}
console.log(eveCharacter(Str1))

// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];

let arr2 = [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]]
const chickenGradients = (arr) => {
    //write your code here ...
    let newArr = [];
    for(let array of arr){newArr.push(array.filter(Str=>/chicken/gi.test(Str)))}
    return newArr
}
console.log(chickenGradients(arr2))