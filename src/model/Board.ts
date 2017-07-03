import Piece from "./Piece";

export default class Board {
    public width: number;
    public height: number;
    public arena: Array<number[]>;

    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
        this.arena = new Array(height);
        for (var i = 0; i < height; i++){
            this.arena[i] = new Array(width);
            for (var j = 0; j < width; j++){
                this.arena[i][j] = 0;
            }
        }
        
    }

    mergeWithMatrix(player: Piece){
        const matrix: number[][] = player.matrix;
        const arena: number[][] = this.arena;
        matrix.forEach((row, y)=> {
            row.forEach((value, x) => {
                if(value != 0)
                {
                    arena[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }
}