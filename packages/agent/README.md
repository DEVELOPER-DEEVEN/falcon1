# @falconx/agent

This package contains the core desktop automation agent for FalconX, written in Rust.

## ⚠️ Note on Native Addon Build

The native Rust addon is a core part of this package. However, the build process for this addon is currently disabled in some environments due to limitations in the build runner.

The `test.js` file in this package simulates the expected API and behavior of the native bindings. This allows for continued development and testing of other parts of the FalconX platform without requiring a full build of the native addon.

Replace the placeholder test with real bindings once the build works in a proper development environment (e.g., a local machine, Docker, or a CI runner with full filesystem access).
