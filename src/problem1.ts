
function formatString(input: string, toUpper?: boolean): string {
    if(!toUpper){
       return `${input.toLowerCase()}`
    }
    return `${input.toUpperCase()}`
}

console.log(formatString("Hello"));         
console.log(formatString("Hello", true))
console.log(formatString("Hello", false));
