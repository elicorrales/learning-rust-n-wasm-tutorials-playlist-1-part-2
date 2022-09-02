#[no_mangle]
pub fn say_hello() {
    println!("Hello World!");
}

#[no_mangle]
pub fn say_hello_2() -> String {
    "Hello World!".to_string()
}

#[no_mangle]
pub fn echo(message: String) -> String {
    message
}

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub fn mul(a: i32, b: i32) -> i32 {
    a * b
}

#[no_mangle]
pub fn square(a: i32) -> i32 {
    a * a
}
