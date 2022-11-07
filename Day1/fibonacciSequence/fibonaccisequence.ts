let fib: number[] = [0, 1];

function listFib(num: number){
    for (let i: number = 2; i < num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
      }
      return fib;
}

console.log(listFib(10));