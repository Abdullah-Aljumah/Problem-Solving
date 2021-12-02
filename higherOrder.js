function findSenior(list) {
  let max = 0;

  for (i = 0; i < list.length; i++) {
    if (list[i].age > max) {
      max = list[i].age;
    }
  }
  let answer = list.filter((item) => item.age === max);
  return answer;
}
