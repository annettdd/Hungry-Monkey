class Monkey {
    constructor(source) {
        this.source = source;
        this.x = (window.innerWidth / 2) - this.width / 2; //middle of the screen
        this.y = 5; //sets monkey a bit higher
        this.initControls();
    }

    height = 150;
    width = 115; //monkey size(width)
    speed = 20; // monkey speed (px)

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
            }
        });
    }

    //create monkey (monkey_boy)
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

    // chooseAvatarBoy() {
    //     this.avatarBoy.onclick = function() {
    //         $monkey.setAttribute("src", "./images/monkey-boy.png");
    //     }
    // }
    // chooseAvatarGirl() {
    //     this.avatarGirl.onclick = function() {
    //         $monkey.setAttribute("src", "./images/monkey-girl.png");
    //     }
    // }

    reset() {
        this.x = (window.innerWidth / 2) - this.width / 2;
        this.y = 5;
    }
}