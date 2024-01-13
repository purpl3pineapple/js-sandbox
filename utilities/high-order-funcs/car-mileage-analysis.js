function analyzeCarMileage(cars) {
  const totalMileage = parseFloat(
    cars.reduce((total, { mileage }) => total + mileage, 0).toFixed(2)
  );

  return {
    totalMileage,
    averageMileage: parseFloat((totalMileage / cars.length).toFixed(2)),
    highestMileageCar: cars.find(
      ({ mileage }) =>
        Math.max(...cars.map(({ mileage }) => mileage)) === mileage
    ),
    lowestMileageCar: cars.find(
      ({ mileage }) =>
        Math.min(...cars.map(({ mileage }) => mileage)) === mileage
    ),
  };
}
