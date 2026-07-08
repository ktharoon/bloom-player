export default class LayerManager {

    constructor() {
        this.layers = [];
    }

    add(layer) {
        this.layers.push(layer);
    }

    update() {
        this.layers.forEach(layer => {
            if (layer.update) {
                layer.update();
            }
        });
    }

    render(ctx) {
        this.layers.forEach(layer => {
            if (layer.draw) {
                layer.draw(ctx);
            }
        });
    }

}