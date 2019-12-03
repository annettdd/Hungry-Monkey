class Game {
    constructor(width, height) {
        this.gamewidth = width;
        this.gameheight = height;
        this.interval = 0;
        this.score = 0;
        this.highScore = [];
        this.controls(); // initialize controls
        this.monkey = null;
        this.bananas = [new Banana(), new Banana(), new Banana(), new Banana(), new Banana(), new Banana()];
        this.coconuts = [new Coconut(), new Coconut()];
        this.scoreBoard = new Scoreboard(0, 0);

    }

    controls() {
        let fixThis = this;
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 13: //Enter
                    // intro.reset();  
                    debugger
                    intro.style.display = "none";
                    setInterval(() => {
                        // game over won?

                        // check for collision
                        // collission(monkey, bananas[i]);
                        // collission(monkey, coconuts[i]);
                        fixThis.render();
                    }, 100)

                    setInterval(() => {
                            fixThis.addBanana(new Banana());
                        }, 2000)
                        // intro.startGame();
                    setInterval(() => {
                        fixThis.addCoconut(new Coconut());
                    }, 2500)

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
        document.body.innerHTML = "";
        this.scoreBoard.render();
        this.monkey.render();
        this.renderBananas();
        this.renderCoconuts();
    }
};

// function collission($element1, $element2) {
//     var a = {
//         y: 100 - $element1.offsetTop - $element1.height,
//         x: $element1.offsetLeft,
//         height: $element1.height,
//         width: $element1.width
//     }
//     var b = {
//         y: 100 - $element2.offsetTop - $element2.height,
//         x: $element2.offsetLeft,
//         height: $element2.height,
//         width: $element2.width
//     }

//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }