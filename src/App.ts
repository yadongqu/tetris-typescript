import Player from "./model/Piece";
import Board from "./model/Board";
import Colors from "./model/Colors";


export default class App {
    private _root: HTMLElement;
    private _canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public player: Player;
    public board: Board;
    public start: any;
    constructor(){
        this._root = document.getElementById("root");
        this._canvas = document.createElement("canvas");
        
        this._root.appendChild(this._canvas);
        this.ctx = this._canvas.getContext("2d");
        this.board = new Board(12, 20);
        this._canvas.width = 240;
        this._canvas.height = 400;
        this.ctx.scale(20, 20);
        this._canvas.style.background = "black";
        this.player = this.generatePlayer();
        
        // this.drawPlayer(matrix, {x: 0, y: 0});
         let lastTime = 0;
         let dropCounter = 0;
         let dropInterval = 1000;
        this.start = (time = 0) => {
            const deltaTime = time-lastTime; 
            dropCounter += deltaTime;
            
            if (dropCounter > dropInterval) {
                this.dropPlayer();
                dropCounter = 0;
            }
            lastTime = time;
            this.draw();
            requestAnimationFrame(this.start);
        }
    }


    draw(){
        var context = this.ctx;
        context.fillStyle = '#000';
        context.fillRect(0, 0, 240 , 400);
        this.drawBoard();
        this.drawPlayer();
    }

    drawBoard(){
        var matrix = this.board.arena;
        this.drawMatrix(matrix, {x: 0, y: 0});
    }

    drawMatrix(matrix, offset){
        const ctx = this.ctx;
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value != 0){
                    ctx.fillStyle = Colors[value];
                    ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    drawPlayer(){
        const player = this.player;
        const offset = player.pos;
        this.drawMatrix(player.matrix, offset);
    }

    dropPlayer(){
        const player = this.player;
        player.pos.y += 1;
        if(this.checkCollide(player)){
            player.pos.y -= 1;
            this.board.mergeWithMatrix(player);
        
            this.player = this.generatePlayer();
        }
    }

    rotatePlayer(dir, player: Player){
        const pos = player.pos.x;
        let offset = 1;
        player.rotate(dir);
        while (this.checkCollide(player)){
            player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > player.matrix[0].length){
                player.rotate(-dir);
                player.pos.x = pos;
                return;
            }
        }
    }
    arenaSweep(){
        let arena = this.board.arena;
        let player = this.player;
        let rowCount = 1;
        outer: for (let y = arena.length -1; y > 0; --y) {
            for (let x = 0; x < arena[y].length; ++x) {
                if (arena[y][x] === 0) {
                    continue outer;
                }
            }

            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            ++y;

            // player.score += rowCount * 10;
            rowCount *= 2;
        }
    }


    checkCollide(player){
        const m = player.matrix;
        const o = player.pos;
        const arena = this.board.arena;
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                (arena[y + o.y] &&
                    arena[y + o.y][x + o.x]) !== 0) {
                    
                    return true;
                }
            }
        }
        return false;
    }

    generatePlayer(){
        const arena = this.board.arena;
        const types = 'TJLOSZI';
        const type = types[Math.floor(types.length * Math.random())];
        const newPlayer = new Player(type);
        newPlayer.pos.y = 0;
        newPlayer.pos.x = (arena[0].length / 2 | 0) -
                   (newPlayer.matrix[0].length / 2 | 0);
        if (this.checkCollide(newPlayer)){
            this.gameOver();
        }
        return newPlayer;
    }

    gameOver(){
      console.log("gameOver")
    }

}