# School Education Web Application

A modern web application for a school education platform, built with React, TypeScript, and Vite.

## Features
- Modular component structure for About, Academics, Home, and Common UI
- Organized asset and image management
- TypeScript for type safety
- Fast development with Vite
- ESLint for code linting

## Project Structure
```
client/
  ├── assets/           # Static images and design assets
  ├── public/images/    # Publicly served images
  ├── src/
  │   ├── components/   # React components grouped by feature
  │   ├── pages/        # Page-level components
  │   └── style/        # CSS files
  ├── index.html        # Main HTML file
  ├── package.json      # Project dependencies and scripts
  ├── tsconfig*.json    # TypeScript configuration
  └── vite.config.ts    # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Navigate to the `client` directory:
  ```bash
  cd client
  ```
2. Install dependencies:
  ```bash
  npm install
  # or
  yarn install
  ```

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
