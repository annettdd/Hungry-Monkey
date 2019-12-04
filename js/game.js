class Game {
    constructor(width, height) {
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.controls(); // initialize controls
        this.monkey = null;
        this.bananas = [new Banana(), new Banana(), new Banana(), new Banana(), new Banana()];
        this.coconuts = [new Coconut(), new Coconut()];
        this.scoreBoard = new Scoreboard(0, 0);
        this.score = this.scoreBoard.score;
        this.gameOver = null;
    }
    controls() {
        let fixThis = this;
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 13: //Enter
                    if (!fixThis.gameOver) {
                        gameBoard.startGame()
                    } else if (fixThis.gameOver) window.location.reload(true);
                    break;
            }
        });
    }

    startGame() {
        var fixThis = this;
        this.soundTrack();
        setInterval(() => {
            fixThis.render();
            fixThis.checkCollissionBanana();
            fixThis.checkCollissionCoconut();
        }, 10)

        setInterval(() => {
            if (!this.gameOver) fixThis.addBanana(new Banana());
        }, 2000)
        setInterval(() => {
            if (!this.gameOver) fixThis.addCoconut(new Coconut());
        }, 3000)
    }

    addMonkey(monkey) {
        this.monkey = monkey;
    }
    addBanana(banana) {
        this.bananas.push(banana);
    }
    addCoconut(coconut) {
        this.coconuts.push(coconut);
    }
    renderBananas() {
        for (let i = 0; i < this.bananas.length; i++) {
            this.bananas[i].render();
        }
    }
    renderCoconuts() {
        for (let i = 0; i < this.coconuts.length; i++) {
            this.coconuts[i].render();
        }
    }
    render() {
            document.body.innerHTML = "";
            if (this.scoreBoard) this.scoreBoard.render();
            if (this.monkey) this.monkey.render();
            if (this.bananas) this.renderBananas();
            if (this.coconuts) this.renderCoconuts();
            if (this.gameOver) this.gameOver.render();
        }
        //Collission banana
    checkCollissionBanana() {
            var bananas = this.bananas
            var monkey = this.monkey
            for (let i = 0; i < bananas.length; i++) {
                if (collission(monkey, bananas[i])) {
                    this.scoreBoard.score++
                        bananas = bananas.splice(i, 1);
                    this.soundBanana();
                    return true;
                }
            }
            return false
        }
        //Collission coconut
    checkCollissionCoconut() {
        var coconuts = this.coconuts
        var monkey = this.monkey
        for (let i = 0; i < coconuts.length; i++) {
            if (collission(monkey, coconuts[i])) {
                coconuts = coconuts.splice(i, 1);
                this.soundCoconut();
                this.gameOver = new GameOver(this.scoreBoard.score);
                this.render();
                this.stopGame();
                return true;
            }
        }
        return false
    }
    stopGame() {
        this.scoreBoard = null;
        this.monkey = null;
        this.bananas = [];
        this.coconuts = [];
    }
    soundBanana() {
        var sound = new Audio("../sounds/beerLevel.mp3");
        sound.play();
    }
    soundCoconut() {
        var sound = new Audio("../sounds/error.mp3");
        sound.play();
    }
    soundTrack() {
        var sound = new Audio("../sounds/lionKing.mp3");
        sound.play();
    }
};

//A global helper function
function collission(element1, element2) {
    return !(
        ((element1.y + element1.height) - 20 < (element2.y)) ||
        (element1.y > (element2.y + element2.height)) ||
        ((element1.x + element1.width) - 19 < element2.x) ||
        (element1.x > (element2.x + element2.width) - 25)
    );
}