
import SkyManager from "../managers/SkyManager.js";import AsciiRenderer from "./AsciiRenderer.js";
import MoonManager from "../managers/MoonManager.js";
import LayerManager from "./LayerManager.js";
import StarManager from "../managers/StarManager.js";
export default class Scene {

constructor() {

    // 1. Get canvas first
    this.canvas = document.getElementById("world");
    this.ctx = this.canvas.getContext("2d");

    this.asciiRenderer = new AsciiRenderer(this.ctx);
    this.skyManager = new SkyManager(this.asciiRenderer);

    // 2. Resize canvas
    this.resize();

    // 3. Create LayerManager
    this.layerManager = new LayerManager();

    // 4. Create managers
    this.starManager = new StarManager(
        this.canvas.width,
        this.canvas.height
    );

    this.moonManager = new MoonManager(
        this.canvas.width,
        this.canvas.height
    );

    // 5. Add them to LayerManager
    this.layerManager.add(this.skyManager);
    this.layerManager.add(this.starManager);
    this.layerManager.add(this.moonManager);

    // 6. Listen for resize
    window.addEventListener("resize", () => this.resize());

}

        

    resize(){

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

         if(this.starManager){

           this.starManager.resize(
               this.canvas.width,
               this.canvas.height
      );

    }
        if(this.moonManager){

            this.moonManager.resize(
                this.canvas.width,
                this.canvas.height
            );

        }

    }

    render(){
        console.log("Scene render");

        const ctx = this.ctx;

        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        // Sky Gradient

        const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            this.canvas.height
        );

        gradient.addColorStop(0,"#16213f");
        gradient.addColorStop(.5,"#0d1426");
        gradient.addColorStop(1,"#05070d");

        ctx.fillStyle = gradient;

        ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        this.layerManager.render(ctx);

    }

}