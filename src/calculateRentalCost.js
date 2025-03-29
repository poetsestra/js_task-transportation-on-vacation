/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalSum = 40 * days;

  if (days >= 7) {
    totalSum = totalSum - 50;
  } else if (days >= 3) {
    totalSum = totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
