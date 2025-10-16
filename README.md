# 🎮 2K48 Game
 


Public Git repo 👉 [https://github.com/Subhajeet-code/2048-Game](https://github.com/Subhajeet-code/2048-Game)


Play online here 👉 [https://2k48game-subhajeet-sahu.netlify.app](https://2k48game-subhajeet-sahu.netlify.app)
---

## 🎯 Objective

- Combine tiles with the same number to merge them into a single tile.
- Your goal is to create a 2048 tile by strategically combining numbers!.

---

## 🎮 Controls

### 🖥️ Desktop
- Use **↑ ↓ ← →** (arrow keys) or **W / A / S / D** to move tiles.
- Each move slides all tiles in the chosen direction.
- When two tiles with the same value collide, they merge into one tile with their sum.

### 📱 Mobile / Tablet
- **Swipe** up, down, left, or right to move tiles.
- The same merging rules apply.

---

## 🏆 Winning
- You **win** when a tile reaches **2048**.

---

## 💀 Losing
- The game **ends** when:
  - No empty cell is left, **and**
  - No adjacent tiles have the same value.

---

## 💡 Tips & Strategy
- Keep your **highest tile in one corner** (bottom-right works best).
- Avoid moves that **break your sequence** or shift your largest tile out of place.
- Plan ahead — each move spawns a new tile that can block you.

---

## ⚙️ Features
- 🧩 Responsive grid (4×4, 5×5, 6×6 options)
- 🎨 Modern UI with gradients and animations
- 🎮 Keyboard and mobile swipe support
- 💾 Score and best score saved in `localStorage`
- 🔁 Restart anytime with a single click
- ☁️ Fully deployed web app on Netlify

---

## 🧱 Installation & Running Locally

```bash
# Clone this repository
git clone https://github.com/Subhajeet-code/2048-Game.git
cd 2048-Game

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
