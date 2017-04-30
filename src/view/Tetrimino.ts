import {Graphics} from "pixi.js";
import Piece from "../model/Piece";
import CONSTANTS from "../constants/Constant";

export default class Tetrimino extends Graphics {
    private _piece : Piece;
    constructor(){
        super();
        var SHAPES = CONSTANTS.SHAPES;
       
        var item = SHAPES[Math.floor(Math.random()*SHAPES.length)];
        this._piece = new Piece(item);
        const piece = this._piece;
        console.log(piece);
        const offset = Math.floor(Math.random()*24);
        for (var i = 0; i < piece.shape.length; i++){
            for (var j = 0; j < piece.shape[i].length; j++){
                if (piece.shape[i][j] === 1){
                    this.lineStyle(0);
                    this.beginFill(0xFF0000, 0.25);
                    this.drawRect(320 + 20*(i + offset), 20*j, 20, 20);
                }
            }
        }
    }
}