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
console.log(oddFiltration([20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200]))


// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
var cvs = [
    {
        firstName: "Jason",
        LastName: "James",
        yearsOfExperience: 20,
        tech: "JS"
    },
    {
        firstName: "Shira",
        LastName: null,
        yearsOfExperience: 5,
        tech: ".Net"
    },
    {
        firstName: "Dmitri",
        LastName: "Akkerman",
        yearsOfExperience: 1,
        tech: "Python"
    },
    {
        firstName: "Isabella",
        LastName: null,
        yearsOfExperience: 4,
        tech: "Java"
    }
]
// console.log(cvs[i])
//   ===>

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
let acceptedCV = arr.filter((cv) => cv.yearsOfExperience > 3)
    cv = acceptedCV.map((cv)=> {
        let fullName;
        if(cv.LastName == null){
            cv.fullName = cv.firstName;
        }else{cv.fullName = cv.firstName +" "+ cv.LastName}
        function cVs(fullName,tech){
            this.fullName = cv.fullName;
            this.tech = cv.tech;
        }
        let newArr = [];
        for(let i = 0 ; i<cv.length;i++){
            var newCV = new cVs(acceptedCV.LastName,acceptedCV.tech)
            newArr.push(newCV)

        }
        return cv
    })
    return cv
    }
console.log(cvsFiltration(cvs))

// describe("Challenge12-02", () => {
//     test("cvsFiltration", () => {
//       let cvs1 = [
//         {
//           firstName: "Jason",
//           LastName: "James",
//           yearsOfExperience: 20,
//           tech: "JS",
//         },
//         {
//           firstName: "Shira",
//           LastName: null,
//           yearsOfExperience: 5,
//           tech: ".Net",
//         },
//         {
//           firstName: "Dmitri",
//           LastName: "Akkerman",
//           yearsOfExperience: 1,
//           tech: "Python",
//         },
//         {
//           firstName: "Isabella",
//           LastName: null,
//           yearsOfExperience: 4,
//           tech: "Java",
//         },
//       ];
//       let res1 = [
//         {
//           fullName: "Jason James",
//           tech: "JS",
//         },
//       ];
  
//       let cvs2 = [
//         {
//           firstName: "Nelson",
//           LastName: "Mandela",
//           yearsOfExperience: 15,
//           tech: "JS",
//         },
//         {
//           firstName: "Shira",
//           LastName: null,
//           yearsOfExperience: 1,
//           tech: ".Net",
//         },
//         {
//           firstName: "Isabella",
//           LastName: null,
//           yearsOfExperience: 4,
//           tech: "Java",
//         },
//       ];
//       let res2 = [
//         {
//           fullName: "Nelson Mandela",
//           tech: "JS",
//         },
//       ];
  
//       expect(cvsFiltration(cvs1)).toStrictEqual(res1);
//       expect(cvsFiltration(cvs2)).toStrictEqual(res2);
//     });
//   });
  


// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

// const vowelsFiltration = (arr) => {
    
//     let filterd = arr.filter(word=> word == /[^aeiou]/)
//     // write your code here
//     return filterd
// } 

// console.log(vowelsFiltration(['car', 'boy', 'spy', 'building', 'why', 'dry' ]))

