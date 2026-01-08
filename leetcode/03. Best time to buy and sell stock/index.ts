// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  let min = prices[0]
  let lastProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currentSellingPrice = prices[i] - min

    if (currentSellingPrice < 0) {
      min = prices[i]
    } else {
      if (currentSellingPrice > lastProfit) {
        lastProfit = currentSellingPrice
      }
    }
  }

  return lastProfit
};
