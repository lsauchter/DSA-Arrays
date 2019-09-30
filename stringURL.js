function stringURL(string) {
    const arr = string.split('')

    const fixedArr = arr.map((item, index) => {
        if (item === ' ') {
            return arr[index] = '%20'
        }
        return item
    })
    return fixedArr.join('')
}

stringURL('tauhida parveen')