export default class LayerManager {

    constructor() {

        this.layers = [];

    }

    add(layer) {

        this.layers.push(layer);

    }

    remove(layer) {

        this.layers = this.layers.filter(

            current => current !== layer

        );

    }

    clear() {

        this.layers.length = 0;

    }

    update() {

        for (const layer of this.layers) {

            if (typeof layer.update === "function") {

                layer.update();

            }

        }

    }

    render(ctx) {

        for (const layer of this.layers) {

            if (typeof layer.draw === "function") {

                layer.draw(ctx);

            }

        }

    }

}