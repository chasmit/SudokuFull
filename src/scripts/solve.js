const range = (from, to, step) =>
  [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

const PUZZLE_RANGE = range(0, 9, 1);

function possibleValues(grid, i, j) {
    var possible = PUZZLE_RANGE;
    var rowVals = [], colVals = [], boxVals = [];
    
    const boxX = Math.floor(i/3), boxY = Math.floor(j/3);
    const xRange = range(boxX, boxX+3, 1), yRange = range(boxY, boxY+3, 1);

    PUZZLE_RANGE.forEach(x => {
        if (grid[i][x] != ' ') {
            rowVals.push(x);
        }
    });

    PUZZLE_RANGE.forEach(y => {
        if (grid[y][j] != ' ') {
            rowVals.push(y);
        }
    });

    xRange.forEach(x => {
        yRange.forEach(y => {
            if (grid[x][y] != ' ') {
                boxVals.push(grid[x][y]);
            }
        });
    });

    possible.filter(n => !rowVals.includes[n]);
    possible.filter(n => !colVals.includes[n]);
    possible.filter(n => !boxVals.includes[n]);

    return possible;
}

function solve(grid) {
    var possible = [];
    var temp = [...Array(9)].map(e => Array(9));

    PUZZLE_RANGE.forEach(i => {
        PUZZLE_RANGE.forEach(j => {
            if (grid[i][j] == ' ') {
                temp = grid;
                possible = possibleValues(grid, i, j);

                if (possible == null) {
                    return null;
                }

                for (var a in possible) {
                    temp[i][j] = a;
                    if (solve(temp) != null) {
                        return temp
                    }
                }

                return null;
            }
        });
    });

    return grid
}

export default solve;