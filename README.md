# Magicle

Magicle is a **Magic: The Gathering Wordle-style game** built with **React**, **TypeScript**, and **Vite**. Players guess MTG cards, receiving hints about **colors, mana value, type, and rarity** across a limited number of guesses.

---

## 🎮 Features

- Guess the **MTG card** in up to 10 attempts
- Hints include:
  - Card **colors** (W, U, B, R, G)
  - **Mana value**
  - **Card type** (Creature, Sorcery, etc.)
  - **Rarity** (Common, Rare, Mythic, etc.)
- Handles multicolor cards and colorless cards
- Built with **React + TypeScript** for type safety
- Powered by the **Scryfall API** for card data

---

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) – Development build tool
- [React](https://reactjs.org/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Scryfall API](https://scryfall.com/docs/api) – Fetch MTG card data


## Build plan 
- [App structure](./public/Magicl.png)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Dbrowne14/Magicle.git
cd Magicle
```

### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
### 4. Build for production
```bash
npm run build
```
### 5. Preview production build
```bash
npm run preview
```
### 📦 Key Dependencies

- react – UI framework
- react-dom – DOM rendering
- tailwindcss – Utility-first styling
- @tailwindcss/vite – Tailwind + Vite integration
- lucide-react – Icons
- react-select – Dropdown/select components
- fitty – Text resizing

### 🧠 Game Logic Overview

- Players submit guesses via input/select
- Each guess is compared to the target card
- Feedback is generated based on:
- Matching colors
- Mana value proximity
- Type match
- Rarity match
- UI updates dynamically per guess

### 📁 Project Structure 

[App Structure](./public//StapleAppStructure.png)

### Data is fetched from:

👉 https://api.scryfall.com

### 🚧 Future Improvements
Daily challenge mode
Score tracking
Better animations
Mobile UX improvements
Caching API responses

### 📄 License

ISC