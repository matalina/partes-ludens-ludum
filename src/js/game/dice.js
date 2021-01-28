export default class Dice {
    constructor(options = null) {
        this.rolls = [];
        if(options !== null) {
            this.sides = options.sides;
            this.quantity = options.quantity;
        }
        return this;
    }

    roll() {
        for(let i = 0; i < this.quantity; i++) {
            let die = (Math.floor((Math.random() * 1000)) % this.sides) + 1;
            this.rolls.push(die);
        }
        return this;
    }

    removeLowest() {
        let lowest = this.sides + 1;
        let index = null;
        for(let i in this.rolls) {
            let roll = this.rolls[i];
            if(roll < lowest) {
                lowest = roll;
                index = i;
            }
        }
        delete this.rolls[index];
        return this;
    }

    total() {
        return this.rolls.reduce((total, roll) => {
            return total + roll;
        },0)
    }

}