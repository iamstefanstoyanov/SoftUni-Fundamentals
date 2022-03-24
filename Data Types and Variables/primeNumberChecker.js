function primeNumberChecker(n) {
        let divisor = 2;
        let maxDivisor = Math.round(Math.sqrt(n));
        let isPrime = true;
      
        while (isPrime && (divisor <= maxDivisor)) {
          if (n % divisor === 0) {
            isPrime = false;
          }
          divisor++;
        }
        console.log(`${isPrime}`);
}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)
primeNumberChecker(1)