import {Utils} from "./Utils";
import Config from "../constants/Constant";

export default class Piece {
    private _name : string;
    private _shape : number[][];
    private _color : number;
    constructor(name : string){
        this._name = name;
        switch(name) {
           case "I" :
               this._shape = [
                   [0, 0, 0, 0],
                   [1, 1, 1, 1],
                   [0, 0, 0, 0],
                   [0, 0, 0, 0]
               ];
               this._color = Config.COLORS.CYAN;
               break;
           case "J" :
               this._shape = [
                   [1, 1, 1],
                   [0, 0, 1],
                   [0, 0, 0]
               ];
               this._color = Config.COLORS.BLUE;
               break;
           case "L" :
               this._shape = [
                   [1, 1, 1],
                   [1, 0, 0],
                   [0, 0, 0]
               ];
               this._color = Config.COLORS.ORANGE;
               break;
           case "O":
               this._shape = [
                   [1, 1],
                   [1, 1]
               ];
               this._color = Config.COLORS.YELLOW;
               break;
           case "S":
               this._shape = [
                   [0, 1, 1],
                   [1, 1, 0],
                   [0, 0, 0]
               ];
               this._color = Config.COLORS.LIME;
               break;
           case "T":
               this._shape = [
                   [1, 1, 1],
                   [0, 1, 0],
                   [0, 0, 0]
               ];
               this._color = Config.COLORS.PURPLE;
               break;
           case "Z":
               this._shape = [
                   [1, 1, 0],
                   [0, 1, 1],
                   [0, 0, 0]
               ];
               this._color = Config.COLORS.RED;
               break;
        }
    }

    public rotate(){
        this._shape = Utils.rotate(this._shape);
    }

    get shape() : number[][]{
        return this._shape;
    }

    get color() : number {
        return this._color;
    }

    getHeight(): number {
        var rows = [];
        for(var i = 0; i < this._shape.length; i++){
            for(var j = 0; j < this._shape[i].length; j++){
                if(this._shape[i][j] == 1){
                    rows.push(i);
                }
            }
        }

        

        return Math.max(...rows) - Math.min(...rows) + 1;
    }
} 