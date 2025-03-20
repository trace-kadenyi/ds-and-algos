function acmTeam(topics) {
  let maxTopics = 0,
    maxTeams = 0,
    n = topics.length,
    m = topics[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let topicskNown = 0;

      for (let k = 0; k < m; k++) {
        if (topics[i][k] === "1" || topics[j][k] === "1") topicskNown++;
      }

      if (topicskNown > maxTopics) {
        maxTopics = topicskNown;
        maxTeams = 1;
      } else if (topicskNown === maxTopics) maxTeams++;
    }
  }
  return [maxTopics, maxTeams];
}

// Example usage:
const topics = ["10101", "11100", "11010", "00101"];
console.log(acmTeam(topics)); // Output: [5, 2]
