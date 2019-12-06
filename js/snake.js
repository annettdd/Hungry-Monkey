// ------------Snake---------------
class Snake {
    constructor(x, y) {
            this.width = 140; // hardcoded width from the img 
            this.height = 70; // hardcoded height from the img 
            this.x = 0;
            this.y = 5;
            // this.moveSnake();
            // this.started = new Date();
            this.speed = 2;
        }
        //create snake
    render() {
        // let timePassed = (new Date() - this.started) / 1000; //time passed in seconds
        this.x += this.speed;
        let $snake = document.createElement("img"); //creating an img
        this.$snake = $snake;
        $snake.setAttribute("src", "./images/snake.png");
        $snake.setAttribute("id", "snake");
        $snake.style.right = `${this.x}px`;
        $snake.style.bottom = `${this.y}px`;
        $snake.style.width = `${this.width}px`;
        $snake.style.height = `${this.height}px`;
        document.body.appendChild($snake);
    }
    reset() {
            this.snake = null;
            this.x = 0;
            this.y = 5;
            this.speed = 1;
        }
        // moveSnake() {
        //     if (this.x > (window.innerWidth - this.width)) this.x -= this.speed;
        //     else if (this.x < 0) this.x += this.speed;
        // }
}