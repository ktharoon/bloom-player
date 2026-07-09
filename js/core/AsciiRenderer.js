export default class AsciiRenderer {

    constructor(ctx) {

        this.ctx = ctx;

        // Assigned by Scene.js
        this.camera = null;

    }

    drawImage({

        image,

        x,

        y,

        width = null,

        height = null,

        opacity = 1,

        depth = 0

    }) {

        if (!image) return;

        const offsetX = this.camera
            ? this.camera.x * depth
            : 0;

        const offsetY = this.camera
            ? this.camera.y * depth
            : 0;

        this.ctx.save();

        this.ctx.globalAlpha = opacity;

        if (width && height) {

            this.ctx.drawImage(

                image,

                x + offsetX,

                y + offsetY,

                width,

                height

            );

        }

        else {

            this.ctx.drawImage(

                image,

                x + offsetX,

                y + offsetY

            );

        }

        this.ctx.restore();

    }

}