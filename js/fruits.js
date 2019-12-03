//------------BANANA---------------
class Banana {
    constructor(x, y) {
            this.width = 70;
            this.height = 48;
            this.x = Math.floor(Math.random() * (window.innerWidth - this.width));
            this.y = window.innerHeight + 50;
            this.started = new Date();
            this.speed = (Math.random() * 170 + 30); //random speed
            // this.$banana = null;
        }
        //create bananas
    render() {
        let timePassed = (new Date() - this.started) / 1000;
        this.y = window.innerHeight + 50 - timePassed * this.speed; //time passed in seconds
        let $banana = document.createElement("img");
        this.$banana = $banana;
        $banana.setAttribute("src", "./images/banana.png");
        $banana.setAttribute("class", "banana");
        $banana.width = this.width;
        $banana.height = this.height;
        $banana.style.left = `${this.x}px`;
        $banana.style.bottom = `${this.y}px`;
        document.body.appendChild($banana);
    }
}

//------------COCONUT---------------
class Coconut {
    constructor(x, y) {
        this.width = 60;
        this.height = 65;
        this.x = Math.floor(Math.random() * (window.innerWidth - this.width));
        this.y = window.innerHeight + 50;
        this.started = new Date();
        this.speed = (Math.random() * 170 + 30); //random speed
    }

    //create coconuts
    render() {
        let timePassed = (new Date() - this.started) / 1000; ///time passed in seconds
        this.y = window.innerHeight + 50 - timePassed * this.speed;
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
}