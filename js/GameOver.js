class GameOver {
    constructor(points) {
        this.points = points;
    }
    render() {

        let $gameover = document.createElement("div");
        $gameover.setAttribute("id", "gameover");
        $gameover.innerHTML = `        
            <div id="gameover">
                <span>GAME OVER!</span><br>
                <span>YOUR POINTS: ${this.points}</span><br>
                <button id="gameoverButton">Play again</button>
            </div>`

        document.body.appendChild($gameover);

    }
}