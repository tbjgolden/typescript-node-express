"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSudokuValid = void 0;
exports.isSudokuValid = (grid) => {
    // Validation
    if (!Array.isArray(grid) ||
        grid.length !== 9 ||
        grid.some(row => !Array.isArray(row) ||
            row.length !== 9 ||
            row.some(n => typeof n !== "number" || n < 1 || n > 9 || n !== ~~n)))
        throw new Error("Input error");
    // Rows
    for (const row of grid) {
        if (!isValidSet(row))
            return false;
    }
    // Columns
    for (let i = 0; i < 9; i++) {
        if (!isValidSet(grid.map(rows => rows[i])))
            return false;
    }
    // Subgrids
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const subgrid = [];
            for (let k = 0; k < 3; k += 1) {
                for (let l = 0; l < 3; l += 1) {
                    subgrid.push(grid[i + k][j + l]);
                }
            }
            if (!isValidSet(subgrid))
                return false;
        }
    }
    return true;
};
const isValidSet = (set) => {
    const uniques = new Set();
    for (const num of set) {
        if (uniques.has(num)) {
            return false;
        }
        else {
            uniques.add(num);
        }
    }
    return true;
};
//# sourceMappingURL=sudoku.js.map