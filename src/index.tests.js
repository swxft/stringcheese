const func = require('./index.js')

test('first characters of strings are capitalized on Capitalize()', () => {
    expect(func.capitalize('hello world')).toBe(('Hello world'))
    expect(func.capitalize('hi im paul')).toBe(('Hi im paul'))
})

test('allCaps() makes all characters capitalized when given strings', () => {
    expect(func.capitalize('hello world')).toBe(('HELLO WORLD'))
    expect(func.capitalize('hi im paul')).toBe(('HI IM PAUL'))
})

test('capitalizeWords() makes all characters capitalized when given strings', () => {
    expect(func.capitalizeWords('hello world')).toBe(('Hello World'))
    expect(func.capitalizeWords('hi im paul')).toBe(('Hi Im Paul'))
})

test('removeExtraSpaces() only removes strings of spaces', () => {
    expect(func.removeExtraSpaces('         are the       spaces added?')).toBe(('are there spaces added?'))
})

test('kebobCase() only removes strings of spaces and replaces 1 spade with a dash', () => {
    expect(func.kebobCase('Did you know?')).toBe(('did-you-know?'))
})

test('snakeCase() only removes strings of spaces and replaces 1 spade with an underscore', () => {
    expect(func.kebobCase('Did you know?')).toBe(('did_you_know?'))
})

test('camelCase() removes spaces and uppercases subsequent words', () => {
    expect(func.camelCase('hi how')).toBe(('hiHow'))
})

test('shift() takes the first character of a string and move to the end of a string', () => {
    expect(func.camelCase('Hello World')).toBe(('ello WorldH'))
})

test('makeHashTag() takes a string and outputs an array with the words as hastags', () => {
    expect(func.makeHashTag('Hello World')).toBe((['#hello', '#world']))
})

test('isEmpty() takes a string and outputs an array with the words as hastags', () => {
    expect(func.makeHashTag('Abc def')).toBeFalsy()
})
