import Camera from "./Camera.js";
import AsciiRenderer from "./AsciiRenderer.js";
import LayerManager from "./LayerManager.js";
import WorldLayer from "./WorldLayer.js";

import world from "../config/world.js";

import StarManager from "../managers/StarManager.js";
import MoonManager from "../managers/MoonManager.js";

export default class Scene {

    constructor() {

        // Canvas
        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext("2d");

        // Core
        this.camera = new Camera();

        this.asciiRenderer = new AsciiRenderer(this.ctx);
        this.asciiRenderer.camera = this.camera;

        this.layerManager = new LayerManager();

        this.resize();

        // World
        this.worldLayers = [];

        world.forEach(layerConfig => {

            const layer = new WorldLayer({

                renderer: this.asciiRenderer,

                ...layerConfig

            });

            this.worldLayers.push(layer);
            this.layerManager.add(layer);

            if (typeof layerConfig.asset === "string") {

                const image = new Image();

                image.onload = () => {

                    console.log("Loaded:", layerConfig.asset);

                    layer.asset = image;

                };

                image.onerror = () => {

                    console.error("Failed:", layerConfig.asset);

                };

                image.src = layerConfig.asset;

            }

        });

        // Existing managers (temporary)
        this.starManager = new StarManager(
            this.canvas.width,
            this.canvas.height
        );

        this.moonManager = new MoonManager(
            this.canvas.width,
            this.canvas.height
        );

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
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.layerManager.update();
        this.layerManager.render(ctx);

    }

}