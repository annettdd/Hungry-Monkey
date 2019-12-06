class Monkey {
    constructor(source) {
        this.source = source;
        this.x = (window.innerWidth / 2) - this.width / 2; //middle of the screen
        this.y = 5; //sets monkey 5px higher
        this.initControls();
        this.jumping = false;
    }
    height = 150;
    width = 115; //monkey size(width)
    speed = 20; // monkey speed (px)

    //Monkey jump
    jump() {
            let startJump = new Date();
            let jumpRef = setInterval(() => {
                let dt = (new Date() - startJump) / 100;
                if (this.y <= 350) {
                    this.y += 9 * dt - Math.pow(dt, 2);
                }

                if (this.y <= 0) {
                    clearInterval(jumpRef);
                    this.y = 0;
                    this.jumping = false;
                }
            }, 50)
        }
        //Monkey controls left / right (with speed, screen edges and monkey width)
    initControls() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case ("ArrowRight"):
                    //right side screen edge - monkey can not go behind a screen
                    if (!(this.x + this.speed > (window.innerWidth - this.width))) this.x += this.speed;
                    break;
                case ("ArrowLeft"):
                    //left screen edge - monkey can not go behind a screen
                    if (!(this.x - this.speed < 0)) this.x -= this.speed;
                    break;
                case ("ArrowUp"):
                    if (!this.jumping) {
                        this.jumping = true;
                        this.jump();
                    }
                    break;
            }
        })
    };
    render() {
        let $monkey = document.createElement("img");
        $monkey.setAttribute("src", `${this.source}`);
        $monkey.setAttribute("id", "monkey");
        $monkey.style.left = `${this.x}px`;
        $monkey.style.bottom = `${this.y}px`;
        $monkey.style.width = `${this.width}px`;
        $monkey.style.height = `${this.height}px`;
        document.body.appendChild($monkey);
    }

    reset() {
        this.x = (window.innerWidth / 2) - this.width / 2;
        this.y = 5;
    }
}