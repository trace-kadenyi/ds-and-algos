const gradingStudents = (grades) => {
  let n = grades.length;

  for (let i = 0; i < n; i++) {
    if (grades[i] % 5 !== 0) {
      let nextNum = Math.ceil(grades[i] / 5) * 5;

      if (nextNum - grades[i] < 3 && grades[i] >= 38) {
        grades[i] = nextNum;
      }
    }
  }
  return grades;
};

// grades = [73, 67, 38, 33];
grades = [4, 29, 38];
console.log(gradingStudents(grades));
