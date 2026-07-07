export default class StarManager {

    constructor(width, height){

        this.width = width;
        this.height = height;

        this.stars = [];

        this.createStars();

    }

    createStars(){

        const totalStars = 220;

        for(let i = 0; i < totalStars; i++){

            this.stars.push({

                x: Math.random() * this.width,

                y: Math.random() * this.height * 0.65,

                radius: Math.random() * 1.8 + 0.3,

                brightness: Math.random(),

                speed: Math.random() * 0.02 + 0.005,

                phase: Math.random() * Math.PI * 2

            });

        }

    }

    resize(width,height){

        this.width = width;
        this.height = height;

        this.stars = [];

        this.createStars();

    }

    update(){

        this.stars.forEach(star=>{

            star.phase += star.speed;

        });

    }

    draw(ctx){

        this.stars.forEach(star=>{

            const glow =
                (Math.sin(star.phase)+1)/2;

            const alpha =
                0.2 + glow * 0.8;

            ctx.beginPath();

            ctx.fillStyle =
                `rgba(255,255,255,${alpha})`;

            ctx.arc(
                star.x,
                star.y,
                star.radius,
                0,
                Math.PI*2
            );

            ctx.fill();

        });

    }

}