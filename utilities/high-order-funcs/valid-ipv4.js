const isValidIPv4 = ip =>
  /^(\d{1,4})\.(\d{1,4})\.(\d{1,4})\.(\d{1,4})$/.test(ip) &&
  ip
    .split(".")
    .every(
      octet =>
        octet >= 0 && octet <= 255 && parseInt(octet).toString() === octet
    );
