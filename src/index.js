function capitalize (str) {
    const firstLetter = str[0].toUpperCase()
    const remainder = str.slice(1).split()
    remainder.unshift(firstLetter)
    return remainder.join('')
}

function allCaps (str) {
    return str.toUpperCase()
}

function capitalizeWords(str) {
    const words = str.split(' ')
    const capwords = words.map(capitalize)
    return capwords.join(' ')
}
function capitalizeHeadline(str) {
    const articles = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from']
    // loop through words in string (if index is not 0 and word is not in articles, capitalize)
    //join words to return a sentence with capitalization
    const sep = str.split(' ')
    for (let item of sep) {
        if (sep.indexOf(item) !== 0 && !item.includes(articles)) {
            console.log(capitalize(item))
        }
    }
    return
}
// console.log(allCaps('hello'))
// console.log(capitalizeWords('hi im eden'))
// console.log(capitalizeHeadline('From eden and reggie to a friend who goes by billie'))

function samplefunc() {
    const samp = ['once', 'there', 'was', 'a', 'purple', 'cow']
    for (let word of samp) {
        if (word.includes(samp)) {
            console.log('true')
        }
    }
}
samplefunc()