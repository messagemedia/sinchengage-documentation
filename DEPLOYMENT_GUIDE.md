# 🚀 GitHub Pages Deployment Guide

## Setup Instructions

### **Step 1: Rename Repository** (Manual on GitHub)
1. Go to your GitHub repo settings
2. Rename from `sinchengage-documentation` → `sinchengage.github.io`
3. This enables automatic GitHub Pages hosting at `https://sinchengage.github.io`

### **Step 2: Configure GitHub Pages** (Manual on GitHub)
1. Go to repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` 
4. Folder: `/documentation`
5. Click Save

### **Step 3: First Deployment**
Run locally:
```bash
npm install
npm test
npm run build
npm run deploy
```

This will:
- ✅ Validate OpenAPI spec
- ✅ Build to `web_deploy/`
- ✅ Copy to `/documentation/` folder
- ✅ Commit and push to GitHub

### **Step 4: Automatic Deployments**
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- ✅ Run on every push to `main`
- ✅ Validate spec
- ✅ Build docs
- ✅ Deploy to `/documentation/` folder
- ✅ Auto-update live site

## Result
After ~2 minutes, your documentation will be live at:
```
https://sinchengage.github.io/documentation
```

## URL Structure
- API Docs: `https://sinchengage.github.io/documentation`
- SwaggerUI: `https://sinchengage.github.io/documentation/swagger-ui/`
- ReDoc: `https://sinchengage.github.io/documentation/index.html`

## Troubleshooting
- **Pages not showing?** Wait 2-5 minutes and hard refresh (Cmd+Shift+R)
- **Build failing?** Check GitHub Actions tab → Workflows for error logs
- **Wrong content?** Verify `/documentation` folder has correct files in repo

