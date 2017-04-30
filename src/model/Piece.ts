import {Utils} from "./Utils";

export default class Piece {
    private _name : string;
    private _shape : number[][];
    private _color : string;
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
               break;
           case "J" :
               this._shape = [
                   [1, 1, 1],
                   [0, 0, 1],
                   [0, 0, 0]
               ];
               break;
           case "L" :
               this._shape = [
                   [1, 1, 1],
                   [1, 0, 0],
                   [0, 0, 0]
               ];
               break;
           case "O":
               this._shape = [
                   [1, 1],
                   [1, 1]
               ];
               break;
           case "S":
               this._shape = [
                   [0, 1, 1],
                   [1, 1, 0],
                   [0, 0, 0]
               ];
               break;
           case "T":
               this._shape = [
                   [1, 1, 1],
                   [0, 1, 0],
                   [0, 0, 0]
               ];
               break;
           case "Z":
               this._shape = [
                   [1, 1, 0],
                   [0, 1, 1],
                   [0, 0, 0]
               ];
               break;
        }
    }

    public rotate(){
        this._shape = Utils.rotate(this._shape);
    }

    get shape() : number[][]{
        return this._shape;
    }
} 