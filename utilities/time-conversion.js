function timeConversion(s) {
  let [hr, min, sec] = s.split(/\D+/gi);
  const [timeOfDay] = s.split(/[^a-z]+/gi).filter(item => item !== "");

  switch (timeOfDay) {
    case "AM":
    case "am":
      const amResult = Number(hr) === 12 ? 0 : Number(hr);
      const am = amResult < 10 ? `0${amResult}` : amResult;
      hr = amResult === 0 ? "00" : am;
      break;

    case "PM":
    case "pm":
      const pmResult = Number(hr) === 12 ? 12 : 12 + Number(hr);
      hr = pmResult;
      break;
  }

  return [hr, min, sec].join(":");
}
