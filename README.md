# 🚀 Cyberpunk Portfolio - Avinash Yadav

A stunning, futuristic portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a dark cyberpunk theme with neon glowing effects, glassmorphism design, and smooth animations.

![Cyberpunk Portfolio](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge&logo=framer)

## ✨ Features

- **🎨 Cyberpunk Design**: Dark theme with neon cyan (#00f0ff), magenta (#ff00f7), and purple (#7f00ff) accents
- **🌟 Glassmorphism Effects**: Beautiful blur backgrounds and transparent containers
- **⚡ Smooth Animations**: Framer Motion powered transitions and hover effects
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎯 Typewriter Effect**: Animated text typing in the hero section
- **🔄 Auto-looping Testimonials**: Smooth slider with client testimonials
- **📊 Interactive Skills**: Animated progress bars with hover effects
- **🎪 Floating Elements**: Dynamic background particles and effects
- **🔗 Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Orbitron (headings), Poppins (body)
- **UI Components**: Custom shadcn/ui inspired components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   https://github.com/AVII-YADAV/portfolio_Next.js
   cd portfolio_Next.js
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
cyberpunk-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/
│   │   └── button.tsx       # Reusable button component
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects showcase
│   ├── Services.tsx         # Services offered
│   ├── Skills.tsx           # Skills and technologies
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors

The cyberpunk theme colors are defined in `tailwind.config.js`:

```javascript
cyber: {
  primary: '#00f0ff',    // Neon cyan
  secondary: '#ff00f7',  // Neon magenta
  tertiary: '#7f00ff',   // Neon purple
  dark: '#0a0a0a',       // Dark background
  darker: '#050505',     // Darker background
  light: '#1a1a1a',      // Light background
  glass: 'rgba(255, 255, 255, 0.1)', // Glass effect
}
```

### Content

Update the content in each component file:

- **Personal Info**: Update `Hero.tsx`, `About.tsx`, and `Contact.tsx`
- **Projects**: Modify the `projects` array in `Projects.tsx`
- **Skills**: Edit the `skillCategories` array in `Skills.tsx`
- **Services**: Update the `services` array in `Services.tsx`
- **Testimonials**: Modify the `testimonials` array in `Testimonials.tsx`

### Animations

Custom animations are defined in `tailwind.config.js` and can be extended or modified as needed.

## 📱 Sections Overview

### 1. **Navbar** (`components/Navbar.tsx`)

- Sticky navigation with glass effect
- Smooth scroll to sections
- Mobile hamburger menu
- Glowing hover effects

### 2. **Hero** (`components/Hero.tsx`)

- Animated background with floating particles
- Typewriter effect for subtitle
- Glowing CTA buttons
- Social media links

### 3. **About** (`components/About.tsx`)

- Profile image with glowing border
- Bio information
- Key specializations
- Technology icons

### 4. **Projects** (`components/Projects.tsx`)

- Grid layout with hover effects
- Project categories and tech stacks
- Live demo and GitHub links
- Animated project cards

### 5. **Services** (`components/Services.tsx`)

- Service cards with icons
- Feature lists
- Hover animations
- CTA section

### 6. **Skills** (`components/Skills.tsx`)

- Categorized skills with progress bars
- Animated skill levels
- Statistics section
- Always learning message

### 7. **Testimonials** (`components/Testimonials.tsx`)

- Auto-looping slider
- Client testimonials with ratings
- Navigation controls
- Statistics display

### 8. **Contact** (`components/Contact.tsx`)

- Contact form with validation
- Contact information
- Social media links
- Availability status

### 9. **Footer** (`components/Footer.tsx`)

- Newsletter subscription
- Footer links
- Social media icons
- Copyright information

## 🎯 Key Features Explained

### Glassmorphism Effect

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Neon Glow Animation

```css
.neon-text {
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor,
    0 0 30px currentColor;
}
```

### Cyber Button

```css
.cyber-button {
  background: linear-gradient(45deg, #00f0ff, #ff00f7);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js static exports.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework
- **Orbitron & Poppins** fonts for the typography

## 📞 Contact

**Avinash Yadav** - [adminh@ahostingaviator.cloud](mailto:adminh@ahostingaviator.cloud)

Project Link: [https://github.com/AVII-YADAV/portfolio_Next.js](https://github.com/AVII-YADAV/portfolio_Next.js))

---

⭐ **Star this repository if you found it helpful!**
