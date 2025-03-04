const climbingLeaderboard = (ranked, player) => {
  // remove duplicate ranks
  let uniqueRanks = [...new Set(ranked)];

  let results = [];
  let index = uniqueRanks.length - 1; // start from the lowest rank

  for (let score of player) {
    // move up the leaderboard while the player's score is greater
    while (index >= 0 && score >= uniqueRanks[index]) {
      index--;
    }
    results.push(index + 2);
  }
  return results;
};

(ranked = [100, 90, 90, 80]), (player = [70, 80, 105]);
console.log(climbingLeaderboard(ranked, player));
