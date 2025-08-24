use napi_derive::napi;

/// Clicks at a given point on the screen.
/// In a real implementation, this would use platform-specific APIs.
#[napi]
pub fn click(x: i32, y: i32) {
    println!("Simulating click at ({}, {})", x, y);
}

/// Types a given string.
/// In a real implementation, this would simulate keyboard events.
#[napi]
pub fn type_text(text: String) {
    println!("Simulating typing: {}", text);
}

/// Takes a screenshot and saves it to the given path.
/// In a real implementation, this would capture the screen.
#[napi]
pub fn screenshot(path: String) {
    println!("Simulating taking a screenshot to {}", path);
}

// A simple function to test the bridge
#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}
