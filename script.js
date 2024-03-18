const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let raf;
    let running = false;

    function generateLeaf(x, y) { 
        return {
            x: x,
            y: y,
            vx: 0,
            vy: -1,
            image: new Image(), 
            draw() {
                this.image.onload = () => {
                    ctx.drawImage(this.image, x, y, 10, 10);
                };
                this.image.src = "leaf.svg";
            }
        };
    }
    let leaf = generateLeaf(100, 100);
    leaf.draw();
}