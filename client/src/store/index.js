import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#5755FE",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./logo.png",
    fullDecal: "ai.webp",
});

export default state;