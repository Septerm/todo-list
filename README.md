# Odin Todo List

A browser-based todo list application built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. Tasks and projects are organized and persisted in your browser's `localStorage`, so your data stays with you across page reloads.

## Features

- **Create projects** — group related tasks into their own projects.
- **Add tasks** — each task can have a title, description, priority (High / Medium / Low), and a due date.
- **Delete tasks and projects** — clean up with a single click.
- **Default Inbox** — an `Inbox` project is provided out of the box to hold tasks that don't belong to a project.
- **Persistent storage** — everything is saved to `localStorage` automatically, so your list survives refreshes and browser restarts.

## Built With

- **Vanilla JavaScript (ES6 modules)** — the app uses classes and modules throughout (`Task`, `Project`, `TodoList`, `Storage`, `Ui`).
- **Webpack** — for bundling modules, styles, and HTML templates.
- **CSS** — custom styling with a sidebar layout.
- **`<dialog>` elements** — native HTML dialog elements handle the "New Task" and "New Project" modals.

## Project Structure

```
├── src/
│   ├── index.js              # Entry point, wires up the UI
│   ├── template.html         # HTML shell with dialogs and layout
│   ├── styles.css            # All application styles
│   ├── images/               # SVG icons
│   └── modules/
│       ├── task.js           # Task class (title, description, due date, priority)
│       ├── project.js        # Project class (name + task list)
│       ├── todolist.js       # TodoList class (collection of projects)
│       ├── storage.js        # localStorage read/write helpers
│       └── ui.js             # DOM rendering and event wiring
├── webpack.common.js         # Shared webpack config
├── webpack.dev.js            # Development config (dev server)
└── webpack.prod.js           # Production config (build)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

```bash
# Clone the repository
git clone https://github.com/Septerm/todo-list.git

# Navigate into the project
cd todo-list

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

This starts the Webpack dev server and serves the app locally (usually at `http://localhost:8080`), with live reloading as you edit.

### Building for Production

```bash
npm run build
```

This produces an optimized bundle in the `dist/` directory.

### Deploying to GitHub Pages

The app is deployed to GitHub Pages via a subtree push of the `dist` folder:

```bash
npm run deploy
```

## Usage

1. **Add a task** — open a project and click **+ Add Task**, then fill in the title, description, priority, and due date.
2. **Create a project** — click **+ Add Project** in the sidebar and give it a name.
3. **Switch projects** — click any project in the sidebar to view its tasks.
4. **Delete** — click **Remove Task** on a task card, or the **X** next to a project in the sidebar.

## Author

**Garion Charles** — [GitHub](https://github.com/Septerm)

## License

This project is licensed under the ISC License.