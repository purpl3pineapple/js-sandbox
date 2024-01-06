function displayLikes(names) {
  switch (names.length) {
    case 0:
    case undefined:
      return "no one likes this";

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names.join(" and ")} like this`;

    case 3:
      return `${names.slice(0, 2).join(", ")} and ${names[2]} like this`;

    default:
      return `${names.slice(0, 2).join(", ")} and ${
        names.slice(1, -1).length
      } others like this`;
  }
}
