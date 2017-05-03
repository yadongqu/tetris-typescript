import {Graphics} from "pixi.js";

export default class Component extends Graphics {
    constructor(color, x, y){
        super();
        this.lineStyle(0, 0x000000, 1);
        this.beginFill(color);
        this.drawRect(x, y, 40, 40);
    }
}