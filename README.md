# Run Hello World  
  
## Set Up  
  
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
    
## Run Targets With Wasmedge  

Let's try to run the ```wasm32-unknown-unknown``` target, with wasmedge:  
```
wasmedge ./target/wasm32-unknown-unknown/release/my-first-wasm-bin.wasm
```
```
[2022-08-29 20:38:19.114] [error] wasmedge runtime failed: wasm function not found, Code: 0x05
[2022-08-29 20:38:19.114] [error]     When executing function name: "_start"
```
  

Now let's try to run the ```wasm32-wasi``` target:  
```
wasmedge ./target/wasm32-wasi/release/my-first-wasm-bin.wasm
```
```
Hello, world!
```
<br/>

## Run Targets With Wasmtime 

Let's try to run the ```wasm32-unknown-unknown``` target, with wasmedge:  
```
wasmedge ./target/wasm32-unknown-unknown/release/my-first-wasm-bin.wasm
```
```
[2022-08-29 20:38:19.114] [error] wasmedge runtime failed: wasm function not found, Code: 0x05
[2022-08-29 20:38:19.114] [error]     When executing function name: "_start"
```
  

Now let's try to run the ```wasm32-wasi``` target:  
```
wasmedge ./target/wasm32-wasi/release/my-first-wasm-bin.wasm
```
```
Hello, world!
```
<br/>

