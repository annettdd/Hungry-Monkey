//create the scoreboard
class Scoreboard {
    constructor(score, highScore) {
        this.score = score;
        this.highScore = highScore;
    }
    render() {
        let $scoreBoard = document.createElement("div");
        $scoreBoard.innerHTML = `
            <div id="points">
                <span>Points: </span><span id="score">${this.score}</span>
            </div>
            <div id="h-score">
                <span>High Score: </span><span id="highscore">${this.highScore}</span>
            </div>
        `
        $scoreBoard.setAttribute("id", "scoreboard");
        document.body.appendChild($scoreBoard);
    }
}