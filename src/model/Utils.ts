import Config from "../constants/Constant";
import {DisplayObject} from "pixi.js";
export module Utils {
    export function rotate(matrix: number[][]){
        var n = matrix.length;
        for (var i = 0; i < n / 2; i++) {
            for (var j = 0; j < Math.ceil(n/2); j++) {
                var temp = matrix[i][j];
                matrix[i][j] = matrix[n-1-j][i];
                matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
                matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
                matrix[j][n-1-i] = temp;
            }
        }
        return matrix;
    }
    /**
     * @param  {number} x position of a graphics component
     * @param  {number} y position of a graphics component
     * return x and y index in the board matrix;
     */
    export function posToMatrix(x:number, y:number){
        const iX = Math.floor((x - Config.BOARD_OFFSET) / Config.TEIL_WIDTH);
        const iY = Math.floor(y/Config.TEIL_HEIGHT);
        return [iX, iY];
    }

    export function boxesIntersect(a: DisplayObject, b: DisplayObject){
        return a.x<b.x+40 && a.x+40>b.x && a.y<b.y+40 && a.y+40>b.y;
    }
}