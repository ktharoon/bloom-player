export default class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

        this.targetX = 0;
        this.targetY = 0;

        window.addEventListener("mousemove", e => {

            this.targetX =
                (e.clientX - window.innerWidth / 2) * 0.03;

            this.targetY =
                (e.clientY - window.innerHeight / 2) * 0.03;

        });

    }

    update() {

        this.x += (this.targetX - this.x) * 0.05;
        this.y += (this.targetY - this.y) * 0.05;

    }

}
