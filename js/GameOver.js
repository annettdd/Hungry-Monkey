class GameOver {
    constructor(points) {
        this.points = points;
    }
    render() {
        let $gameover = document.createElement("div");
        $gameover.setAttribute("id", "gameover");
        $gameover.innerHTML = `        
            <div>
                <span id="redLetters">GAME OVER!</span><br>
                <span>YOU COLLECTED:</span><br><span> ${this.points} BANANAS</span><br>
                <span>PRESS <span class="intro-elements"><u>ENTER</u></span> TO PLAY AGAIN</span>
            </div>`
        document.body.appendChild($gameover);

    }
}