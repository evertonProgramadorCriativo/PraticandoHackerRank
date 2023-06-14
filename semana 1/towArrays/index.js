function towArray(K,A,B) {
    let result = "YES"
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);

    A.map((data,index) => {
        if(A[index] + B[index] < k) {
            return result = "NO"
        }
    })
    return result;
}