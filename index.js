function plusMinis(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let index = 0; index < arr.length; index++) {
       if (arr[index] > 0) {
        positive++
       }
       else if (arr[index] < 0) {
        negative++
       } 
       else {
           zero++
        
       }
         
    }
 console.log(( positive / arr.length).toFixed(6))
 console.log(( negative / arr.length).toFixed(6))
 console.log(( zero / arr.length).toFixed(6))

}

plusMinis([1,1,1,0,0,-1])