
let pathToWasm = '';
if (process.argv.length < 3) {
    console.log('\n\nNeed Path To WASM\n\n');
    return;
}
pathToWasm = process.argv[2];

const fs = require('fs');
const wasmBuffer = fs.readFileSync(pathToWasm);

WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
    console.log(wasmModule.instance.exports);
});