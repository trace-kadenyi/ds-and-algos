const viralAds = (n) => {
  let shared = 5,
    liked = 0,
    cumulativeLikes = 0;

  for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared / 2);
    cumulativeLikes += liked;
    shared = liked * 3;
  }
  return cumulativeLikes;
};
console.log(viralAds(5));
