function highestScoringWord(str) {
  const results = str
    .toLowerCase()
    .split(" ")
    .map(word => ({
      word,
      score: word
        .split("")
        .reduce((total, char) => total + char.charCodeAt(0) - 96, 0),
    }));

  const scores = results.map(({ score }) => score);

  const winner = results.find(({ score }) => score === Math.max(...scores));

  return winner.word;
}
