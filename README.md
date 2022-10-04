JavaScript string library
published under stringcheese-swxft ➡️ https://www.npmjs.com/package/stringcheese-swxft

## capitalize (str)
> makes the first character of a given string uppercase.
Example: hello world -> Hello world

## allCaps (str)
> makes all characters uppercase
Example: foo bar -> FOO BAR

## capitalizeWords (str)
>  makes the first character of each word uppercase. Imagine that each word is separated by a space.
Example: do all the things -> Do All The Things

## capitalizeHeadline (str)
> capitalizes all of the words except the words: the, in, a, an, and, but, for, at, by, from unless one of these words is the first word of the string!
Example: the most foo in bar -> The Most Foo in Bar

## removeExtraSpace (str)
> Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
Example: "   Hello    world!   " -> "Hello world!"

## kebobCase (str)
> Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
Example: " Hello world " -> "hello-world"

## snakeCase (str)
> Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
Example: " what the heck " -> "what_the_heck"

## camelCase (str)
> Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
Example: Camel Case -> camelCase

## shift (str)
> this method will take the first character of a string and move to the end of a string:
Example: Hello World -> ello WorldH

## makeHashTag(str)
> This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
Example:
input: "Amazing bongo drums for sale"
output: ['#amazing', '#bongo', '#drums']

## isEmpty(str)
> Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab). 
Example:
Input: "Abc def"
Output: isEmpty("Abc def") // false