function capitalizeFirstLetter(str) {
  const split = str.split(" ");
  split.forEach((char, idx) => {
    char = char[0].toUpperCase() + char.slice(1);
    split[idx] = char;
  });

  return split.join(" ");
}
