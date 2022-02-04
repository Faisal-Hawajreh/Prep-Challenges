'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    // arr = [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
    // write your code here
    let oddNumber = arr.filter(n => n%2)
    return oddNumber
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    let filterdCvs = arr.filter((obj)=>{
        return obj.yearsOfExperience>4 && obj.tech == 'JS'  
    })
    let newObj;
    let result = []
    let fullnameList = filterdCvs.filter((obj)=>{
         if(obj.LastName== null){
            obj.fullName = `${obj.firstName}`
         }else{obj.fullName = `${obj.firstName} ${obj.LastName}`};
         console.log(obj)
         newObj = {fullName:obj.fullName,tech:obj.tech}
         return result.push(newObj)
         
    })
    return result
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here
    const noWay = /^[^aeiou]+$/gi;

    let newArr = arr.filter((word)=>{
      // console.log(word)
      // console.log(noWay.test(word))
      if( noWay.test(word)==true){return word}
      return noWay.test(word)

    })
        return newArr 
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here
    
    let newArr1 = arr1.filter((obj)=>(arr2.includes(obj) == false))
    let newArr2 = arr2.filter((obj)=>(arr1.includes(obj) == false))
    return newArr1.concat(newArr2)
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

