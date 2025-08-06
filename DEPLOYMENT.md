# Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites
- GitHub repository with your portfolio code
- Vercel account

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Automatic Deployments
- Every push to `main` branch will trigger a new deployment
- Preview deployments are created for pull requests

### Custom Domain
- Go to your project settings in Vercel
- Add your custom domain
- Update DNS settings as instructed

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Set up email service (Gmail, Outlook, etc.)
3. Create email templates for notification and auto-reply
4. Update `config/emailjs.ts` with your credentials

## 🔧 Environment Variables

No environment variables required. EmailJS credentials are stored in `config/emailjs.ts`. 