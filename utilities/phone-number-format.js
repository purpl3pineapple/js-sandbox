const formatPhoneNumber = nums =>
  `(${nums.slice(0, 3).join("")}) ${nums.slice(3, 6).join("")}-${nums
    .slice(6)
    .join("")}`;
