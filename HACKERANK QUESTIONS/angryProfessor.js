const angryProfessor = (k, a) => {
  let negativesCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) negativesCount++;
  }

  if (negativesCount >= k) return "NO";
  return "YES";
};
(k = 3), (a = [-1, -3, 4, 2]);
// (k = 2), (a = [0, -1, 2, 1]);
console.log(angryProfessor(k, a));
