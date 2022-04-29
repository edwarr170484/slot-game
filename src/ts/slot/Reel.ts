import Banner from './Banner';

export default class Reel{
    stopPosition: number;
    startPosition: number;
    prevPosition: number;
    nextPosition: number;
    strip: Array<Banner> = [];

    banners: Array<Banner> = [
        new Banner('sevens.jpg', 0),
        new Banner('seven.jpg', 1),
        new Banner('orange.jpg', 2),
        new Banner('bell.jpg', 3),
        new Banner('plum.jpg', 4),
        new Banner('raspberry.jpg', 5),
        new Banner('bar.jpg', 6),
        new Banner('cherry.jpg', 7)
    ];

    constructor(indexes: Array<number>){
        if(indexes.length > 0){
            indexes.forEach(index => this.strip.push(this.banners[index]));
        }
        this.startPosition = this.stopPosition = Math.floor(Math.random() * this.strip.length);
        
        this.prevPosition = this.stopPosition - 1;
        this.nextPosition = this.stopPosition + 1;

        if(this.prevPosition < 0){
            this.prevPosition = this.strip.length - 1;
        }

        if(this.nextPosition >= this.strip.length){
            this.nextPosition = 0;
        }
    }
}