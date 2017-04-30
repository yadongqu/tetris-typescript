export default class Matrix {
    private _width:number;
    private _height:number;
    private _matrix:number[][];
    constructor(width: number, height:number){
        this._matrix = [];
        this._width = width;
        this._height = height;
        for (var i: number = 0; i < width; i++){
            this._matrix[i] = [];
            for (var j:number = 0; j < height; j++){
                this._matrix[i][j] = 0;
            }
        }
    }

    public isPassible(x: number, y: number){
        if(this._matrix[x][y] == 0) {
            return true;
        } else {
            return false;
        }
    }

   
}