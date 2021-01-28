import Dice from './dice';

export default class Character {
    constructor(options) {
        this.name = options.name;
        this.hit_points = (new Dice({ sides: 4, quantity: 2})).roll().total();
        return this;
    }

    attack() {
        return (new Dice({sides: 6, quantity: 1})).roll().total();
    }

    hit(value) {
        this.hit_points - value;
        if(this.hit_points < 0) {
            EventBus.fire('defeated',{
                character: this,
            });
        }
    }

    init(){
        return (new Dice({sides: 20, quantity: 1})).roll().total();
    }
}