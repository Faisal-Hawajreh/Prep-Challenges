'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    let idx;
    idx = str.lastIndexOf(" ")
    if(idx==-1){return str}
    else{return str.slice(idx+1)}
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------
const LastWord_2 = (str) => {
     // write your code here
     let arr = str.split(" ")
     let lastWord = arr.slice(-1)
    //  console.log(arr)
     return lastWord[0]
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    let newStr;
    let arr = str.split(" ")
    if(arr.indexOf('I')!=-1){newStr = arr.splice(arr.indexOf('I'),1,"We")};
    if(arr.indexOf('am')!=-1){newStr = arr.splice(arr.indexOf('am'),1,"are")};
    if(arr.indexOf('was')!=-1){newStr = arr.splice(arr.indexOf('was'),1,"were")};
    return arr.join(" ")
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    arr.splice(4,1,arr[4]+",")
    let newStr = arr.join(" ")
    return newStr
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    let arr = str.split(" ")
    let arr2 = str.split(" ")
    let newSent = [];
    for(let i = 0;i<arr.length;i++){

        let letters = arr[i].split("")
        let letters2 = arr[i].split("")


        for(let j = 0;j<letters.length;j++){

            let x = letters.indexOf(letters[j],j)
            let z = letters.indexOf(letters[j],j+1)

            let count = 1;
            if(letters[j]==letters[j+1]){
            x = count +=1
            }else if(letters[j+1]==undefined&&z==-1){
                if(letters[j]==letters[j-1]){
                    let idx = letters2.indexOf(letters[j])
                    letters2.splice(idx+1,x,x+1)
                }else{
                let idx = letters2.indexOf(letters[j])
                letters2.splice(idx+1,0,1)}
            }else if(letters[j]!=letters[j+1]&&z==-1){
                if(letters[j]==letters[j-1]){
                    let idx = letters2.indexOf(letters[j],j)
                    letters2.splice(idx+1,x-1,x)

                }else{
                let idx = letters2.indexOf(letters[j],j)
                letters2.splice(idx+1,0,1)}

            }else if(letters[j]!=letters[j+1]&&z!=-1){
                let idx = letters2.lastIndexOf(letters[j])
                letters2.splice(idx+1,0,1)
            }

        }
        let newWord = letters2.join("");
        newSent.push(newWord)

    
    }

    return newSent.join(" ")
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };