import AssetLoader from "./AssetLoader.js";

export default class AssetCache {

    constructor() {
        this.images = new Map();
    }

    async load(path) {

        if (this.images.has(path)) {
            return this.images.get(path);
        }

        const image = await AssetLoader.loadImage(path);

        this.images.set(path, image);

        return image;
    }

}
