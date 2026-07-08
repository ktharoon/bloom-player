export default class MoonManager {

    constructor(width, height) {

        this.width = width;
        this.height = height;

        this.x = width * 0.72;
        this.y = height * 0.22;

        this.radius = 70;

        this.time = 0;

    }

    resize(width, height) {

        this.width = width;
        this.height = height;

        this.x = width * 0.72;
        this.y = height * 0.22;

    }

    update() {

        this.time += 0.02;

    }

    draw(ctx) {

        const glow =
            Math.sin(this.time) * 8;

        //-----------------------------
        // Outer Glow
        //-----------------------------

        const outer =
            ctx.createRadialGradient(
                this.x,
                this.y,
                this.radius,

                this.x,
                this.y,
                this.radius + 120 + glow
            );

        outer.addColorStop(0,
            "rgba(255,255,230,.22)");

        outer.addColorStop(.5,
            "rgba(220,230,255,.08)");

        outer.addColorStop(1,
            "rgba(0,0,0,0)");

        ctx.fillStyle = outer;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius + 120,
            0,
            Math.PI * 2
        );

        ctx.fill();

        //-----------------------------
        // Moon
        //-----------------------------

        ctx.beginPath();

        ctx.fillStyle = "#F8F6EE";

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}