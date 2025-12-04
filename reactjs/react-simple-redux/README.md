# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Unit Testing Setup

### 1. Install the testing tools
```
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

### 2. Update your vite.config.js
```ruby
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // allows "test", "expect" without imports
    environment: 'jsdom', // simulates a browser
    setupFiles: './src/setupTests.js'
  }
})
```
### 3. Create src/setupTests.js
```
import '@testing-library/jest-dom';
```

### 4. Create your first test
Example: src/App.test.jsx
```ruby
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

test('renders heading', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const heading = screen.getByText(/hello/i);
  expect(heading).toBeInTheDocument();
});
```

Make sure your `App.jsx` includes something like:
```ruby
<h1>Hello World</h1>
```
### 5. Add test script to package.json
```ruby
"scripts": {
  "test": "vitest"
}
```

### 6. Run the tests
```
npm run test
```