import {DisplayObject, Graphics} from "pixi.js";
import Piece from "../model/Piece";
import CONSTANTS from "../constants/Constant";
import {Utils} from "../model/Utils";
import Component from "./Component";
export default class Tetrimino  {
    // private _components : Graphics[];
    private _piece : Piece;
    private _velocity : number;
    private _components : any[];
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
       
        for (var i = 0; i < this._components.length; i++){
            this._components[i].y += 10;
        }

    }

    isTouchDown(){
        if(this._components[0].y + this._height < CONSTANTS.BOARD_HEIGHT){
            return false;
        } else {
            return true;
        }
    }

    collideWith(other){
        for(var i = 0; i < this._components.length; i++){
            for(var j = 0; j < other._components.length; j++){
                var r1 = this._components[i];
                var r2 = this._components[j];
                if(Utils.boxesIntersect(r1, r2)){
                    return true;
                }
            }
        }
        return false;
    }

}