function divisors(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
        }
   }
    return count;
    }
    console.log(divisors(16)); 