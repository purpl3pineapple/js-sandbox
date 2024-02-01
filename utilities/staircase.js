function staircase(n) {
  const stairs = [];
  let base = "";
  const stair = "#";
  let start = 0;

  while (start < n) {
    base = base.concat(stair);
    stairs.push(base);
    start++;
  }

  const stcs = stairs.map((step, idx) => {
    let count = n - idx;
    while (count > 1) {
      step += " ";
      count--;
    }

    return step.split("").reverse().join("");
  });

  stcs.forEach(stair => console.log(stair));
}

staircase(10);
