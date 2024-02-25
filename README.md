# Tech Stack
**Client:** React, TailwindCSS

**Server:** Express, Mongoose, NodeMon, MongoDB and Axios



# Create front-end by React.JS

### Vite (https://vitejs.dev)
- `npm create vite@latest`
- Enter project name
- Select project type > React > JavaScript.
- Go to my project name `cd project`
- `npm install`
- `npm run dev` for run react
- Open http://localhost:5173/ on Browser.

### TailwindCSS (https://tailwindcss.com)
- `npm install -D tailwindcss postcss autoprefixer` [Installation](https://tailwindcss.com/docs/guides/vite)
- `npx tailwindcss init -p`
- Go to tailwind.config.js file and add config `content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],`
- Go to main CSS file (/src/App.css) and add `@tailwind base;` `@tailwind components;` `@tailwind utilities;`

### UUID (https://npmjs.com/package/uuid)
### NanoID



# Create Back-End by Express