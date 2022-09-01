
let pathToWasm = '';
if (process.argv.length < 3) {
    console.log('\n\nNeed Path To WASM\n\n');
    return;
}
pathToWasm = process.argv[2];

let funcName;
if (process.argv.length > 3) {
    funcName = process.argv[3];
}

let varA;
let varB;
if (process.argv.length > 4) { varA = process.argv[4]; }
if (process.argv.length > 5) { varB = process.argv[5]; }

const fs = require('fs');
const wasmBuffer = fs.readFileSync(pathToWasm);

WebAssembly.instantiate(wasmBuffer)
    .then(wasmModule => {

        console.log('WASM Module:');
        console.log(wasmModule);

        console.log('WASM Module Exports:');
        console.log(wasmModule.instance.exports);

        if (funcName) {
            console.log('WASM Module Function:');
            const func = wasmModule.instance.exports[funcName];
            console.log('Running function ', funcName, ' no params.');
            const result = func();
            console.log(result);
            if (varA) {
                console.log('Running function ', funcName, ' params varA.');
                const result2 = func(varA);
                console.log(result2);
            }
            if (varB) {
                console.log('Running function ', funcName, ' params varA, varB.');
                const result3 = func(varA, varB);
                console.log(result3);
            }
        }
    })
    .catch(error => {
        console.log('\n\nThere was an error:\n\n');
        console.log(error);
        console.log('\n\nI dont think it likes handling WASM32-WASI, just WASM32-unknown-unknown.\n\n');
    });