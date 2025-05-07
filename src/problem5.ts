function processValue(value: string | number): number {
    if(typeof value === "string"){
        return value.length
    }
    else if(typeof value === "number"){
        return value * 2
    }
    return value;
}

console.log(processValue("Hello"));
console.log(processValue(10));