# MyPersonalSite

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-v13.4.0-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-purple.svg)

**MyPersonalSite** is a modern, responsive, and highly customizable personal website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It showcases your professional portfolio, blog, and contact information in a sleek and user-friendly interface.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Adding Blog Posts](#adding-blog-posts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


---

## Features

- **Modern Front-End Stack**
  - **Next.js**: Server-side rendering and static site generation.
  - **TypeScript**: Enhanced code reliability and maintainability.
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

- **Responsive Design**
  - Mobile-first approach ensuring seamless experience across all devices.

- **SEO Optimized**
  - Proper meta tags and semantic HTML for better search engine visibility.

- **Blog Integration**
  - Write blog posts in Markdown with easy management.

- **Project Showcase**
  - Display your projects with detailed descriptions and links.

- **Contact Form**
  - Simple and effective way for visitors to reach out to you.

- **Optimized Images**
  - Utilizing Next.js Image component for automatic image optimization.

---

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Gray-Matter](https://github.com/jonschlinkert/gray-matter)
- [Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## Project Structure

```
my-personal-site/
├─ public/
│  ├─ images/
│  │  ├─ profile.jpg
│  │  └─ project1.jpg
│  └─ favicon.ico
│
├─ pages/
│  ├─ index.tsx
│  ├─ about.tsx
│  ├─ projects.tsx
│  ├─ contact.tsx
│  ├─ blog/
│  │  ├─ [slug].tsx
│  │  └─ index.tsx
│  └─ _app.tsx
│
├─ components/
│  ├─ Layout.tsx
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ Navbar.tsx
│  ├─ Hero.tsx
│  ├─ ProjectCard.tsx
│  ├─ BlogCard.tsx
│  ├─ Button.tsx
│  └─ SEO.tsx
│
├─ lib/
│  ├─ posts.ts
│  └─ utils.ts
│
├─ posts/
│  ├─ my-first-post.md
│  └─ another-post.md
│
├─ styles/
│  └─ globals.css
│
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

## Installation

Follow these steps to set up the project locally:

### 1. Prerequisites

- **Node.js**: Ensure you have Node.js (version 16 or above) installed. Download from [Node.js Official Website](https://nodejs.org/).

- **npm**: Comes bundled with Node.js. Verify installation:
  ```bash
  node -v
  npm -v
  ```

### 2. Clone the Repository

```bash
git clone https://github.com/yourusername/my-personal-site.git
cd my-personal-site
```

*Replace `https://github.com/yourusername/my-personal-site.git` with your repository URL.*

### 3. Install Dependencies

```bash
npm install
```

This command installs all required dependencies listed in `package.json`.

### 4. Set Up Environment Variables (Optional)

If you plan to add features like form handling or connect to external APIs, create a `.env.local` file in the root directory and add your environment variables.

```bash
touch .env.local
```

*Add your environment variables inside `.env.local` as needed.*

---

## Usage

### 1. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### 2. Build for Production

To build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### 3. Linting and Formatting

Ensure code quality with ESLint and Prettier:

- **Lint the code:**
  ```bash
  npm run lint
  ```

- **Format the code:**
  ```bash
  npm run format
  ```

*Ensure you have the necessary scripts in `package.json` for formatting if using Prettier.*

---

## Adding Blog Posts

Blog posts are written in Markdown and stored in the `posts/` directory.

### 1. Create a New Markdown File

Navigate to the `posts/` folder and create a new file with a descriptive name, e.g., `your-post-title.md`.

```bash
touch posts/your-post-title.md
```

### 2. Add Front Matter and Content

Each Markdown file should include front matter for metadata and the post content.

```markdown
---
title: "Your Post Title"
date: "2024-04-01"
excerpt: "A brief summary of your post."
---

# Your Post Title

Write your content here using Markdown syntax.

![Optional Image](/images/your-image.jpg)

## Subheading

More detailed information.

- Bullet Point 1
- Bullet Point 2
- Bullet Point 3
```

### 3. Add Images

Place any images referenced in your posts inside the `public/images/` directory.

---

## Customization

### 1. Branding and Styles

- **Colors:** Modify `tailwind.config.js` to change the color palette.

- **Typography:** Customize fonts in `tailwind.config.js` or directly in your CSS.

### 2. Components

- **Add/Modify Components:** Create new components in the `components/` directory or modify existing ones to fit your design needs.

### 3. Pages

- **Add New Pages:** Create new `.tsx` files inside the `pages/` directory.

- **Edit Existing Pages:** Modify `index.tsx`, `about.tsx`, `projects.tsx`, `blog/`, and `contact.tsx` as per your requirements.

### 4. SEO

Update the `SEO.tsx` component to reflect your website's metadata.

---

## Deployment

Deploy your website to a hosting platform for public access. [Vercel](https://vercel.com/) is highly recommended for Next.js projects due to its seamless integration.

### 1. Deploying with Vercel

1. **Sign Up/In:** Create an account or sign in to [Vercel](https://vercel.com/).

2. **Import Project:**
   - Click on "New Project" and import your GitHub repository.

3. **Configure Settings:**
   - Vercel auto-detects Next.js projects. Ensure the build settings are correct.

4. **Deploy:**
   - Click "Deploy" and wait for the deployment to complete.
   - Your site will be available at `https://your-project-name.vercel.app`.

### 2. Custom Domain

1. **Purchase a Domain:** Acquire a domain from providers like [Namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/).

2. **Add Domain to Vercel:**
   - Navigate to your project in Vercel.
   - Go to the "Domains" section and add your custom domain.

3. **Configure DNS:**
   - Update your domain's DNS settings to point to Vercel's nameservers as instructed.

4. **Verify:** Once DNS changes propagate, your website will be accessible via your custom domain.

---

## Contributing

While this is a personal project, contributions are welcome if you find any issues or have suggestions for improvements.

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page to create a copy under your GitHub account.

### 2. Create a Branch

```bash
git checkout -b feature/YourFeature
```

### 3. Make Changes

Implement your feature or bug fix.

### 4. Commit and Push

```bash
git add .
git commit -m "Add your message"
git push origin feature/YourFeature
```

### 5. Open a Pull Request

Navigate to the original repository and open a pull request with your changes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Your Name**  
[![LinkedIn](https://www.linkedin.com/in/oussama-guelfaa-256b9a232/)   
[![Email](https://img.shields.io/badge/Email-guelfaao@gmail.com-c14438.svg)](mailto:guelfaao@gmail.com)

Feel free to reach out for collaborations, feedback, or just a friendly hello!

---

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Remote](https://github.com/hashicorp/next-mdx-remote)
- [Gray-Matter](https://github.com/jonschlinkert/gray-matter)
- [Vercel](https://vercel.com/) for hosting

---
