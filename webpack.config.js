const path = require('path');

module.exports = {
    entry : './src/index.ts',
    output : {
        filename : 'bundle.js',
        path : path.join(__dirname, "dist"),
    },
    devServer: {
        contentBase : path.join(__dirname, "dist"),
        compress : true,
        port : 9000
    },
    module : {
        rules : [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test : /\.ts$/,
                loader : 'ts-loader',
                exclude : /node_modules/,
            }
        ]
    },
    resolve : {
        extensions : [".ts", ".js"]
    },
    devtool:'inline-source-map',
};