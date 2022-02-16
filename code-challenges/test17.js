// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
    let newArr = []

    if(int1<0){
        console.log(0)
        return int1
    }else{
        console.log(0)
        console.log(newArr)
        newArr.unshift(int1)
        newArr.push(recursionPattern(int1-int2,int2))
        return newArr

    }
 
}
console.log(recursionPattern(50,9))