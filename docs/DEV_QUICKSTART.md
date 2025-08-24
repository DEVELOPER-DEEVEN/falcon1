# FalconX Developer Quickstart

This guide will walk you through setting up your local development environment for FalconX.

## Prerequisites

You will need the following tools installed on your system:

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [pnpm](https://pnpm.io/)
*   [Rust](https://www.rust-lang.org/)
*   [Python](https://www.python.org/) (v3.9 or later)
*   [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

## 1. Clone the Repository

```bash
git clone https://github.com/falconx/falconx.git
cd falconx
```

## 2. Install Dependencies

This project uses `pnpm` workspaces. Install all dependencies from the root of the repository.

```bash
pnpm install
```

## 3. Set up the Vision Service

The vision service runs on Python. You'll need to set up a virtual environment and install the dependencies from `requirements.txt`.

```bash
cd packages/vision
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
cd ../..
```

## 4. Build all Packages

You can build all the packages in the monorepo from the root directory.

```bash
pnpm build
```

## 5. Running the Application

To run the full FalconX application, you'll need to start each service.

*   **Start the Vision Service:**
    ```bash
    cd packages/vision
    uvicorn main:app --reload
    ```

*   **Start the Client:**
    ```bash
    cd packages/client
    pnpm dev
    ```

This will launch the Tauri desktop application. From the client, you can interact with the other services.
