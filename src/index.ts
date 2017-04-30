import Game from "./view/Game";
const app = new Game(800, 800, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);
app.play();


