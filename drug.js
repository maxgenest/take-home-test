export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrug() {
    return {
      name: this.name,
      expiresIn: this.updateExpiresIn(),
      benefit: this.updateBenefit(),
    };
  }

  updateExpiresIn() {
    let newExpiresIn;

    if (this.name === "Magic Pill") {
      newExpiresIn = this.expiresIn;
    } else {
      newExpiresIn = this.expiresIn - 1;
    }

    return newExpiresIn;
  }

  updateBenefit() {
    let newBenefit;
    let incrementor = 1;

    if (this.name === "Herbal Tea") {
      incrementor = -incrementor;
    }

    if (this.name === "Magic Pill") {
      incrementor = 0;
    }

    if (this.expiresIn < 0) {
      newBenefit = this.benefit - 2 * incrementor;
    } else {
      newBenefit = this.benefit - incrementor;
    }

    if (newBenefit < 0) {
      return 0;
    } else if (newBenefit > 50) {
      return 50;
    } else {
      return newBenefit;
    }
  }
}
