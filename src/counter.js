
const coinCounter = (amount, coins) => {
  const wholeAmount = amount * 100;
  return counter(wholeAmount, coins);
}

const counter = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      const remainder = (amount - coins[0]);
      return [coins[0]].concat(counter(remainder, coins));
    } else {
      coins.shift();
      return counter(amount, coins);
    }
  }
}


module.exports = { counter, coinCounter };
// const coinCounter = (amount) => {

//   const coinArray = [];
//   if (amount >= .25) {
//     console.log("ding");
//     coinArray.push("quarter")
//     coinCounter(amount - .25);
  
//   }
//   return coinArray;
// }

// console.log(coinCounter(1))