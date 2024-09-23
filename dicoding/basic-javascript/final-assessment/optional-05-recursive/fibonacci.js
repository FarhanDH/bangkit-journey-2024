function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  const prevFibonacci = fibonacci(n - 1);
  const currentFibonacci =
    prevFibonacci[prevFibonacci.length - 1] +
    prevFibonacci[prevFibonacci.length - 2];
  return [...prevFibonacci, currentFibonacci];
}
const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
for (let i = 0; i <= numberForFibonacci; i++) {
  console.log(fibonacci(i));
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
