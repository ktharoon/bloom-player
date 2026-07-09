import AssetCache from "../utils/AssetCache.js";

export default class AssetManager {

    constructor() {

        this.cache = new AssetCache();

        this.assets = {};

    }

    async loadWorld(worldConfig) {

        for (const layer of worldConfig) {

            if (typeof layer.asset !== "string") continue;

            try {

                this.assets[layer.id] =
                    await this.cache.load(layer.asset);

            }

            catch (error) {

                console.warn(
                    `Could not load ${layer.asset}`
                );

            }

        }

    }

    get(id) {

        return this.assets[id];

    }

}