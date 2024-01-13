function permutations(str) {
  if (str === "") return [""];

  let perms = [];

  for (let i = 0; i < str.length; i++) {
    const first = str.at(i);

    const rest = str.slice(0, i) + str.slice(i + 1);

    const subs = permutations(rest);

    for (const sub of subs) {
      perms.push(first + sub);
    }
  }

  return perms;
}
