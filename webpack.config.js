module.exports = {
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }], // other loader configuration goes in the array
        resolve: {
            extensions: ['.js', '.jsx', '.react.js', '.ts', '.tsx']
        }
    }
}