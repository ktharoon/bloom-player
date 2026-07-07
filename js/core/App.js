import Scene from "./Scene.js";
const scene = new Scene();

function animate(){

    scene.render();

    requestAnimationFrame(animate);

}

animate();

console.log("🌙 BloomPlayer Engine Started");