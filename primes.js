function primes(start, end) {
  let numbers = [];
  let check = true;
  for (i = start ; i <= end; i++) {
    if (i == 1) {
      i = i+1
    }
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
