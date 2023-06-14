def pageCount(n, p):
    l=p//2
    n=n+1 if n%2==0 else n
    r=(n-p)//2
    return min(l,r)