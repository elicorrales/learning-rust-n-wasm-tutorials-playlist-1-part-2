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

## Create Rust/Cargo Bin and Lib Projects  
  
In your software projects directory, possibly create a sub-directory, for example:  
```
mkdir -p ~/SwDev/rust/wasm
```
  
Change to that directory, then create a Rust bin project:  
```
cargo new my-first-wasm-bin --bin --vcs none
```
  
Then create a Rust lib project:  
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
  

