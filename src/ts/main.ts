import User from './user/User';
import Slot from './slot/Slot';
import Reel from './slot/Reel';

let reels: Array<Reel> = [
    new Reel([1, 3, 3, 3, 3, 2, 7, 4, 4, 4, 4, 7, 7, 5, 5, 5, 5, 2, 2, 0, 6, 6, 6, 6, 3]),
    new Reel([1, 7, 5, 7, 5, 5, 5, 2, 6, 2, 6, 6, 6, 6, 3, 0, 3, 3, 3, 7, 4, 7, 4, 4, 4]),
    new Reel([1, 3, 3, 3, 3, 7, 7, 0, 4, 4, 4, 4, 7, 7, 5, 5, 5, 5, 2, 2, 6, 6, 6, 6, 3])
];

//construct slot game
const game = new Slot(reels);

//construct user
const gamer = new User('Root gamer', 1000, game);

document.getElementById("startGameButton")?.addEventListener("click", () => {
    gamer.spin();
});