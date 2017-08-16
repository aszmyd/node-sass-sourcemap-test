#!/usr/bin/env node
const sass = require('node-sass');
const fs = require('fs');

const options = {
    file: './src/index.scss',
    outFile: './dist/index.css',
    sourceMap: './dist/index.css.map'
};

sass.render(options, function (err, result) {
    if (err) {
        console.error('Error: ' + err.toString())
    } else {
        console.log(result);
        fs.writeFileSync('./dist/index.css', result.css);
        fs.writeFileSync('./dist/index.css.map', result.map);
        console.log('OK');
    }
});