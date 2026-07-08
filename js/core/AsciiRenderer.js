export default class AsciiRenderer {

    constructor(ctx) {
        this.ctx = ctx;
    }

    drawImage(image, x, y, opacity = 1) {

        if (!image) return;

        this.ctx.save();

        this.ctx.globalAlpha = opacity;

        this.ctx.drawImage(image, x, y);

        this.ctx.restore();

    }

}