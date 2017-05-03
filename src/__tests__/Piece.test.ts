import Piece from "../model/Piece";

const piece1 = new Piece("I");
const piece2 = new Piece("T");
test("get height", () => {
    expect(piece1.getHeight()).toBe(1);
    expect(piece2.getHeight()).toBe(2);
})