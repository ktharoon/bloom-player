export default class AsciiRenderer {

    constructor(ctx) {
        this.ctx = ctx;

        this.fontSize = 12;
        this.fontFamily = "monospace";

        this.ctx.textBaseline = "top";
    }

    draw({
        ascii,
        x = 0,
        y = 0,
        color = "#ffffff",
        opacity = 1,
        lineHeight = 12
    }) {

        const ctx = this.ctx;

        ctx.save();

        ctx.globalAlpha = opacity;

        ctx.fillStyle = color;

        ctx.font = `${this.fontSize}px ${this.fontFamily}`;

        const rows = ascii.split("\n");

        rows.forEach((row, index) => {

            ctx.fillText(
                row,
                x,
                y + index * lineHeight
            );

        });

        ctx.restore();

    }

}