use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Point {
    x: i32,
    y: i32,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ClickAction {
    position: Point,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct TypeAction {
    text: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ScreenshotAction {
    path: String,
}

/// Clicks at a given point on the screen.
/// In a real implementation, this would use platform-specific APIs.
#[no_mangle]
pub extern "C" fn click(x: i32, y: i32) {
    println!("Simulating click at ({}, {})", x, y);
}

/// Types a given string.
/// In a real implementation, this would simulate keyboard events.
#[no_mangle]
pub extern "C" fn type_text(text: *const std::os::raw::c_char) {
    let c_str = unsafe {
        assert!(!text.is_null());
        std::ffi::CStr::from_ptr(text)
    };
    let r_str = c_str.to_str().unwrap();
    println!("Simulating typing: {}", r_str);
}

/// Takes a screenshot and saves it to the given path.
/// In a real implementation, this would capture the screen.
#[no_mangle]
pub extern "C" fn screenshot(path: *const std::os::raw::c_char) {
    let c_str = unsafe {
        assert!(!path.is_null());
        std::ffi::CStr::from_ptr(path)
    };
    let r_str = c_str.to_str().unwrap();
    println!("Simulating taking a screenshot to {}", r_str);
}
