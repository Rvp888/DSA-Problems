// Min Cost Climbing Stairs:

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.

// Leetcode link: https://leetcode.com/problems/min-cost-climbing-stairs/description/

// Solution:

var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  let minCost1 = cost[0];
  let minCost2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let newMinCost = cost[i] + Math.min(minCost1, minCost2);

    minCost1 = minCost2;
    minCost2 = newMinCost;
  }

  return Math.min(minCost1, minCost2);
};

// TC => O(n)
// SC => )(1)

console.log(minCostClimbingStairs((cost = [10, 15, 20])));
