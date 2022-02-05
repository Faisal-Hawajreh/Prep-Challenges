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
// console.log(LastWord("you dare use my spells against me, potter"))
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
// console.log(LastWord("Impossible"))

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
// console.log(replaceWords("I was there 3000 years ago"))

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
// console.log(arrToStr(["move","it","away","from","the","street"]))

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

// const letterCounter = (str) => {
//     // write your code here
//     let arr = str.split(" ")
//     for(let i = 0;i<arr.length;i++){

//         let letters = arr[i].split("")
//         console.log(letters)

//         for(let j = 0;j<letters.length;j++){
//             console.log(j)
//             x= letters.indexOf(letters[j],j)
//             z = letters.indexOf(letters[j],j+1)
//             console.log(x)
//             console.log(z)
            

//             if(z==-1&&x==j){
//                 if(letters[j+1]==undefined&&letters[j]==letters[j+-1]){
//                 letters.splice(j-(x-1),x,x+1)
//                 console.log(letters)
//                 }else if(letters[j+1]==undefined&&letters[j]!=letters[j-1]){
//                     let idx = letters.indexOf(letters[j])
//                     letters.splice(idx+1,0,1)
//                     console.log(letters)
//                     break;
//                 }

//             }
//             if (letters[j]!=letters[j+1]&&letters[j+1]!=undefined){
//                 let idx = letters.indexOf(letters[j])
//                 letters.splice(idx+1,0,1)
//                 console.log(letters)
//                 console.log(letters[j+2])
//                 j=letters.indexOf(letters[j+2])

//             }
//             console.log("----------")

//         }

//     }
//     return str
// }
// console.log(letterCounter("aaaa bbb sdf"))



const letterCounter = (str) => {
    // write your code here
    let arr = str.split(" ")
    let arr2 = str.split(" ")
    let newSent = [];
    for(let i = 0;i<arr.length;i++){

        let letters = arr[i].split("")
        let letters2 = arr[i].split("")
        console.log(letters)

        for(let j = 0;j<letters.length;j++){
            console.log(j)
            let x = letters.indexOf(letters[j],j)
            let z = letters.indexOf(letters[j],j+1)
            console.log(x)
            console.log(z)
            if(letters[j]!=letters[j+1]&&z==-1){
                let idx = letters2.indexOf(letters[j],j)
                letters2.splice(idx+1,0,1)
                console.log(letters2)
            }



            console.log("----------")

        }
        let newWord = letters2.join("");
        console.log(newWord)
        newSent.push(newWord)


    }

    return newSent.join(" ")
}
console.log(letterCounter("Good morning"))