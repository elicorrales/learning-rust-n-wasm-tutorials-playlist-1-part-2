# Build, Run Hello World (and other simple functions)
  
## Introduction  

In this part, we are going to explore a few ways to build and run WASM.  
This is just an introduction, and the hope is that it perks your interest, and most likely will lead to more questions, that we will attempt to find answers for as we go through this series.  
  
If you saw the very first video of the first Blockchain series, [Series 1 - NEAR Blockchain Tutorial](https://github.com/elicorrales/blockchain-tutorials/blob/main/README.md#series-i---near-blockchain-tutorial-deploying-wasm), we research and decide it would be a good thing to learn Rust, Blochain (decentralized apps), and also WASM.  All of those are "general-purpose" and not "niche" technologies.  
- The Rust programming language has many use-cases
- As well as blockchain dApps programming (smart contract)
- And so do programs written to run on WASM runtimes  
  
The initial goal with this Rust/WASM series in **not** to go too deep into WASM, but just enough to remove some of the magic, so that when we are working with a given WASM-based blockchain, we have an understanding of what's going on underneath and behind the scenes.  
  
However, this series could also spark interest in Rust/WASM for areas completely unrelated to blockchain programming.  
<br/>


## Set Up  

#### Common (Optional?) Dev Environmnet Setup (Rust, Node, NPM, NVM)
  
https://github.com/elicorrales/blockchain-tutorials/blob/main/How-To-Set-Up-Env-Common.md
  

#### Update Rust And Add Targets  
```
rustup update
```
```
rustup target add wasm32-unknown-unknown
```

```
rustup target add wasm32-wasi
```
<br/>  
  

## Create Rust/Cargo Bin and Lib Projects  
  
In your software projects directory, possibly create a sub-directory, for example:  
```
mkdir -p ~/SwDev/rust/wasm
```
  
#### Change to that directory, then create a Rust bin project:  
```
cargo new my-first-wasm-bin --bin --vcs none
```
  
#### Then create a Rust lib project:  
```
cargo new my-first-wasm-lib --lib --vcs none
```
  
Let's make changes to the ```lib``` project.  
  
Change to that directory, and edit ```src/lib.rs```.  
  
Remove **everything**.  
  
Add the following:  
```
pub fn say_hello() {
    println!("Hello World!");
}
```
  
Save, exit.  
  
Next, edit ```Cargo.toml```.  
   
Add the following new section:  
```
[lib]
crate-type = ["cdylib", "lib"]
```
  
Save, exit.  
<br/>  
  
  
## Build ```bin``` Project  

#### Go to the ```bin``` project directory, and do normal build/run:
```
cargo run --release
```
```
   Compiling my-first-wasm-bin v0.1.0 (/home/IamDeveloper/SwDevel/rust/wasm/my-first-wasm-bin)
    Finished release [optimized] target(s) in 0.42s
     Running `target/release/my-first-wasm-bin`
Hello, world!
```
  
#### Now let's do a ```wasm32-unknown-unknown``` build:
```
cargo build --target wasm32-unknown-unknown --release
```
```
   Compiling my-first-wasm-bin v0.1.0 (/home/IamDeveloper/SwDevel/rust/wasm/my-first-wasm-bin)
    Finished release [optimized] target(s) in 0.32s
```
  
#### Now let's instead do a ```wasm32-wasi``` build:
```
cargo build --target wasm32-wasi --release
```
```
   Compiling my-first-wasm-bin v0.1.0 (/home/IamDeveloper/SwDevel/rust/wasm/my-first-wasm-bin)
    Finished release [optimized] target(s) in 0.24s
```
<br/>
    
## Run Targets With Wasmedge, Wasmtime, Wasmer
  
#### Your Mileage Will Vary  
  

### Wasmedge  
  
```
wasmedge <path/to/wasm-unk-unk/or/wasm-wasi/file>
```
  
Optionally, you can run like so:
  
```
wasmedge --reactor <path/to/wasm-unk-unk/or/wasm-wasi/file>  function_name <any params required>
```
  

### Wasmtime 
  
```
wasmtime <path/to/wasm-unk-unk/or/wasm-wasi/file>
```
  
Optionally, you can run like so:
  
```
wasmtime <path/to/wasm-unk-unk/or/wasm-wasi/file> --invoke function_name <any params required>
```
  

### Wasmer
  
```
wasmer <path/to/wasm-unk-unk/or/wasm-wasi/file>
```
  
Optionally, you can run like so:
  
```
wasmer <path/to/wasm-unk-unk/or/wasm-wasi/file> -i function_name <any params required>
```
  

