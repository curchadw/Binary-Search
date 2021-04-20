//Alogorithms

//How would you find a word in the dictionary?

//How do you make a peanut butter sandwich?

//How do you sort second garders by age?

//Searching Alogorithms

//How to find an element from a dataset

//linear search -- time grows

//Binary Search -- you half the array until it comes down to that element

//a simple search is typically a for loop

//1. start at halfway point of the array

//2. find new mid

// target will be 7
let arr = [1,2,3,4,5,6,7,8,9,10,11]
let target = 7


const binary = (array, target)=>{
let left = 0
let right = array.length -1
  
  
  while (left <= right){

   let mid = Math.floor((left + right)/2)

    if (array[mid] === target){
        return true
    }else if (array[mid] < target){
       left = mid + 1
    }else{
      right = mid - 1
    }
  }
  return false
}

console.log(binary(arr,target))

