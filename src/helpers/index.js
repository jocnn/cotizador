// diferencia de año
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year
}

// americano 15%, europeo 30% y asiatico 5%
export function caculateBrand(brand) {
  let increment

  switch (brand) {
    case "1":
      increment = 1.3
      break
    case "2":
      increment = 1.15
      break
    case "3":
      increment = 1.05
      break
    default:
      break
  }
  return increment
}

export function selectingPlan(plan) {
  return plan === "1" ? 1.2 : 1.5
}

export function formatMoney(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
}