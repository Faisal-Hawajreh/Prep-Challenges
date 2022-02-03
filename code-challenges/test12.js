const oddFiltration = (arr) => {
    // arr = [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]
    // write your code here
    let oddNumber = arr.filter(n => n%2 ==1)
    return oddNumber
}
// console.log(oddFiltration([20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]))

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
let cvs1 = [
    {
      firstName: "Jason",
      LastName: "James",
      yearsOfExperience: 20,
      tech: "JS",
    },
    {
      firstName: "Shira",
      LastName: null,
      yearsOfExperience: 5,
      tech: ".Net",
    },
    {
      firstName: "Dmitri",
      LastName: "Akkerman",
      yearsOfExperience: 1,
      tech: "Python",
    },
    {
      firstName: "Isabella",
      LastName: null,
      yearsOfExperience: 4,
      tech: "Java",
    },
];
let cvs2 = [
    {
      firstName: "Nelson",
      LastName: "Mandela",
      yearsOfExperience: 15,
      tech: "JS",
    },
    {
      firstName: "Shira",
      LastName: null,
      yearsOfExperience: 1,
      tech: ".Net",
    },
    {
      firstName: "Isabella",
      LastName: null,
      yearsOfExperience: 4,
      tech: "Java",
    },
  ];



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
// console.log(cvs2)
const cvsFiltration = (arr) => {
    // write your code here
    let filterdCvs = arr.filter((obj)=>{
        return obj.yearsOfExperience>4 && obj.tech == 'JS'  
    })
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
// console.log(cvsFiltration(cvs2))


// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------
console.log(['car', 'boy', 'spy', 'building', 'why', 'dry' ]);
const vowelsFiltration = (arr) => {
    // write your code here
    let newArr = arr.filter((word,i)=>{
        let newWord = []
        newWord.push(word[i])
        let newletter = newWord.filter((el)=>{
            console.log(el !== /[^aeiou]+/gi)
        })
        console.log(newWord)

        })
        

        // return word !== /[^aeiou]+/gi
    

    return newArr
} 
console.log(vowelsFiltration(['car', 'boy', 'spy', 'building', 'why', 'dry' ]))
