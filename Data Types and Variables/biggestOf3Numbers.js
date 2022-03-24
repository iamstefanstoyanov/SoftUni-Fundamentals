function biggestOfThreeNumbers(a, b, c) {
    let arr = [];
    arr.push(a, b, c);
    console.log(Math.max(...arr));
  }

function biggestOfThreeNumbers(a, b, c) {
    if (a >= b && a >= c) {
      console.log(a);
    } else if (b >= a && b >= c) {
      console.log(b);
    } else if (c >= a && c >= b) {
      console.log(c);
    }
  }

biggestOfThreeNumbers(-2, 7, 3);
biggestOfThreeNumbers(130, 5, 99);
biggestOfThreeNumbers(43, 43.2, 43.1);
biggestOfThreeNumbers(2, 2, 2);
