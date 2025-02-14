# Nessa - AI-Powered Dataset Discovery Platform

Nessa is a modern web application that helps researchers and data scientists find and evaluate datasets faster by aggregating sources like Kaggle and Google Dataset Search. The platform offers AI-powered search, dataset summarization, and compatibility checking—all within a sleek, professional UI.

## Features

- Natural language dataset search across multiple sources
- Quick dataset summaries (size, columns, last updated)
- Dataset compatibility checking
- Modern, responsive UI built with React and Tailwind CSS
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nessa.git
   cd nessa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```
   VITE_KAGGLE_API_KEY=your_kaggle_api_key
   VITE_GOOGLE_API_KEY=your_google_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Query
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.