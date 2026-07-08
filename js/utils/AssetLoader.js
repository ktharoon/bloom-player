export default class AssetLoader {

    static async loadImage(path) {

        return new Promise((resolve, reject) => {

            const image = new Image();

            image.src = path;

            image.onload = () => resolve(image);

            image.onerror = () =>
                reject(new Error(`Failed to load ${path}`));

        });

    }

}
