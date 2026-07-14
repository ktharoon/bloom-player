export default class AsciiRenderer {

    constructor(ctx) {
        this.ctx = ctx;
        this.camera = null;
    }

    drawImage({
        image,
        x = 0,
        y = 0,
        width = null,
        height = null,
        opacity = 1,
        depth = 0
    }) {

        if (!(image instanceof HTMLImageElement)) {
            return;
        }

        const offsetX = this.camera
            ? this.camera.x * depth
            : 0;

        const offsetY = this.camera
            ? this.camera.y * depth
            : 0;

        this.ctx.save();

        this.ctx.globalAlpha = opacity;

        this.ctx.drawImage(
            image,
            x + offsetX,
            y + offsetY,
            width ?? image.width,
            height ?? image.height
        );

        this.ctx.restore();
    }

}