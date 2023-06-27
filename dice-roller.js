const num = process.argv.slice(2);
console.log(num);
const rollingDice = (num) => {
  let diceResults = [];
  for (let i = 0; i < num; i++) {
    diceResults.push(Math.ceil((Math.random() * 6)) + 1);
  }
  return diceResults;
};
console.log(rollingDice(num));
console.log("Rolled " + num + " dice: " + rollingDice(num));