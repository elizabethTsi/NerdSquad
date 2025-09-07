````markdown
# HackForsyth Next.js + Tailwind CSS Project

This is a basic Next.js 13+ project configured with TypeScript and Tailwind CSS.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (recommended version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   git clone https://github.com/elizabethTsi/NerdSquad.git
   cd my-app

2. **Install dependencies:**

   npm install

3. **Run the development server:**

   npm run dev

4. **Open your browser and visit:**

   http://localhost:3000

### Troubleshooting

If you run into issues with missing modules or Tailwind not working properly, try cleaning the cache and reinstalling dependencies:

rm -rf node_modules package-lock.json
npm cache clean --force
npm install

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
````
