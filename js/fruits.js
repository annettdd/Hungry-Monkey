//------------BANANA---------------
class Banana {
    constructor(x, y) {
            this.width = 70; // hardcoded width from the img 
            this.height = 48; // hardcoded height from the img 
            this.x = Math.floor(Math.random() * (window.innerWidth - this.width)); // random x, where width of your actual screen is decreased by the width of the banana (it will never cross the edge of the screen)
            this.y = window.innerHeight + 100; //your actual screen height + 50 - banana start falling down from above (we are counting fron the bottom - this is why it is not -50)
            this.started = new Date(); //External, ready function - counting exact date and time
            this.speed = (Math.random() * 170 + 30); //random speed (170-max, 30-min)
        }
        //create bananas
    render() {
        let timePassed = (new Date() - this.started) / 1000; //time passed in seconds
        this.y = window.innerHeight + 100 - timePassed * this.speed; // new speed after refreshing the screen
        let $banana = document.createElement("img"); //creating an img
        // this.$banana = $banana;
        $banana.setAttribute("src", "./images/banana.png");
        $banana.setAttribute("class", "banana");
        $banana.width = this.width; // we don't need to put width and height in css, this will take it from the Banana's constructor
        $banana.height = this.height;
        $banana.style.left = `${this.x}px`;
        $banana.style.bottom = `${this.y}px`;
        document.body.appendChild($banana);
    }
    reset() {
        this.banana = [];
        this.y = window.innerHeight + 100;
        this.x = Math.floor(Math.random() * (window.innerWidth - this.width));
        this.speed = (Math.random() * 170 + 30);
    }

}


//------------COCONUT---------------
class Coconut {
    constructor(x, y) {
        this.width = 60;
        this.height = 65;
        this.x = Math.floor(Math.random() * (window.innerWidth - this.width));
        this.y = window.innerHeight + 100;
        this.started = new Date();
        this.speed = (Math.random() * 170 + 30); //random speed
    }

    //create coconuts
    render() {
        let timePassed = (new Date() - this.started) / 1000; ///time passed in seconds
        this.y = window.innerHeight + 100 - timePassed * this.speed;
        let $coconut = document.createElement("img");
        this.$coconut = $coconut;
        $coconut.setAttribute("src", "./images/coconut.png");
        $coconut.setAttribute("class", "coconut");
        $coconut.width = this.width;
        $coconut.height = this.height;
        $coconut.style.left = `${this.x}px`;
        $coconut.style.bottom = `${this.y}px`;
        document.body.appendChild($coconut);
    }
    reset() {
        this.y = window.innerHeight + 100;
        this.x = Math.floor(Math.random() * (window.innerWidth - this.width));
        this.speed = (Math.random() * 170 + 30);
    }
}