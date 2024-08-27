# Tech Stack
**Client:** React, TailwindCSS, NanoID, Axios, Redux Toolkit and React Router

**Server:** Express, Mongoose, MongoDB and NodeMon



# Create Front-End

### Vite (https://vitejs.dev)
- `npm create vite@latest`
- Enter project name
- Select project type > React > JavaScript
- Go to my project name `cd project`
- `npm install`
- `npm run dev` for run react
- Open http://localhost:5173/ on Browser for check working

### TailwindCSS (https://tailwindcss.com)
- [Installation](https://tailwindcss.com/docs/guides/vite)
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Go to tailwind.config.js file and add config `content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],`
- Go to main CSS file (/src/App.css) and add `@tailwind base;` `@tailwind components;` `@tailwind utilities;`

### NanoID (https://www.npmjs.com/package/nanoid)
- [Read Me](https://github.com/ai/nanoid#readme)
- `npm install nanoid`

### Axios
- [Get Started](https://axios-http.com/docs/intro)
- `npm install axios`

### Redux Toolkit
- [Get Started](https://redux-toolkit.js.org/introduction/getting-started)
- `npm install @reduxjs/toolkit`
- `npm install react-redux`

### React Router
- [Get Started](https://reactrouter.com/en/main/start/tutorial)
- `npm install react-router-dom`

### React Paginate
- [Get Started](https://github.com/AdeleD/react-paginate?tab=readme-ov-file#readme)
- `npm install react-paginate`

### TinyMCE
- [Get Started](https://www.tiny.cloud/docs/integrations/react/)
- `npm install @tinymce/tinymce-react`

### QR Code
- [Get Started](https://www.npmjs.com/package/qrcode.react)
- [Demo](https://zpao.github.io/qrcode.react/)
- `npm install qrcode.react`



# Create Back-End

- `npm init -y`
- `npx install express`
- `npx install express-session`
- `npx install ejs`
- `npx install connect-flash`
- `npx install bcrypt`

### Express application generator
- [Get Started](https://expressjs.com/en/starter/generator.html)
- `npx express-generator`
- `npm install`
- Can change port to other number in /bin/www file `var port = normalizePort(process.env.PORT || '3001');`

### Cors
- [Installation](https://expressjs.com/en/resources/middleware/cors.html)
- `npm install cors`

### Mongoose (https://mongoosejs.com/)
- `npm install mongoose --save`
- Open app.js file
- Import code `const mongoose = require('mongoose');` `mongoose.Promise = global.Promise;`

### MongoDB
- Sign Up
- Create Database
- [Set Auto-Increment](https://www.mongodb.com/developer/products/atlas/triggers-tricks-auto-increment-fields/)
- Go to Connect > Drives > Copy string into your application code to my project
- Paste code in app.js file `mongoose.connect('string into your application code').then(() => console.log('Connection Successfully!')).catch((err) => console.error(err));`
- Change <password> in string code to my password

### NodeMon (https://www.npmjs.com/package/nodemon)
- `npm install nodemon`
- Open package.json file
- Change "start": "`node ./bin/www`" to "`nodemon ./bin/www`"
- Run by `npm start`
- Open http://localhost:3001/ on Browser for check working