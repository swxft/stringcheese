//  1
function capitalize (str) {
    const firstLetter = str[0].toUpperCase()
    const remainder = str.slice(1).split()
    remainder.unshift(firstLetter)
    return remainder.join('')
}

//  2
function allCaps (str) {
    return str.toUpperCase()
}
//  3
function capitalizeWords(str) {
    const words = str.split(' ')
    const capwords = words.map(capitalize)
    return capwords.join(' ')
}

//  3 - advanced
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

//  4
function removeExtraSpaces(str) {
    const noLeading = str.trim(str)
    const filteredSpaces = noLeading.split(' ').filter((character) => character !== '')
    return filteredSpaces.join(' ')
}

//  5
function kebobCase(str, seperator = '-') {
    const lower = str.toLowerCase()
    const chars = lower.split('')
    const filtered = chars.filter((character) => {
        const code = character.charCodeAt(0)
        //  character between a-z?
        if (code > 96 && code < 123) { 
            return true
        // character is a number?
        } else if (code > 47 && code < 58) {
            return true
        // character is either a space or hyphen
        } else if (code === 32 || code === seperator.charCodeAt(0)) {
            return true
        }
        return false
    })
    const sentence = removeExtraSpaces(filtered.join(''))
    return sentence.split(' ').join(seperator)
}

//  6
const snakeCase = (str) => kebobCase(str, '_')

//  7 
const camelCase = (str) => {
    const wordArr = str.split(' ')
    const sentence = wordArr.map((word, index) => (index !== 0 ? capitalize(word) : word))
    return sentence.join('')
}
//  8
const shift = (str) => {
    const sentence = str.slice(1)
    const firstChar = str[0]
    const wordArr = sentence.split(' ')
    wordArr.push(firstChar)
    // console.log(wordArr)
    return(wordArr.join(' '))
}

//  9
const makeHashTag = (str) => {
    const sentence = []
    const words = str.split(' ')
    console.log(words.length > 3)
    if (words.length > 3){
        words.sort((a, b) => {
            return b.length - a.length
        })
    }
    words.map((word) => {
        sentence.push('#' + word.toLowerCase())
    })
    return sentence.slice(0,3)
}
//  10
const isEmpty = (str) => {
    // get rid of all white space 
    const clean = str.replace(/\s/g, '')
    // if any characters are left, return true
    return(clean.length === 0)
}
// console.log(allCaps('hello'))
// console.log(capitalizeWords('hi im eden'))
// console.log(capitalizeHeadline('from eden and reggie to a friend who goes by billie'))
// console.log(removeExtraSpaces('         are the       spaces added?'))
// console.log(kebobCase('Did you know the new Hocus Pocus is out?? The 3 sisters are awesome ✌︎'))
// console.log(snakeCase('Did you know the new Hocus Pocus is out?? The 3 sisters are awesome 🎃'))
// console.log(makeHashTag('I love King Julian'))
// console.log(isEmpty('Abc def'))
// console.log(isEmpty('     '))
export {capitalize, allCaps, capitalizeWords, capitalizeHeadline, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHashTag, isEmpty};