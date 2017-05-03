import {Graphics} from "pixi.js";
import Tetrimino from "./Tetrimino";
import Config from "../constants/Constant";
import {Utils} from "../model/Utils";
export default class Board extends Graphics{
    private _background: Graphics;
    private _allTetrimino : Tetrimino[];
    private _newTetrimino: Tetrimino;
    constructor(){
        super();
        this.lineStyle(0);
        this.beginFill(0x000000, 0.8);
        this.drawRect(Config.BOARD_OFFSET, 0, Config.TEIL_WIDTH * Config.BOARD_COL, Config.TEIL_HEIGHT * Config.BOARD_ROW);
        this.endFill();
    }
    // shouldStop() : boolean {
    //     console.log(this.isCollide());
    //     return this.isCollide() || this.isTouchDown();
    // }

    // isCollide() : boolean {
    //     const newT = this.newTetrimino;
    //     for (var i = 0; i < this._allTetrimino.length; i++){
    //         if (this._allTetrimino[i] != newT && newT.collideWith(this._allTetrimino[i])){
    //            return true;
    //         }
    //     }
    //     return false;
    // }

    // isTouchDown(): boolean {
        
    //     return this.newTetrimino.y + this.newTetrimino.height == Config.BOARD_HEIGHT;
    // }
}