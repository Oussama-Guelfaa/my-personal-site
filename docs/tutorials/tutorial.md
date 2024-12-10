# Tutorial: Setting Up and Using MyPersonalSite

Welcome to the tutorial for **MyPersonalSite**! This guide will walk you through setting up and using this project, including customizing it to suit your needs.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

---

## Step 1: Clone the Repository

Start by cloning the project repository to your local machine:
```bash
git clone https://github.com/yourusername/my-personal-site.git
cd my-personal-site
```

---

## Step 2: Install Dependencies

Install the required dependencies using npm:
```bash
npm install
```

---

## Step 3: Run the Development Server

To start the development server, use the following command:
```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the website running locally.

---

## Step 4: Customize the Website

You can customize the website by editing the following files:
- **Homepage:** `pages/index.tsx`
- **About Page:** `pages/about.tsx`
- **Projects Page:** `pages/projects.tsx`
- **Global Styles:** `styles/globals.css`

Make changes to these files and save them to see updates in real time.

---

## Step 5: Generate Documentation (Optional)

If you want to generate reference documentation for this project, follow these steps:
1. Run the following command to generate documentation:
   ```bash
   npm run generate-docs
   ```
2. Open the generated `docs/index.html` file in your browser to view the documentation.

---

## Step 6: Deploy the Website

You can deploy the website to a hosting platform like [Vercel](https://vercel.com/). Here’s how:
1. Push your changes to your GitHub repository.
2. Import the repository into Vercel.
3. Configure the build settings (Vercel auto-detects Next.js projects).
4. Deploy the site.

Your website will be live and accessible via a public URL.

---

## Conclusion

Congratulations! You’ve successfully set up, customized, and run **MyPersonalSite**. For further customization and advanced features, refer to the documentation or reach out with any questions.

Happy coding!
