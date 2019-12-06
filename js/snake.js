// ------------Snake---------------
class Snake {
    constructor(x, y) {
            this.width = 140; // hardcoded width from the img 
            this.height = 70; // hardcoded height from the img 
            this.x = window.innerWidth;
            this.y = 5;
            this.speed = -3;
        }
        //create snake
    render() {
        this.x += this.speed;
        let $snake = document.createElement("img"); //creating an img
        this.$snake = $snake;
        $snake.setAttribute("src", "./images/snake.png");
        $snake.setAttribute("id", "snake");
        $snake.style.left = `${this.x}px`;
        $snake.style.bottom = `${this.y}px`;
        $snake.style.width = `${this.width}px`;
        $snake.style.height = `${this.height}px`;
        document.body.appendChild($snake);
    }
    reset() {
        this.snake = null;
        this.x = window.innerWidth;
        this.y = 5;
        this.speed = -3;
    }
}