import {Application} from "pixi.js";
import Board from "./Board";
import Tetrimino from "./Tetrimino";
import {Utils} from "../model/Utils";
import CONSTANTS from "../constants/Constant";

export default class Game extends Application{
    private _board: Board;
    private _tet : Tetrimino;
    private _oldTets : any [];
    constructor(width:number, height:number, options:Object){
        super(width, height, options);
        this._board = new Board();
        this._oldTets = [];
        this._tet = new Tetrimino();
        this.stage.addChild(this._board);
        for (var i = 0; i < this._tet.components.length; i++){
            this.stage.addChild(this._tet.components[i]);
        }
    }

    public play(){
        var game = this;
        
        this.ticker.add(function(delta){
            if(!game._tet.isTouchDown() && !game.checkCollision()){
                game._tet.fall();
            } else {
               game._oldTets.push(game._tet);
               game.generateTet();
            }
        });
    }

    get board(){
        return this._board;
    }

    generateTet(){
        this._tet = new Tetrimino();
        for (var i = 0; i < this._tet.components.length; i++){
            this.stage.addChild(this._tet.components[i]);
        }

    }

    checkCollision(){
        console.log(this._tet);
        console.log(this._oldTets.length);
        for(var i = 0; i < this._oldTets.length; i++){
            if(this._tet.collideWith(this._oldTets[i])){
                return true;
            }
        }

        return false;
        // let game = this;
        // let other = this.stage.children.filter(function(comp){
        //     return game._tet.components.indexOf(comp) <= -1 && game._board != comp; 
        // });
        // for (var i = 0; i < this._tet.components.length; i++){
        //     for (var j = 0; j < other.length; j++){
        //         if(Utils.boxesIntersect(this._tet.components[i], other[j])){
        //             return true;
        //         }
        //     }
        // }
        // return false;
    }


}