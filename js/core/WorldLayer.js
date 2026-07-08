export default class WorldLayer {

    constructor({
        renderer,
        asset = null,

        x = 0,
        y = 0,

        depth = 1,

        opacity = 1,

        speed = 0,

        floating = false,

        sway = false,

        glow = false
    }) {

        this.renderer = renderer;
        this.asset = asset;

        this.baseX = x;
        this.baseY = y;

        this.x = x;
        this.y = y;

        this.depth = depth;

        this.opacity = opacity;

        this.speed = speed;

        this.floating = floating;
        this.sway = sway;
        this.glow = glow;

        this.time = Math.random() * Math.PI * 2;
    }

    update() {

        // Advance animation time
        this.time += 0.01;

        // Horizontal movement (clouds)
        this.x += this.speed;

        // Screen wrapping
        if (this.x > window.innerWidth + 500) {
            this.x = -500;
        }

        // Gentle floating (moon, clouds)
        if (this.floating) {
            this.y = this.baseY + Math.sin(this.time) * 2;
        }

        // Placeholder for future flower sway
        if (this.sway) {

            // We'll connect this to the wind engine later.

        }

    }

    draw() {

    if (!this.asset) return;

    this.renderer.drawImage(

        this.asset,

        this.x,

        this.y,

        this.opacity

    );

}

}
