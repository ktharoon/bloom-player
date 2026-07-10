import SKY from "../../assets/ascii/sky.js";
export default class SkyManager {

    constructor(renderer){

        this.renderer = renderer;

        this.opacity = 1;

    }

    update(){

    }

    draw(){

        this.renderer.draw({

            ascii: SKY,

            x:50,

            y:40,

            opacity:this.opacity,

            color:"#b8d4ff"

        });

    }

}