function sumXor(n) {
    // Write your code here
  let countV = 0;
 
    // Traverse all numbers from 0 to n and
    // increment result only when given condition
    // is satisfied.
    for (let i=0; i<=n; i++ )
        if ((n+i) == (n^i) )
            countV++;
 
    return countV;
}
