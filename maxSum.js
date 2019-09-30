function maxSum(arr) {
    const sums = []
    arr.reduce((acc, curr) => {
        sums.push(acc + curr)
        return acc + curr
    })
    sums.sort((a, b) => a < b)    
    return sums[0]
}

maxSum([4, 6, -3, 5, -2, 1])