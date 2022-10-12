import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config.js";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);


    return (
        <Particles
            className="particles"
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
        />
    );
};

export default ParticlesBackground