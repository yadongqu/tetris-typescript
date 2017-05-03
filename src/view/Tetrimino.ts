import {Graphics} from "pixi.js";
import Piece from "../model/Piece";
import CONSTANTS from "../constants/Constant";
import {Utils} from "../model/Utils";
import Component from "./Component";
export default class Tetrimino  {
    // private _components : Graphics[];
    private _piece : Piece;
    private _velocity : number;
    private _components : Component[];
    private _height : number;
    constructor(){
        this._velocity = 1;
        var SHAPES = CONSTANTS.SHAPES;
        var item = SHAPES[Math.floor(Math.random()*SHAPES.length)];
        const piece = new Piece(item);
        this._height = piece.getHeight() * 40;
        this._piece = piece;
        const color = piece.color;
        const offset = Math.floor(Math.random()*11);
        this._components = [];
        for (var i = 0; i < piece.shape.length; i++){
            for (var j = 0; j < piece.shape[i].length; j++){
                if (piece.shape[i][j] === 1){
                    let component = new Component(color, 320 + 40*(j + offset), 40 * i)
                    this._components.push(component);
                }
            }
        }
    }

    get components() {
        return this._components;
    }

    public fall(){
        
        if(!this.isTouchDown()){
            for (var i = 0; i < this._components.length; i++){
                this._components[i].y += 1;
            }
        }
    }

    isTouchDown(){
        if(this._components[0].y + this._height < CONSTANTS.BOARD_HEIGHT){
            return false;
        } else {
            return true;
        }
    }




}