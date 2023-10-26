class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier = 1) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    this.surgeMultiplier = surgeMultiplier;
  }

  calculatePrice(distanceInMiles, timeInMinutes) {
    const basePrice = this.baseFare * this.surgeMultiplier;
    const distancePrice = this.costPerMile * distanceInMiles * this.surgeMultiplier;
    const timePrice = this.costPerMinute * timeInMinutes * this.surgeMultiplier;
    const totalPrice = basePrice + distancePrice + timePrice;

    return totalPrice;
  }
}

const priceCalculator = new UberPriceCalculator(5, 2, 0.5); 
const distance = 10; 
const time = 20; 

const price = priceCalculator.calculatePrice(distance, time);
console.log(`Estimated Uber price: $${price}`);
