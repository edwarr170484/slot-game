import Slot from '../slot/Slot';

export default class User{
    name: string;
    credit: number;
    game: Slot;

    constructor(name: string, credit: number, game: Slot){
        this.name = name;
        this.credit = credit;
        this.game = game;
    }

    spin(){
        this.game.spin();
    }
}