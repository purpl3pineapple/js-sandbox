window.addEventListener("load", () => {
  const purchaseBtn = document.getElementById("purchase-btn");
  const total = document.getElementById("total-amt");
  const pennies = document.getElementById("pennies");
  const nickels = document.getElementById("nickels");
  const dimes = document.getElementById("dimes");
  const quarters = document.getElementById("quarters");
  const ones = document.getElementById("ones");
  const fives = document.getElementById("fives");
  const tens = document.getElementById("tens");
  const twenties = document.getElementById("twenties");
  const hundreds = document.getElementById("hundreds");

  const prices = [19.5, 3.26];

  const currency = new Map([
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["HUNDRED", 100],
  ]);

  const cashInDrawer = ({
    pennies = 0,
    nickels = 0,
    dimes = 0,
    quarters = 0,
    ones = 0,
    fives = 0,
    tens = 0,
    twenties = 0,
    hundreds = 0,
  }) => {
    const bills = new Map(
      [...currency].map(([unit, val]) => {
        switch (unit) {
          case "PENNY":
            return [unit, val * pennies];

          case "NICKEL":
            return [unit, val * nickels];

          case "DIME":
            return [unit, val * dimes];

          case "QUARTER":
            return [unit, val * quarters];

          case "ONE":
            return [unit, val * ones];

          case "FIVE":
            return [unit, val * fives];

          case "TEN":
            return [unit, val * tens];

          case "TWENTY":
            return [unit, val * twenties];

          case "HUNDRED":
            return [unit, val * hundreds];
        }
      })
    );

    const total = [...bills].reduce((amt, [_, val]) => amt + val, 0);

    return { bills, total };
  };

  const drawer = cashInDrawer({
    pennies: 200,
    nickels: 55,
    dimes: 110,
    quarters: 35,
    ones: 45,
    fives: 12,
    tens: 13,
    twenties: 8,
    hundreds: 3,
  });

  const purchase = () => {
    const currentDrawer = drawer.bills;
    console.log({ currentDrawer });
    let cash = parseFloat(document.getElementById("cash").value);
    const changeDue = prices[0] - cash;

    console.log({ currentDrawer });
    /* if (drawer.total < changeDue) {

    } else if (drawer.total === changeDue) {

    } else {

    } */
  };

  purchaseBtn.addEventListener("click", purchase);
});
