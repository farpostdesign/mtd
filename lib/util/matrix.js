//
// Класс матрицы
//

function Matrix(numCols, numRows, defValue) {
    var arr = new Array(numRows);

    for(var row = 0; row < numRows; row++) {
        arr[row] = new Array(numCols);
        for (var col = 0; col < numCols; col++) {
            arr[row][col] = defValue;
        }
    }

    return arr;
}

module.exports = Matrix;
