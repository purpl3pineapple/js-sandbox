function diceGameSimulation(simulations) {
  const diceRoll = () => Math.floor(Math.random() * 6) + 1;
  const rolls = [];
  const rollDice = () => {
    const dice1 = diceRoll();
    const dice2 = diceRoll();
    const sum = dice1 + dice2;
    const roll = {
      dice1,
      dice2,
      sum,
    };

    switch (sum) {
      case 7:
      case 11:
        return { ...roll, result: "win" };

      case 2:
      case 3:
      case 12:
        return { ...roll, result: "lose" };

      default:
        return { ...roll, result: "roll again" };
    }
  };

  while (simulations > 0) {
    rolls.push(rollDice());
    simulations--;
  }

  return rolls;
}
