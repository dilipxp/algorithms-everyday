
//  This function will return the index number of the vlaue in array.
function LinearSearch(arr:any[], value:number): number{
    let notFound: number = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;  // return the index of the value if found.
        }
    }
    return notFound;  // return -1 if the value not found.
}

let arr :number[] = [1,2,3,4,5,6,7,8,9,10]  // array 

console.log(LinearSearch(arr, 6))   // To print the massege in consol log.