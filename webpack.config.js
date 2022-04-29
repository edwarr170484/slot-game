const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname,'src/ts/main.ts')
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}