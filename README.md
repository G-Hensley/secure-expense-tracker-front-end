# Secure Expense Tracker Front-End

A responsive web application for tracking expenses securely. Built with Next.js, React.js, TypeScript, and TailwindCSS, this front-end connects to a robust backend using Node, Express, MongoDB, GraphQL, WebSockets, and Apollo Server for real-time data synchronization.

## Folder Structure
```plaintext
secure-expense-tracker-front-end/
├── components/           # Reusable React components
├── pages/                # Next.js pages
├── public/               # Static assets like images or icons
├── styles/               # TailwindCSS and global styles
├── utils/                # Utility functions
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```
## Tools Used
- **Framework**: Next.js, React.js
- **Languages**: TypeScript, JavaScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel

## Getting Started
Follow these steps to set up the project locally:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/G-Hensley/secure-expense-tracker-front-end.git
   ```
2. Navigate into the folder:
   ```bash
   cd secure-expense-tracker-front-end
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser.

##Deployment

The front-end is deployed on Vercel. To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel via the Vercel dashboard.
3. Configure any necessary environment variables.
4. Deploy using Vercel’s automatic deployment feature.

The backend is deployed separately on Heroku (see the note below for details).
