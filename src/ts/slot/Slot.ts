import Reel from './Reel';

import Randomizer from '../tools/randomizer';

export default class Slot{
    reels: Array<Reel> = [];

    constructor(reels: Array<Reel>){
        this.reels = reels;
    }

    spin(){
        if(this.reels.length > 0){
            this.reels.forEach((reel) => {
                reel.startPosition = reel.stopPosition;
                reel.stopPosition = Randomizer(reel.strip.length);
            });
        }
    }

    generateScreen(){
        
    }
}