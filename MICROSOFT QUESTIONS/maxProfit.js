// ### **13. Find the maximum single sell profit**

// **Problem Statement**: Given a list of daily stock prices (integers for simplicity), return the buy and sell prices that will maximize the single buy/sell profit. If you can’t make any profit, try to minimize the loss.

// For the below examples, buy (orange) and sell (green) prices for making a maximum profit are highlighted.

const findMaxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(findMaxProfit(prices));
