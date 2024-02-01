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

const statuses = {
  open: "OPEN",
  closed: "CLOSED",
  insufficient: "INSUFFICIENT_FUNDS",
  cust_insufficient: "Customer does not have enough money to purchase the item",
  no_change: "No change due - customer paid with exact cash",
};
const getRegister = totals =>
  [...currency.entries()].map(([unit, amt]) => [
    unit,
    Number((amt * totals[unit]).toFixed(2)),
  ]);

const createDrawer = (
  PENNY = 0,
  NICKEL = 0,
  DIME = 0,
  QUARTER = 0,
  ONE = 0,
  FIVE = 0,
  TEN = 0,
  TWENTY = 0,
  HUNDRED = 0
) => ({
  PENNY,
  NICKEL,
  DIME,
  QUARTER,
  ONE,
  FIVE,
  TEN,
  TWENTY,
  HUNDRED,
});

const drawers = [
  createDrawer(101, 41, 31, 17, 90, 11, 2, 3, 1),
  createDrawer(1),
  createDrawer(1, 0, 0, 0, 1),
  createDrawer(50),
];

const cid = getRegister(drawers[3]);
const price = 19.5;

window.addEventListener("load", () => {
  const cashInput = document.getElementById("cash");
  const purchaseBtn = document.getElementById("purchase-btn");
  const changeDueDiv = document.getElementById("change-due");
  const pennies = document.getElementById("pennies");
  const nickels = document.getElementById("nickels");
  const dimes = document.getElementById("dimes");
  const quarters = document.getElementById("quarters");
  const ones = document.getElementById("ones");
  const fives = document.getElementById("fives");
  const tens = document.getElementById("tens");
  const twenties = document.getElementById("twenties");
  const hundreds = document.getElementById("hundreds");

  function updateRegister(drawer) {
    pennies.innerText = `$${drawer.get("PENNY").toFixed(2)}`;
    nickels.innerText = `$${drawer.get("NICKEL").toFixed(2)}`;
    dimes.innerText = `$${drawer.get("DIME").toFixed(2)}`;
    quarters.innerText = `$${drawer.get("QUARTER").toFixed(2)}`;
    ones.innerText = `$${drawer.get("ONE")}`;
    fives.innerText = `$${drawer.get("FIVE")}`;
    tens.innerText = `$${drawer.get("TEN")}`;
    twenties.innerText = `$${drawer.get("TWENTY")}`;
    hundreds.innerText = `$${drawer.get("HUNDRED")}`;
  }

  function newTextNode(value) {
    const container = document.createElement("p");
    const text = document.createTextNode(value);
    container.appendChild(text);
    return container;
  }

  function newDenomNode(denom, value) {
    return newTextNode(`${denom}: $${value}`);
  }

  function updateChangeDueUI(...nodes) {
    changeDueDiv.innerHTML = "";

    nodes.forEach(node => {
      changeDueDiv.appendChild(node);
    });
  }

  function updateChangeDue(status, change) {
    const statusNode = newTextNode(`Status: ${status}`);

    const registerChange =
      status === statuses.closed
        ? [...change.entries()]
            .filter(denom =>
              ["PENNY", "NICKEL", "DIME", "QUARTER"].includes(denom[0])
            )
            .map(([unit, val]) =>
              newDenomNode(unit, val > 0 ? val.toFixed(2) : val)
            )
        : [...change.entries()].map(([unit, val]) => newDenomNode(unit, val));

    updateChangeDueUI(statusNode, ...registerChange);
  }

  function updateUI(status, drawer, change) {
    updateRegister(drawer);
    updateChangeDue(status, change);
  }

  function purchase() {
    const register = {
      status: statuses.closed,
      drawer: new Map(cid),
      change: new Map(),
    };

    const cash = parseFloat(cashInput.value);

    const changeDue = cash - price;
    let change = Number(changeDue.toFixed(2));

    let totalCashInDrawer = Number(
      [...register.drawer.values()]
        .reduce((sum, curr) => sum + curr, 0)
        .toFixed(2)
    );

    if (changeDue < 0) {
      alert(statuses.cust_insufficient);
      return;
    } else if (changeDue === 0) {
      changeDueDiv.innerHTML = statuses.no_change;
      return;
    } else if (changeDue > totalCashInDrawer) {
      register.status = statuses.insufficient;
    } else {
      register.status =
        changeDue === totalCashInDrawer ? statuses.closed : statuses.open;

      if (changeDue === totalCashInDrawer) {
        [...register.drawer.entries()].reverse().forEach(([denom, value]) => {
          if (currency.get(denom) < 1) register.change.set(denom, value);
        });
      } else {
        [...currency.entries()].reverse().forEach(([unit, dollarAmt]) => {
          if (dollarAmt <= change) {
            while (
              dollarAmt <= change &&
              register.drawer.get(unit) - dollarAmt >= 0
            ) {
              register.drawer.set(unit, register.drawer.get(unit) - dollarAmt);
              register.change.set(
                unit,
                (register.change.get(unit) || 0) + dollarAmt
              );
              change = Number((change - dollarAmt).toFixed(2));
            }
          }
        });

        if (change !== 0 && changeDue !== totalCashInDrawer) {
          register.status = statuses.insufficient;
          register.change.clear();
        }
      }
    }

    updateUI(register.status, register.drawer, register.change);
  }

  purchaseBtn.addEventListener("click", purchase);
});
