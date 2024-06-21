# Welcome to the Angular & Node.js template!

When you start a new app, you may clone this project, which has the following already set up for you:

## 1. Front end

- Homepage, help page and topbar under app module.
- A documentation module for markdown documentation accessible via a button on the topbar.
- Shared module that exports
  - Material UI modules such as stepper, slider, expansion panel.
  - Common utlity modules such as ReactiveForms module, HttpClient module.
  - Custom components
    - input
    - date
    - single choice
    - multiple choices
    - radio group
    - snack bar
    - spinner
- Packages such as ngx-markdown, prismjs, katex have been configured in angular.json.
- Package mermaid (for charting) is not installed. Mermaid v10 has a bug that will be removed in mermaid 11. Please install mermaid 11 after it becomes avaiable if your app documentation requires mermaid charts.

# 2. Back end

- TypeScript has been set up with custom CLI commands defined in package.json including 'npm build' and 'npm start'
- Folder structure has been set up, including /src (TypeScript source code), /dist (compiled JavaScript code), and /angular (compiled front end)

# 3. Git, Docker, etc.
- .gitignore, Dockerfile, .dockerignore have been created under the project root directory

# 4. CLI commands

- to build the front end into /angular on te back end
<pre><code class="command-line">ng build --output-path='../server/angular' -c=production</code></pre>

- to build the back end
<pre><code class="command-line">npm run build</code></pre>

- to serve the back end
<pre><code class="command-line">npm start</code></pre>
