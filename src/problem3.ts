function concatenateArrays<T>(...arrays: T[][]):T[] {
    const mergedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
    return mergedArray
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

;  // Output: ["a", "b", "c"]
;     // Output: [1, 2, 3, 4, 5]