# Suma Weds Naresh — South Indian Wedding Invitation 🪷

A beautiful, animated single-page wedding invitation website built with **React.js**, featuring South Indian cultural elements, smooth scroll animations, and mobile-responsive design.

![Wedding](https://img.shields.io/badge/Suma_%26_Naresh-Wedding-8B1A1A?style=for-the-badge&labelColor=D4A843)

## ✨ Features

- **South Indian Themed** — Kolam patterns, mango leaf torana, temple-style borders, maroon & gold palette
- **Smooth Scroll Animations** — Powered by Framer Motion & Intersection Observer (works on mobile & desktop)
- **Countdown Timer** — Live countdown to the wedding day
- **RSVP Integration** — Links to a Google Form for guest RSVP
- **Wedding Invitation Image** — Displays your custom invitation card
- **Event Timeline** — Cards for Nischitartham, Haldi, Sangeeth, Wedding & Reception
- **Venue with Map** — Google Maps embed with directions link
- **Mobile Responsive** — Fully responsive for phones, tablets, and desktops
- **Loading Animation** — Elegant mandala spinner on page load

## 📂 Project Structure

```
sumawedsnaresh/
├── public/
│   ├── index.html
│   └── wedding-invitation.jpg   ← Place your invitation image here
├── src/
│   ├── components/
│   │   ├── Hero.js               ← Hero section with countdown
│   │   ├── InvitationCard.js     ← Wedding invitation card
│   │   ├── EventDetails.js       ← Wedding events timeline
│   │   ├── Venue.js              ← Venue info & map
│   │   ├── Gallery.js            ← Photo gallery placeholders
│   │   ├── RSVP.js               ← RSVP section with Google Form link
│   │   ├── Navbar.js             ← Navigation bar
│   │   ├── Footer.js             ← Footer
│   │   ├── Loader.js             ← Loading animation
│   │   └── FloralDivider.js      ← Decorative section divider
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .github/workflows/deploy.yml  ← GitHub Actions for auto-deploy
├── package.json
└── README.md
```

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/sumawedsnaresh.git
cd sumawedsnaresh

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The site will open at `http://localhost:3000`.

## 🎨 Customization

### 1. Update Wedding Details
Edit the following files to customize for your wedding:

| What to change | File | What to look for |
|---|---|---|
| Couple names | `src/components/Hero.js` | `Suma` and `Naresh` |
| Wedding date | `src/components/Hero.js` | `2026-06-15T09:00:00` |
| Parents' names | `src/components/InvitationCard.js` | `[Bride's Parents' Name]` |
| Event details | `src/components/EventDetails.js` | Events array at the top |
| Venue details | `src/components/Venue.js` | Venue name & address |
| Contact info | `src/components/RSVP.js` | Phone numbers & email |
| **RSVP Google Form URL** | `src/components/RSVP.js` | `GOOGLE_FORM_URL` constant |

### 2. Add Your Wedding Invitation Image
Place your wedding invitation image at:
```
public/wedding-invitation.jpg
```
Supported formats: `.jpg`, `.png`, `.webp`

### 3. Add Gallery Photos
Replace the emoji placeholders in `src/components/Gallery.js` with actual images placed in a `public/gallery/` folder.

### 4. Set Your Google Form RSVP Link
1. Create a Google Form for RSVP at [Google Forms](https://docs.google.com/forms)
2. Copy the form URL
3. Open `src/components/RSVP.js`
4. Replace the `GOOGLE_FORM_URL` value:
   ```js
   const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform';
   ```

## 🌐 Deploy to GitHub Pages

### Method 1: GitHub Actions (Recommended — Automatic)

This repo includes a GitHub Actions workflow that auto-deploys on every push to `main`.

#### Steps:

1. **Create a GitHub repository** named `sumawedsnaresh`

2. **Update `homepage` in `package.json`:**
   ```json
   "homepage": "https://<your-github-username>.github.io/sumawedsnaresh"
   ```

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Wedding Invitation Site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sumawedsnaresh.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow at `.github/workflows/deploy.yml` will build and deploy automatically

5. **Access your site:** `https://<your-username>.github.io/sumawedsnaresh`

### Method 2: Manual Deploy with `gh-pages` package

```bash
# 1. Update homepage in package.json (same as above)

# 2. Install gh-pages (already in devDependencies)
npm install

# 3. Deploy
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch automatically.

Then go to **Settings → Pages → Source → Deploy from branch → `gh-pages`**.

## 📱 Responsive Design

| Device | Support |
|--------|---------|
| 📱 Mobile (< 480px) | ✅ Fully responsive, hamburger menu |
| 📱 Tablet (480-768px) | ✅ Adapted grid layouts |
| 🖥️ Desktop (> 768px) | ✅ Full experience with hover effects |

## 🛠️ Tech Stack

- **React.js 18** — UI Framework
- **Framer Motion** — Scroll & page animations
- **React Intersection Observer** — Trigger animations on scroll
- **Google Fonts** — Playfair Display, Cormorant Garamond, Great Vibes, Noto Sans Tamil
- **CSS3** — Custom properties, Grid, Flexbox
- **GitHub Pages** — Free hosting

## 📝 License

This project is created for personal wedding use. Feel free to fork and customize for your own celebration!

---

<div align="center">

🪷 **Suma & Naresh** 🪷

*Made with love and tradition*

</div>
