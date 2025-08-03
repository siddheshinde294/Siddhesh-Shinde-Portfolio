# 🚀 Vercel Deployment Guide

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Node.js**: Version 18+ installed

## Step 1: Push to GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `siddhesh-portfolio`
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/siddhesh-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Connect GitHub Repository

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with your GitHub account

2. **Import Repository**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Find and select your `siddhesh-portfolio` repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (usually 2-3 minutes)

### Option B: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## Step 3: Custom Domain (Optional)

1. **Add Custom Domain**:
   - Go to your project dashboard on Vercel
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `portfolio.yourname.com`)

2. **Configure DNS**:
   - Follow Vercel's DNS configuration instructions
   - Update your domain provider's DNS settings

## Step 4: Environment Variables (If Needed)

Currently, no environment variables are required. If you add any later:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables

## Step 5: Verify Deployment

1. **Check Your Site**:
   - Visit your deployed URL (e.g., `https://siddhesh-portfolio.vercel.app`)
   - Test all functionality:
     - Navigation between pages
     - Contact form
     - Responsive design
     - Animations

2. **Performance Check**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Check Core Web Vitals
   - Optimize if needed

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Dependencies**:
   ```bash
   npm install
   npm run build
   ```

2. **Clear Cache**:
   ```bash
   rm -rf node_modules
   rm -rf .next
   npm install
   ```

3. **Check Logs**:
   - Go to your Vercel dashboard
   - Click on the failed deployment
   - Check build logs for errors

### Common Issues

1. **Module Not Found**: Make sure all dependencies are in `package.json`
2. **TypeScript Errors**: Run `npm run build` locally first
3. **CSS Issues**: Check Tailwind configuration

## Post-Deployment

### Analytics (Optional)

1. **Google Analytics**:
   - Add GA tracking code to `index.html`
   - Configure in Google Analytics dashboard

2. **Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

### SEO Optimization

1. **Meta Tags**: Already configured in `index.html`
2. **Sitemap**: Consider adding a sitemap
3. **Robots.txt**: Add if needed

### Performance Monitoring

1. **Vercel Analytics**: Enable in dashboard
2. **Core Web Vitals**: Monitor regularly
3. **Uptime Monitoring**: Consider uptime monitoring services

## Success! 🎉

Your portfolio is now live and ready to impress potential employers and clients!

### Next Steps

1. **Share Your Portfolio**:
   - Add to your LinkedIn profile
   - Include in job applications
   - Share on social media

2. **Keep It Updated**:
   - Regularly update projects
   - Add new skills and certifications
   - Keep contact information current

3. **Monitor Performance**:
   - Check analytics regularly
   - Optimize based on user behavior
   - Update content as needed

---

**Your portfolio is now a pixel-perfect representation of your Figma design, deployed and ready for the world to see!** 🌟 