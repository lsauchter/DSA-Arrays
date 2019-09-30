function removeChar(string, letters) {
    const letterArr = []
    const stringArr = []

    for(let i=0; i<letters.length; i++) {
        letterArr.push(letters.charAt(i))
    }
    for(let i=0; i<string.length; i++) {
        stringArr.push(string.charAt(i))
    }

    letterArr.forEach(letter => {
        stringArr.forEach((strLtr, index) => {
            if (letter === strLtr) {
                stringArr.splice(index, 1)
            }
        })
    })

    const concatString = stringArr.reduce((acc, curr) => {
        return acc + curr
    })

    return concatString
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')