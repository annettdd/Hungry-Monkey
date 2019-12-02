class Monkey {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.initControls();
    }
    width = 8; //monkey size(width)
    speed = 2; // monkey speed

    //Monkey controls left / right (with speed, screen edges and monkey width)
    initControls() {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case ("ArrowRight"):
                    if (!((this.x + this.speed) > (100 - this.width))) this.x += this.speed;

                    break;
                case ("ArrowLeft"):
                    if (!((this.x + this.speed) < (0 + this.width - 5))) this.x -= this.speed;
                    break;
            }
        });
    }



    //create monkey (monkey_boy)
    render() {
        let $monkey = document.createElement("img");
        $monkey.setAttribute("src", "./images/monkey-boy.png");
        $monkey.setAttribute("id", "monkey");
        $monkey.style.left = `${this.x}vw`;
        $monkey.style.bottom = `${this.y}%`;
        $monkey.style.width = `${this.width}vw`;
        document.body.appendChild($monkey);
    }
}