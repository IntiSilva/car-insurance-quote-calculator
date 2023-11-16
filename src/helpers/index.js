export function obtainYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function estimateBrand(brand) {
  let increase;

  switch (brand) {
    case "1":
      increase = 1.3;
      break;
    case "2":
      increase = 1.15;
      break;
    case "3":
      increase = 1.05;
      break;
    default:
      break;
  }

  return increase;
}

export function estimatePlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatMoney(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
