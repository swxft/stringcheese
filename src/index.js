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
    const sep = str.split(' ')
    const newSentence = []
    for (let item of sep) {
        if (sep.indexOf(item) !== 0 && !articles.includes(item)) {
            newSentence.push(capitalize(item))
        } else if (sep.indexOf(item) !== 0 && articles.includes(item)) {
            newSentence.push(item)
        }
    }
    newSentence.unshift(capitalizeWords(sep[0]));
    return newSentence.join(' ')
}
// console.log(allCaps('hello'))
// console.log(capitalizeWords('hi im eden'))
console.log(capitalizeHeadline('from eden and reggie to a friend who goes by billie'))
