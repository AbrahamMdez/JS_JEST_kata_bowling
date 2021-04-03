export class Bowling {

    constructor() {
        /* let score = 0; */
        this.throws = [];
    }

    addThrow(pins) {
        /* this.score += pins; */
        this.throws.push(pins);
    };

    getScore() {
        /* return this.score; */
        let score = 0;

        for (let frameIndex = 0, throwIndex = 0; frameIndex < 10; ++frameIndex, throwIndex += 2) {
            score += this.throws[throwIndex];
            score += this.throws[throwIndex + 1];

            if(this.throws[throwIndex] + this.throws[throwIndex + 1] === 10) {
                score += this.throws[throwIndex + 2];
            };
        }
        return score;
    }
};