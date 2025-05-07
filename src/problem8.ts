async function squareAsync(n: number): Promise<number> {
    let promise = new Promise<number>((resolve, reject) => {
        if(n >= 0){
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
        else{
            reject("Error: Negative number not allowed")
        }
    });
    return promise; 
}

// squareAsync(-4)
// .then(console.log)
// .catch(console.error);       // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed