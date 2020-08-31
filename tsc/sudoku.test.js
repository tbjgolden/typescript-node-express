"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sudoku_1 = require("./sudoku");
describe('isSudokuValid', () => {
    test('throws when given invalid input', () => {
        expect(() => sudoku_1.isSudokuValid(undefined)).toThrow();
        expect(() => sudoku_1.isSudokuValid([])).toThrow();
        expect(() => sudoku_1.isSudokuValid([[]])).toThrow();
        expect(() => sudoku_1.isSudokuValid([[], [], [], [], [], [], [], [], []])).toThrow();
        expect(() => sudoku_1.isSudokuValid([1, 1, 1, 1, 1, 1, 1, 1, 1])).toThrow();
        expect(() => sudoku_1.isSudokuValid([
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
            [1, 1, 1, 1, 1, 1, 1, 1, 10],
        ])).toThrow();
        expect(() => sudoku_1.isSudokuValid([
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0],
        ])).toThrow();
    });
    test('returns true with valid sudoku', () => {
        expect(sudoku_1.isSudokuValid([
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [3, 1, 2, 8, 4, 5, 9, 6, 7],
            [6, 9, 7, 3, 1, 2, 8, 4, 5],
            [8, 4, 5, 6, 9, 7, 3, 1, 2],
            [2, 3, 1, 5, 7, 4, 6, 9, 8],
            [9, 6, 8, 2, 3, 1, 5, 7, 4],
            [5, 7, 4, 9, 6, 8, 2, 3, 1]
        ])).toBe(true);
    });
    test('returns false with invalid sudoku', () => {
        expect(sudoku_1.isSudokuValid([
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [3, 1, 2, 8, 4, 5, 9, 6, 7],
            [6, 9, 7, 3, 1, 2, 8, 4, 5],
            [8, 4, 5, 6, 9, 7, 3, 1, 2],
            [2, 3, 1, 5, 7, 4, 6, 9, 8],
            [9, 6, 8, 2, 3, 1, 5, 7, 4],
            [5, 7, 4, 9, 6, 8, 1, 2, 3]
        ])).toBe(false);
        expect(sudoku_1.isSudokuValid([
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [3, 1, 2, 8, 4, 5, 9, 6, 7],
            [6, 9, 7, 3, 1, 2, 8, 4, 5],
            [8, 4, 5, 6, 9, 7, 3, 1, 2],
            [2, 3, 1, 5, 7, 4, 6, 9, 1],
            [9, 6, 8, 2, 3, 1, 5, 7, 4],
            [5, 7, 4, 9, 6, 8, 2, 3, 8]
        ])).toBe(false);
        expect(sudoku_1.isSudokuValid([
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [2, 3, 1, 5, 6, 4, 8, 9, 7],
            [3, 1, 2, 6, 4, 5, 9, 7, 8],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [5, 6, 4, 8, 9, 7, 2, 3, 1],
            [6, 4, 5, 9, 7, 8, 3, 1, 2],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [8, 9, 7, 2, 3, 1, 5, 6, 4],
            [9, 7, 8, 3, 1, 2, 6, 4, 5]
        ])).toBe(false);
    });
});
//# sourceMappingURL=sudoku.test.js.map