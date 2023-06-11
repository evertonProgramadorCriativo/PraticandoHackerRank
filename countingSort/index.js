function countingSort(arr) {
    // Write your code here
 let result = new Array(100).fill(0)
 for(let val of arr) {
     result[val]++
 }
 return result
}