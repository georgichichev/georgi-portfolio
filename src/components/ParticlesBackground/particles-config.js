const particlesConfig = {
    autoPlay: true,
    background: {
        color: {
            value: "#0d0d0d"
        },
    },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    manualParticles: [],
    particles: {
        number: {
            density: {
                enable: true,
                area: 1500,
                factor: 500
            },
            limit: 0,
            value: 100
        },
        shape: {
            type: "circle"
        },
        size: {
            value: 0.35,
        },
        move: {
            angle: {
                offset: 90,
                value: 180
            },
            direction: "top",
            enable: true,
            outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            },
            random: false,
            size: false,
            speed: 1,
            straight: false,
        },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: []
}

export default particlesConfig