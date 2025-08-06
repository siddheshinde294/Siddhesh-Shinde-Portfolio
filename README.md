# Siddhesh Shinde - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience.

## 🚀 Live Demo

[View Portfolio](https://your-vercel-url.vercel.app)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Contact Form**: Integrated EmailJS for seamless communication
- **Auto-Reply**: Professional auto-reply system for form submissions
- **Smooth Navigation**: Intuitive page transitions and scroll behavior
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📁 Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── AboutPage.tsx   # About page component
│   ├── SkillsPage.tsx  # Skills page component
│   ├── ProjectsPage.tsx # Projects page component
│   └── CertificationsPage.tsx # Certifications page component
├── config/             # Configuration files
│   └── emailjs.ts      # EmailJS configuration
├── public/             # Static assets
├── styles/             # Global styles
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional)
   - Follow the setup guide in `EMAILJS_SETUP.md`
   - Update `config/emailjs.ts` with your credentials

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. To configure:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service and templates
3. Update `config/emailjs.ts` with your credentials
4. See `EMAILJS_SETUP.md` for detailed instructions

## 🎨 Customization

### Colors and Styling
- Edit `tailwind.config.js` for theme customization
- Modify `styles/globals.css` for global styles

### Content
- Update personal information in `App.tsx`
- Modify project details in `components/ProjectsPage.tsx`
- Edit skills in `components/SkillsPage.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Optimized layouts for all screen sizes
- Touch-friendly navigation
- Adaptive typography and spacing

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy automatically** on every push to main branch

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: siddheshinde294@gmail.com
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ by Siddhesh Shinde 