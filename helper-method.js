'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'powerset' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING word as parameter.
 */

function powerset(word) {
    // Write your code here
    const result = [];
    
    const findCombos = (build, depth) => {
        if (depth == word.length) {
            result.push(build);
            return;
        }
        
        // recusrive case
        findCombos(build, depth + 1);
        // right side
        findCombos(build + word[depth], depth + 1);
    }
    findCombos('',0);
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const word = readLine();

    const result = powerset(word).sort();

    ws.write(result.join('\n') + '\n');

    ws.end();
}
