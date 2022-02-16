// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//
// let sent = "You're gonna need a bigger boat"

const wordLength = (str) => {
    // write your code here
    let newArr = str.split(" ")
    console.log(str.split(" ").length)
    if(newArr.length%2==1){return newArr[Math.floor(newArr.length/2)].length}
    else{return newArr[(newArr.length/2)].length}
}
// console.log(wordLength(sent))

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let testStr = `[${str2}]`
    let testStrObj = new RegExp(testStr,"g");
    console.log(testStrObj)

    if(str1.length!==str2.length){return false}else{
    
    let newStr1 = str1.split("")
    let newStr2 = str2.split("")
    let result;
    console.log(newStr1)
    console.log(newStr2)
    for(let i=0;i<newStr1.length;i++){
        console.log(newStr1[i])
        console.log(testStrObj)

        console.log(testStrObj.test(newStr1[i]))
        if(newStr1[i]==testStrObj){result = true }
        // else{result= false }
    }
    return result
}

}
console.log(wordLetters("add", "dad"))