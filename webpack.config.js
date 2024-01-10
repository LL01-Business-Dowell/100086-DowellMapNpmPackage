const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {

                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        usedExports: true,
        minimize: true,
    },
};

