import {Application} from "pixi.js";
import Board from "./Board";
import Tetrimino from "./Tetrimino";
export default class Game extends Application{
    private _board: Board;
    private _tet : Tetrimino;
    constructor(width:number, height:number, options:Object){
        super(width, height, options);
        this._board = new Board();
        this._tet = new Tetrimino();
        this.stage.addChild(this._board);
        for (var i = 0; i < this._tet.components.length; i++){
            this.stage.addChild(this._tet.components[i]);
        }
    }
    public play(){
        var game = this;
        
        this.ticker.add(function(delta){
           game._tet.fall();
        });
    }

    get board(){
        return this._board;
    }
}