//------------BANANA---------------
class Banana {
    constructor(x, y) {
            this.x = Math.floor(Math.random() * 100);
            this.y = -170;
            this.width = 70;
            this.height = 70;
            this.started = new Date();
            this.speed = 100; //random speed
        }
        //create bananas
    render() {
        let timePassed = (new Date() - this.started) / 1000; //time passed in seconds
        let $banana = document.createElement("img");
        $banana.setAttribute("src", "./images/banana.png");
        $banana.setAttribute("class", "banana");
        $banana.style.left = `${this.x}vw`;
        $banana.style.top = `${this.y + timePassed * this.speed}px`;
        document.body.appendChild($banana);
    }
}

//------------COCONUT---------------
class Coconut {
    constructor(x, y) {
        this.x = Math.floor(Math.random() * 100);
        this.y = -170;
        this.width = 60;
        this.height = 60;
        this.started = new Date();
        this.speed = 100;
    }

    //create coconuts
    render() {
        let timePassed = (new Date() - this.started) / 1000; ///time passed in seconds
        let $coconut = document.createElement("img");
        $coconut.setAttribute("src", "./images/coconut.png");
        $coconut.setAttribute("class", "coconut");
        $coconut.style.left = `${this.x}vw`;
        $coconut.style.top = `${this.y + timePassed * this.speed}px`;
        document.body.appendChild($coconut);
    }
}