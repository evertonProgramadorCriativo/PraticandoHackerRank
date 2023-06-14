function diagonalDifference(arr) {
    let n = arr[0].length;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0, j = n - 1; i < n; i++, j--) {
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    }
    let difference = leftSum - rightSum

    return Math.abs(difference)
}