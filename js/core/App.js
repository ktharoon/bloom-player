import Scene from "./Scene.js";

class App {

    constructor() {

        this.scene = new Scene();

        this.start();

    }

    start() {

        const animate = () => {

            this.scene.render();

            requestAnimationFrame(animate);

        };

        animate();

    }

}

new App();