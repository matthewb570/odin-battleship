export default class Ship {
    name;
    length;
    hitCount;
    
    constructor(length, name) {
        this.name = name;
        this.length = length;
        this.hitCount = 0;
    }

    isSunk() {
        if (this.hitCount < this.length) {
            return false;
        }

        return true;
    }

    hit() {
        this.hitCount++;
    }
}