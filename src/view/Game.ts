import {Application} from "pixi.js";
import Board from "./Board";
export default class Game extends Application{
    private _board: Board;
    constructor(width:number, height:number, options:Object){
        super(width, height, options);
        this._board = new Board();
        this.stage.addChild(this._board);
    }
    public play(){
        var game = this;
        this.ticker.add(function(delta){
            game._board.newPiece.y += 1;
        })
    }
}