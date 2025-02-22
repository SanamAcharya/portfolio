# Portfolio Website

This is a modern portfolio website built with React and Tailwind CSS.

## Project Structure

```
client/
  ├── public/
  │   └── images/              # Place your images here
  │       └── projects/        # Project images go here
  │           └── project-name/
  │               ├── thumbnail.jpg
  │               ├── header.jpg
  │               └── gallery-1.jpg
  ├── src/
  │   ├── content/            # Edit these files to update your content
  │   │   ├── projects.ts     # Add/edit your projects here
  │   │   └── personal-info.ts # Update your personal info here
  │   └── components/         # React components
```

## How to Run Locally

1. Install Dependencies:
```bash
npm install
```

2. Start Development Server:
```bash
npm run dev
```

3. Open http://localhost:5000 in your browser

## How to Update Content

1. **Add Project Images:**
   - Place your project images in `client/public/images/projects/[project-name]/`
   - Use meaningful names like `thumbnail.jpg`, `header.jpg`, `gallery-1.jpg`

2. **Update Project Information:**
   - Edit `src/content/projects.ts`
   - Add new projects or modify existing ones
   - Link to your images using the path `/images/projects/[project-name]/image.jpg`

3. **Update Personal Information:**
   - Edit `src/content/personal-info.ts`
   - Update your name, role, contact details, and social links

## Image Guidelines

- Use high-quality images in JPG or PNG format
- Recommended sizes:
  - Thumbnails: 800x600px
  - Header images: 1200x800px
  - Gallery images: 1200x800px
- Keep file sizes under 500KB for better performance

## Deployment to GitHub Pages

1. Create a GitHub repository:
```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

2. Update package.json:
   - Add your domain name to a new CNAME file in the public directory
   - Set the "homepage" field to your domain

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/docs" folder
   - Click "Save"

4. Configure Custom Domain (sanamacharya.com.np):
   - Create a file named `CNAME` in the `client/public` directory with content:
     ```
     sanamacharya.com.np
     ```
   - Configure DNS records at your domain provider:
     ```
     A Records:
     @ 185.199.108.153
     @ 185.199.109.153
     @ 185.199.110.153
     @ 185.199.111.153

     CNAME Record:
     www sanamacharya.com.np
     ```
   - Wait for DNS propagation (can take up to 48 hours)

5. Deploy:
```bash
# Build the project
npm run build

# Push the changes to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Your site will be available at https://sanamacharya.com.np once DNS propagation is complete.

## Troubleshooting

If your site is not loading:
1. Check if GitHub Pages is enabled in repository settings
2. Ensure DNS records are configured correctly
3. Wait for DNS propagation (up to 48 hours)
4. Check if CNAME file exists in the repository

For more help, check [GitHub Pages Documentation](https://docs.github.com/en/pages).

## Deployment
### Option 1: Deploy from GitHub (Recommended)

1. Push to GitHub:
```bash
# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

2. Deploy with Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or login with your GitHub account
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository
   - Click "Deploy"

3. Environment Variables:
   - Copy `.env.example` to create a new `.env` file
   - In Vercel Dashboard, go to Project Settings > Environment Variables
   - Add the required environment variables
   - Remember to prefix frontend variables with `VITE_`

4. Custom Domain Setup:
- Go to Vercel Dashboard > Project Settings > Domains
- Add your domain: sanamacharya.com.np
- Configure DNS records:
  ```
  A Record:
  Name: @
  Value: 76.76.21.21

  CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
  ```

### Option 2: Deploy from Local Machine

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
vercel login
vercel
```

For more detailed instructions, check the [Vercel Documentation](https://vercel.com/docs).