class Ship {
    length;
    hitCount;
    
    constructor(length) {
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

export default Ship;