function miniMaxSum(arr) {
    let max = arr[0];
    let min = arr[0]
    let sum = 0;
for (let index = 0; index < arr.length; index++) {
   //console.log(index)
   if (max < arr[index]) {
    max = arr[index]
    console.log("maximo" + " " + index)
   }
   if (min > arr[index]) {
    min = arr[index]
   console.log("minimo"  + " " + index)
   }
 //   sum += arr[index];
    
}
}
//console.log(1 > 1)
miniMaxSum([1,3,4,6])