const Heroi = require("./Heroi");

const herois = [
  new Heroi("Merlin", 300, "mago"),
  new Heroi("Conan", 35, "guerreiro"),
  new Heroi("Shifu", 60, "monge"),
  new Heroi("Hattori", 28, "ninja"),
];

for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
