/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    // `!== 1` valid for 0 alongwith undefined also ie it includes cases when flowerbed starts or ends with 0 but `=== 0` cannot include undefined
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      // plant a flower there
      n--;
      // skip the already checked (i + 1)th plot from being i as adjacent plots cannot be planted
      i++;
    }
  }

  return n === 0;
};
