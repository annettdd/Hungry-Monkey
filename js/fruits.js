class Bananas {
    constructor(x, y) {
            this.x = Math.floor(Math.random() * 700);
            this.y = -50;
        }
        //create bananas
    render() {
        let $bananas = document.createElement("img");
        $bananas.setAttribute("src", "./images/bananas.png");
        $bananas.setAttribute("id", "bananas");
        $bananas.style.left = `${this.x}vw`;
        $bananas.style.top = `${this.y}px`;
        $bananas.style.width = `${this.width}vw`;
        document.body.appendChild($bananas);
    }
}

function Banana(myX, myY) {
    this.x = Math.floor(Math.random() * 700);
    this.y = -50;
    this.width = 70;
    this.height = 70;
}

var allBananas = [];

var createBananasArray = function() {
    setInterval(function() {
        var banana = new Banana;
        allBananas.push(banana);
    }, 3000);
};




class Coconuts {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;
    }

    //create coconuts
    render() {
        let $coconuts = document.createElement("img");
        $coconuts.setAttribute("src", "./images/coconut.png");
        $coconuts.setAttribute("id", "coconuts");
        $coconuts.style.left = `${this.x}vw`;
        $coconuts.style.top = `${this.y}%`;
        $coconuts.style.width = `${this.width}vw`;
        document.body.appendChild($coconuts);
    }
}