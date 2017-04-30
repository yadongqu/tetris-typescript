import {Graphics} from "pixi.js";
import Tetrimino from "./Tetrimino";
export default class Board extends Graphics{
    private _newPiece: Tetrimino;
    constructor(){
        super();
        this.lineStyle(0);
        this.beginFill(0xFF00BB, 0.5);
        this.drawRect(320, 0, 480, 800);
        this.endFill();
        this._newPiece = new Tetrimino();
        this.addChild(this._newPiece);
    }
    get newPiece(){
        return this._newPiece;
    }
}