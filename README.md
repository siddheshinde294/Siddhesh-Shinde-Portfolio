# Siddhesh Jitendra Shinde - Portfolio

A pixel-perfect conversion of my Figma portfolio design to a deployable React application.

## 🚀 Features

- **Pixel-Perfect Design**: Exact replication of Figma design with no compromises
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Enhanced user experience with motion animations
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Vite
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
Siddheshinde/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── AboutPage.tsx   # About page component
│   ├── SkillsPage.tsx  # Skills page component
│   ├── ProjectsPage.tsx # Projects page component
│   └── CertificationsPage.tsx # Certifications page component
├── styles/             # Global styles
├── public/             # Static assets
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── package.json       # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Siddheshinde
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build & Deploy

### Local Build

```bash
npm run build
```

### Vercel Deployment

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Manual Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration
   - Deploy!

## 📝 Environment Variables

No environment variables are required for this project.

## 🎨 Customization

### Adding Your Profile Image

1. Place your profile image in `public/assets/`
2. Update the image path in `App.tsx`:
   ```typescript
   const exampleImage = '/assets/your-image.jpg';
   ```

### Modifying Content

- **Personal Information**: Update content in `App.tsx`
- **Skills**: Modify `components/SkillsPage.tsx`
- **Projects**: Update `components/ProjectsPage.tsx`
- **Certifications**: Edit `components/CertificationsPage.tsx`
- **About**: Modify `components/AboutPage.tsx`

### Styling

- **Global Styles**: Edit `styles/globals.css`
- **Tailwind Config**: Modify `tailwind.config.js`
- **Component Styles**: Use Tailwind classes or CSS modules

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (375px+)

## 🎯 Performance Features

- **Code Splitting**: Automatic chunk splitting for faster loading
- **Image Optimization**: Optimized image loading
- **Lazy Loading**: Components load on demand
- **Caching**: Proper cache headers for static assets

## 🔒 Security

- **Content Security Policy**: Configured in Vercel
- **XSS Protection**: Enabled headers
- **Frame Options**: Prevented clickjacking

## 📊 Analytics (Optional)

To add analytics:

1. **Google Analytics**
   ```html
   <!-- Add to index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

## 🤝 Contributing

This is a personal portfolio project. For any suggestions or improvements, please feel free to reach out!

## 📄 License

This project is for personal use only.

## 📞 Contact

- **Email**: siddheshinde294@gmail.com
- **LinkedIn**: [linkedin.com/in/siddheshinde](https://www.linkedin.com/in/siddheshinde/)
- **GitHub**: [github.com/siddheshinde294](https://github.com/siddheshinde294)

---

**Built with ❤️ by Siddhesh Jitendra Shinde** 