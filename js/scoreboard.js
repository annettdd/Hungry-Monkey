//create the scoreboard
class Scoreboard {
    constructor(score) {
        this.score = 0
    }
    render() {
        let $scoreBoard = document.createElement("div");
        $scoreBoard.innerHTML = `
            <div>
                <span>Points: </span><span id="score">${this.score}</span>
            </div>
        `
        $scoreBoard.setAttribute("id", "scoreboard");
        document.body.appendChild($scoreBoard);
    }
    reset() {
        this.score = 0
    }
}