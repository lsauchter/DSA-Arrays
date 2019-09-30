function stringURL(string) {
    const arr = string.split('')

    const fixedArr = arr.map(item => {
        if (item === ' ') {
            return item = '%20'
        }
        return item
    })
    console.log(fixedArr.join(''))
    return fixedArr.join('')
}

stringURL('tauhida parveen')