function calculateTotalSalesWithTax(products, tax) {
  const productTotal = products.reduce(
    (totalPrice, { price, quantity }) => totalPrice + price * quantity,
    0
  );

  const salesTax = (tax / 100) * productTotal;

  return parseFloat((productTotal + salesTax).toFixed(2));
}
