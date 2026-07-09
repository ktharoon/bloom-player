export default [

    {
        id: "sky",

        asset: "assets/ascii/sky/sky.png",

        x: 0,
        y: 0,

        width: window.innerWidth,
        height: window.innerHeight,

        depth: 0,

        opacity: 1
    },

    {
        id: "moon",

        asset: null,

        x: 900,
        y: 120,

        depth: 0.03,

        opacity: 1,

        floating: true
    },

    {
        id: "cloud",

        asset: null,

        x: 150,
        y: 140,

        depth: 0.08,

        opacity: 0.9,

        speed: 0.08,

        floating: true
    },

    {
        id: "mountains",

        asset: null,

        x: 0,
        y: 0,

        depth: 0.15,

        opacity: 1
    },

    {
        id: "flowers",

        asset: null,

        x: 0,
        y: 0,

        depth: 0.25,

        opacity: 1
    }

];