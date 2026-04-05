# React Query

<!-- - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs) -->
<!-- - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) -->
## Project setup with vite
Link: [`Vite`](https://vite.dev/)
<details>
<summary> 
Project Setup
</summary>

### in terminal
```java
npm create vite@latest
```
1. Then give project-name
2. Select react
3. select "Javascript"
4. choose other options
5. Press "enter"

</details>



## Packages

- npm install tailwindcss @tailwindcss/vite
- npm install react-router-dom

<details>
<summary> 
Tailwind Config 
</summary>

### Terminal
Link: [`tailwindcss`](https://tailwindcss.com/docs/installation/using-vite)
```
npm install tailwindcss @tailwindcss/vite
```

### In "vite.config.ts"
```java
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // this one need to add
export default defineConfig({
  plugins: [
    tailwindcss(), // this one
  ],
})
```

### Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS. Here we add this in **index.css**:
```java
@import "tailwindcss";
```

### For Testing
Add html in **App.js**
```java
<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>   
```
</details>

<details>
<summary> 
React Router Config 
</summary>


</details>