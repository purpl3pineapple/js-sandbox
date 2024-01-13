const generateHashtag = str =>
  str === "" || str.length > 140
    ? false
    : `#${str
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join("")}`;
