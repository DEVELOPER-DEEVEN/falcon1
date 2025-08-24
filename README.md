# FalconX

FalconX is an AI-powered desktop automation platform for macOS and Windows. It combines LLM reasoning, computer vision, and accessibility APIs to execute natural-language tasks.

## 🚀 Core Features

*   **Cross-Platform Automation:** Supports macOS and Windows desktop automation.
*   **Advanced Perception:** Uses computer vision and DOM parsing to understand UI elements.
*   **Natural Language Control:** Converts natural language commands into executable action plans.
*   **Workflow Recorder:** A recorder and player to capture and replay automation workflows.
*   **Extensible via Plugins:** A Plugin SDK allows developers to add new capabilities.
*   **Secure by Design:** Features a sandboxed environment for plugins and fine-grained permissions.
*   **Modern UI:** A sleek dashboard built with Tauri and React for managing workflows and settings.

## 🏗️ Architecture

FalconX is built with a modern, service-oriented architecture using a monorepo.

*   **`packages/client`:** The Tauri+React frontend dashboard.
*   **`packages/agent`:** The core automation agent written in Rust.
*   **`packages/vision`:** A Python microservice for computer vision tasks.
*   **`packages/planner`:** A TypeScript service for task planning.
*   **`packages/recorder`:** A TypeScript package for recording user actions.
*   **`packages/sdk`:** The TypeScript-based Plugin SDK.
*   **`packages/server`:** An optional Node.js server for orchestration.

## 🏁 Getting Started

See the [Developer Quickstart](docs/DEV_QUICKSTART.md) to get your local development environment set up.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## 📄 License

FalconX is licensed under the [MIT License](LICENSE).
