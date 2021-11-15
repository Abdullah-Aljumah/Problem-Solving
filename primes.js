let numbers = [];
function primes(start, end) {
  let check = true;
  for (i = start + 1; i < end; i++) {
    for (j = i - 1; j > 1; j--) {
      if (i % j == 0) {
        check = false;
      }
    }
    if (check) {
      numbers.push(i);
    }
    check = true;
  }
  if (numbers.length > 0) {
    return numbers;
  } else {
    return null;
  }
}
