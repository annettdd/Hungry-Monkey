class Game {
    constructor(width, height) {
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.highScore = [];
        this.controls(); // initialize controls
        this.monkey = null;
        this.bananas = [new Banana(), new Banana(), new Banana(), new Banana(), new Banana()];
        this.coconuts = [new Coconut(), new Coconut()];
        this.scoreBoard = new Scoreboard(0, 0);
        this.score = this.scoreBoard.score;


    }

    controls() {
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 13: //Enter
                    // intro.style.display = "none";
                    gameBoard.startGame();
                    break;
            }
        });
    }
    startGame() {
        var fixThis = this;
        setInterval(() => {
            fixThis.render();
            fixThis.checkCollissionBanana();
            fixThis.checkCollissionCoconut();

        }, 100)
        setInterval(() => {
            fixThis.addBanana(new Banana());
        }, 2000)
        setInterval(() => {
            fixThis.addCoconut(new Coconut());
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
            this.checkCollissionCoconut();
            this.checkCollissionBanana();
            document.body.innerHTML = "";
            this.scoreBoard.render();
            this.monkey.render();
            this.renderBananas();
            this.renderCoconuts();
        }
        //Collission banana
    checkCollissionBanana() {
            var bananas = this.bananas
            var monkey = this.monkey
            for (let i = 0; i < bananas.length; i++) {
                if (collission(monkey, bananas[i])) {
                    this.scoreBoard.score++
                        bananas = bananas.splice(i, 1);
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
                // sound;  
                this.stop();
                this.showGameover();

                window.location.reload(true);
                return true;
            }
        }
        return false
    }
    stop() {
        this.monkey = null;
        this.bananas = 0;
        this.coconuts = 0;
        intro.style.display = "flex"
    }

    showGameover() {
        let $showGameover = document.createElement("div");
        $showGameover.innerHTML = `
            <div>
                <span>GAME OVER!</span><br> 
                <span>You collected</span><br> 
                <span>${this.scoreBoard.score}</span><br>
                <span>bananas.</span>
            </div>
        `
        $showGameover.setAttribute("id", "gameover");
        document.body.appendChild($showGameover);
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