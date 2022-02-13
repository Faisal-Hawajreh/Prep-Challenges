function equalizeArray(arr) {
    // Write your code here
    
    let num ;
    let newArr;
        for(let i=0;i<arr.length;i++){
            let exist = arr.indexOf(arr[i],i+1)
            if(exist!=-1){
                num = arr[i]
            }
        }
    newArr = arr.filter((n)=>n!=num)
    return newArr.length
}
console.log(equalizeArray([3,2,5,1,1]))