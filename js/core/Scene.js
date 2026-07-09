import Camera from "./Camera.js";
import AsciiRenderer from "./AsciiRenderer.js";
import LayerManager from "./LayerManager.js";
import WorldLayer from "./WorldLayer.js";

import world from "../config/world.js";

import SkyManager from "../managers/SkyManager.js";
import StarManager from "../managers/StarManager.js";
import MoonManager from "../managers/MoonManager.js";

export default class Scene {

    constructor() {

        // Canvas
        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext("2d");

        // Core Systems
        this.camera = new Camera();
        this.asciiRenderer = new AsciiRenderer(this.ctx);
        this.asciiRenderer.camera = this.camera;

        this.layerManager = new LayerManager();

        // Resize first
        this.resize();

        // World Layers (future PNG layers)
        this.worldLayers = [];

        this.worldLayers = [];

        world.forEach(layerConfig => {

        const image = new Image();

        image.src = layerConfig.asset;

        image.onload = () => {

        layer.asset = image;

    };

    const layer = new WorldLayer({

        renderer: this.asciiRenderer,

        ...layerConfig

    });

    this.worldLayers.push(layer);

    this.layerManager.add(layer);

});

        // Temporary Managers
        // (We'll replace these gradually once the PNG assets are live.)

        this.skyManager = new SkyManager(this.asciiRenderer);

        this.starManager = new StarManager(

            this.canvas.width,

            this.canvas.height

        );

        this.moonManager = new MoonManager(

            this.canvas.width,

            this.canvas.height

        );

        this.layerManager.add(this.skyManager);
        this.layerManager.add(this.starManager);
        this.layerManager.add(this.moonManager);

        window.addEventListener("resize", () => this.resize());

    }

    resize() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        if (this.starManager) {

            this.starManager.resize(

                this.canvas.width,

                this.canvas.height

            );

        }

        if (this.moonManager) {

            this.moonManager.resize(

                this.canvas.width,

                this.canvas.height

            );

        }

    }

    render() {

        this.camera.update();

        const ctx = this.ctx;

        ctx.clearRect(

            0,

            0,

            this.canvas.width,

            this.canvas.height

        );

        // Night Sky

        const gradient = ctx.createLinearGradient(

            0,

            0,

            0,

            this.canvas.height

        );

        gradient.addColorStop(0, "#16213f");
        gradient.addColorStop(0.5, "#0d1426");
        gradient.addColorStop(1, "#05070d");

        ctx.fillStyle = gradient;

        ctx.fillRect(

            0,

            0,

            this.canvas.width,

            this.canvas.height

        );

        this.layerManager.update();
        this.layerManager.render(ctx);

    }

}