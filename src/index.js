function capitalize (str) {
    const firstLetter = str[0].toUpperCase()
    const remainder = str.slice(1).split()
    remainder.unshift(firstLetter)
    return remainder.join('')
}

function allCaps (str) {
    let capsLock = ''
    for (let i = 0; i < str.length; i++){
        capsLock += str[i].toUpperCase()
    }
    return capsLock
}

console.log(capitalize('hello'))
