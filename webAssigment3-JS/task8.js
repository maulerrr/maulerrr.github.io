function Fibo(n){
    event.preventDefault();
    let size = parseInt(n.number.value);
    document.getElementById('set').innerHTML = "Generated set: " + fibonacciGenerator(size);
}

function fibonacciGenerator(n){
    let generated = [0, 1];                                                                         //predefined elements
    if(n == 0) { return "Empty set - Ø "; }                                                         // i've decided to improve math of this task
    else if(n == 1) { return generated.slice(0, 1); }                                               // here it seems more logical
    else { for(let i = 0; i < n - 2 ; i++){ generated[i + 2] = generated[i + 1] + generated[i] ;}   // "meat" of my code
    return generated; }
}

// console.log(fibonacciGenerator(0)); //yep, it works well as intended :) 
// console.log(fibonacciGenerator(1));
// console.log(fibonacciGenerator(2)); 
// console.log(fibonacciGenerator(5));
// console.log(fibonacciGenerator(8));