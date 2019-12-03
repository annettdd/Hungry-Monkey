class Game {
    constructor(width, height) {
            this.gamewidth = width;
            this.gameheight = height;
            this.interval = 0;
            this.score = 0;
            this.highScore = [];
            this.controls(); // initialize controls
            this.monkey = null;
            this.bananas = [new Banana(), new Banana(), new Banana(), new Banana(), new Banana()];
            this.coconuts = [new Coconut(), new Coconut()];
            this.scoreBoard = new Scoreboard(0, 0);

        }
        // startGame() {
        //     this.score = 0;
        //     this.interval = setInterval(() => {
        //         // Activate controls
        //         for (let i = 0; i < coconuts.length; i++) {
        //             coconuts[i].render();
        //         }

    //         for (let i = 0; i < rewardInstances.length; i++) {
    //             bananas[i].render();
    //         }
    //         // update scoreboard
    //         score.innerHTML = this.score;

    //     }, 10)
    // }
    controls() {
        let fixThis = this;
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 13: //Enter
                    // intro.reset();  
                    intro.style.display = "none";

                    setInterval(() => {
                        // game over won?

                        // check for collission

                        fixThis.render();
                        if (fixThis.checkCollissionBanana()) {
                            fixThis.score++
                                fixThis.updateScore();
                        }
                    }, 1)

                    setInterval(() => {
                            fixThis.addBanana(new Banana());
                        }, 2000)
                        // intro.startGame();
                    setInterval(() => {
                        fixThis.addCoconut(new Coconut());
                    }, 3000)

                    break;
            }
        });
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
        // updateScore() {
        //         this.score++
        //     }
        //Collission banana
    checkCollissionBanana() {
            var bananas = this.bananas
            var monkey = this.monkey
            for (let i = 0; i < bananas.length; i++) {
                if (collission(monkey, bananas[i])) {
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


                    // scoreboard

                    // sound;  

                    alert("GameOver!");

                    return true;
                }
            }
            return false
        }
        // message() {
        //     debugger
        //     message.innerHTML = "You were killed" + "</br>" + "by a coconut!!!";
        //     gameMessage.style.display = "flex";
        //     monkey.reset();
        // }
        // reset() {
        //     this.interval = clearInterval(this.interval);
        //     this.message();
        //     for (let i = 0; i < coconuts.length; i++) {
        //         coconuts[i].reset();
        //     }
        //     for (let i = 0; i < bananas.length; i++) {
        //         bananas[i].reset();
        //     }
        // }
};

//A global helper function
function collission(element1, element2) {
    return !(
        ((element1.y + element1.height) < (element2.y)) ||
        (element1.y > (element2.y + element2.height)) ||
        ((element1.x + element1.width) < element2.x) ||
        (element1.x > (element2.x + element2.width))
    );
}