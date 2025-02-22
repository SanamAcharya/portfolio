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
