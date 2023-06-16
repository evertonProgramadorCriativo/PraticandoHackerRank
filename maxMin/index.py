def maxMin(k, arr):
    
    arr.sort()
    min_diff = sys.maxsize
    
    for i in range(n-k+1):
        min_diff =  min(min_diff, arr[i+k-1] - arr[i])
    
    return min_diff 
