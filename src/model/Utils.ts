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
}