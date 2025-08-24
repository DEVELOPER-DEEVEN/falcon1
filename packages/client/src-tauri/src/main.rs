// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn start_recording() {
    println!("Start recording command received");
}

#[tauri::command]
fn stop_recording() {
    println!("Stop recording command received");
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, start_recording, stop_recording])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
