function balancedSums(arr) {

    var totalSum = 0;
    var runningSum = 0;
    for (var i = 0; i < arr.length; i++) {
      totalSum+= arr[i];
    }
  
    for (var i = 0; i < arr.length; i++) {
      totalSum-= arr[i];
  
      if (runningSum == totalSum) 
        return "YES";
      runningSum+= arr[i];
    }
    return "NO";
  }