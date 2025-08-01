# Neumorphic Portfolio

This is a polished, production-ready personal portfolio built using:

- ⚛️ **React + Vite + TypeScript**
- 🎨 **SCSS** with Neumorphic design system
- 🔧 Modular components with soft UI
- 🧩 Smooth scroll, CTA, and scroll-to-top features
- 🚀 Deployed to **Vercel** and custom domain [`stegadgets.com`](https://stegadgets.com)

---

## 🔧 Tech Stack

- React 19
- Vite 7
- TypeScript 5
- SCSS modules
- ESLint + Prettier
- Framer Motion (optional use)
- `react-icons`

---

## 📂 Project Structure

src/
components/
Hero/
About/
Projects/
Contact/
Footer/
styles/
_variables.scss
_mixins.scss
global.scss
App.tsx
main.tsx

yaml
Copy
Edit

---

## 🧪 Running Locally

```bash
git clone https://github.com/whyte-fanggg/neumorphic-portfolio.git
cd neumorphic-portfolio
npm install
npm run dev

🚨 ESLint Setup
You can extend ESLint for type-aware rules:

js
Copy
Edit
// eslint.config.js
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.strictTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

📦 Deployment
This project is deployed via:

GitHub → whyte-fanggg/neumorphic-portfolio

Vercel → Automatically builds from main branch

Custom Domain → stegadgets.com

✨ Credits
Crafted by Stephen Chintalapudi
