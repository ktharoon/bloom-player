export default class WorldLayer {

    constructor({

        renderer,

        asset = null,

        x = 0,
        y = 0,

        width = null,
        height = null,

        depth = 0,

        opacity = 1,

        speed = 0,

        floating = false,

        sway = false,

        glow = false

    }) {

        // Core
        this.renderer = renderer;
        this.asset = asset;

        // Position
        this.baseX = x;
        this.baseY = y;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        // Visual
        this.depth = depth;
        this.opacity = opacity;

        // Animation
        this.speed = speed;
        this.floating = floating;
        this.sway = sway;
        this.glow = glow;

        this.time = Math.random() * Math.PI * 2;
    }

    update() {

        this.time += 0.01;

        // Cloud movement
        this.x += this.speed;

        if (this.x > window.innerWidth + 500) {
            this.x = -500;
        }

        // Gentle floating
        if (this.floating) {
            this.y = this.baseY + Math.sin(this.time) * 2;
        }

    }

    draw(ctx) {

        // ---------- PNG ----------
        if (this.asset instanceof HTMLImageElement) {

            this.renderer.drawImage({

                image: this.asset,

                x: this.x,
                y: this.y,

                width: this.width,
                height: this.height,

                opacity: this.opacity,

                depth: this.depth

            });

            return;
        }

        // ---------- Placeholders ----------

        const offsetX = this.renderer.camera
            ? this.renderer.camera.x * this.depth
            : 0;

        const offsetY = this.renderer.camera
            ? this.renderer.camera.y * this.depth
            : 0;

        ctx.save();

        ctx.globalAlpha = this.opacity;

        switch (this.asset) {

            case "moon":

                ctx.fillStyle = "#f8f4d8";

                ctx.beginPath();

                ctx.arc(
                    this.x + offsetX,
                    this.y + offsetY,
                    55,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

                break;

            case "cloud":

                ctx.fillStyle = "rgba(255,255,255,.18)";

                ctx.fillRect(
                    this.x + offsetX,
                    this.y + offsetY,
                    180,
                    40
                );

                break;

            case "mountains":

                ctx.fillStyle = "#202733";

                ctx.beginPath();

                ctx.moveTo(
                    offsetX,
                    window.innerHeight
                );

                ctx.lineTo(
                    250 + offsetX,
                    250 + offsetY
                );

                ctx.lineTo(
                    500 + offsetX,
                    window.innerHeight
                );

                ctx.closePath();

                ctx.fill();

                break;

            case "flowers":

                ctx.fillStyle = "#587c58";

                ctx.fillRect(
                    offsetX,
                    window.innerHeight - 120 + offsetY,
                    window.innerWidth,
                    120
                );

                break;
        }

        ctx.restore();
    }

}