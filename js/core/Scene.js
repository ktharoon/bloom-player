import StarManager from "../managers/StarManager.js";
export default class Scene {

    constructor(){

        this.canvas = document.getElementById("world");

        this.ctx = this.canvas.getContext("2d");

        this.resize();
        this.starManager =
            new StarManager(
               this.canvas.width,
                this.canvas.height
            );

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

    }

    render(){

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
        this.starManager.update();

        this.starManager.draw(ctx);

    }

}