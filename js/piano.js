const DO4 = new Audio("sounds/C4.mp3")
const REb4 = new Audio("sounds/Db4.mp3")
const RE4 = new Audio("sounds/D4.mp3")
const MIb4 = new Audio("sounds/Eb4.mp3")
const MI4 = new Audio("sounds/E4.mp3")
const FA4 = new Audio("sounds/F4.mp3")
const SOLb4 = new Audio("sounds/Gb4.mp3")
const SOL4 = new Audio("sounds/G4.mp3")
const LAb4 = new Audio("sounds/Ab4.mp3")
const LA4 = new Audio("sounds/A4.mp3")
const SIb4 = new Audio("sounds/Bb4.mp3")
const SI4 = new Audio("sounds/B4.mp3")
const DO5 = new Audio("sounds/C5.mp3")
const REb5 = new Audio("sounds/Db5.mp3")
const RE5 = new Audio("sounds/D5.mp3")
const MIb5 = new Audio("sounds/Eb5.mp3")
const MI5 = new Audio("sounds/E5.mp3")

const reproducirNota = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
};
const tocarTecla = (idTecla, nota) => {
    const tecla = document.querySelector(idTecla);
    reproducirNota(nota);
    tecla.classList.add("active");
    setTimeout(() => tecla.classList.remove("active"), 100);
}
const teclas = [
    { id: ".DO4", nota: DO4, key: 81 },
    { id: ".REb4", nota: REb4, key: 50 },
    { id: ".RE4", nota: RE4, key: 87 },
    { id: ".MIb4", nota: MIb4, key: 51 },
    { id: ".MI4", nota: MI4, key: 69 },
    { id: ".FA4", nota: FA4, key: 82 },
    { id: ".SOLb4", nota: SOLb4, key: 53 },
    { id: ".SOL4", nota: SOL4, key: 84 },
    { id: ".LAb4", nota: LAb4, key: 54 },
    { id: ".LA4", nota: LA4, key: 89 },
    { id: ".SIb4", nota: SIb4, key: 55 },
    { id: ".SI4", nota: SI4, key: 85 },
    { id: ".DO5", nota: DO5, key: 73 },
    { id: ".REb5", nota: REb5, key: 57 },
    { id: ".RE5", nota: RE5, key: 79 },
    { id: ".MIb5", nota: MIb5, key: 48 },
    { id: ".MI5", nota: MI5, key: 80 }
];

teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);
    tecla.addEventListener("click", () => tocarTecla(id, nota));
});

window.addEventListener("keydown", ({ keyCode }) => {
    const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
    if (teclaPresionada[0]) {
        const { id, nota } = teclaPresionada[0];
        tocarTecla(id, nota);
    }
});