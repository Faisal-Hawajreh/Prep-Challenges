'use strict'
// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]


// ------------------------

const objectCounter = (obj) => {
    // write your code here
    let count = obj.reduce((x1,x2,i)=>i+1)
    return count

}
// console.log(objectCounter(voters))


// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    let newStr = str.split(" ")
    // write your code here
    let newSentence = newStr.reduce((a,b)=>[b].concat(a), [])
    let x = newSentence.join(" ")
return x
}
console.log(stringReverse('you shall not pass'))


// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
let voters = [
    {
        voter_Name: "Adam Scott",
        votes_To: "James",
    },
    {
        voter_Name: "Abril Blake",
        votes_To: "Jade",
    },
    {
        voter_Name: "Ruby Andrews",
        votes_To: "Jade",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Bailey",
    }
];

let voters2 = [
    {
        voter_Name: "Adam Scott",
        votes_To: "Chad",
    },
    {
        voter_Name: "Abril Blake",
        votes_To: "Jade",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Chad",
    },
    {
        voter_Name: "Junior Maxwell",
        votes_To: "Jade",
    }
];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    // write your code here
    let objs = {}
    obj.reduce((a,b,i,arr)=>{
        let previous2=arr[i-2]
        if(i>1 && previous2.votes_To===b.votes_To){
            objs[`${b.votes_To}`] = 2
        }

        if(a.votes_To!==b.votes_To){
            if(objs[`${a.votes_To}`]==2){objs[`${a.votes_To}`]=2}
            else(objs[`${a.votes_To}`] = 1);
            if(objs[`${b.votes_To}`]==2){objs[`${b.votes_To}`]=2}
            else(objs[`${b.votes_To}`] = 1);
            // console.log(objs)
        }
        else{
            objs[`${a.votes_To}`] = 2
            // console.log(objs)
        }
        return b

        // console.log(objs)
    })

    return objs
}
console.log(statistics(voters))