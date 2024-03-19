const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "mug.svg";

function getCoffee(x, y) {
    return {
        x: x,
        y: y,
        draw() {
            ctx.drawImage(image, this.x, this.y, 50, 50);
        },
    };
};

let coffee = getCoffee(25, 25);
coffee.draw();
