const world = [
    {
        id: "sky",
        asset: "assets/ascii/sky/sky.png",
        x: 0,
        y: 0,
        depth: 0,
        speed: 0,
        opacity: 1
    },

    {
        id: "moon",
        asset: "assets/ascii/moon/moon.png",
        x: 900,
        y: 80,
        depth: 0.1,
        floating: true,
        glow: true
    },

    {
        id: "cloud1",
        asset: "assets/ascii/clouds/cloud1.png",
        x: 150,
        y: 100,
        depth: 0.2,
        speed: 0.02
    },

    {
        id: "cloud2",
        asset: "assets/ascii/clouds/cloud2.png",
        x: 1100,
        y: 160,
        depth: 0.25,
        speed: 0.015
    },

    {
        id: "mountains",
        asset: "assets/ascii/mountains/mountains.png",
        x: 0,
        y: 220,
        depth: 0.8
    },

    {
        id: "flowers",
        asset: "assets/ascii/flowers/flowers.png",
        x: 0,
        y: 520,
        depth: 1,
        sway: true
    }
];

export default world;