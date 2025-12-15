# Queen's Portfolio - Project Report

## Purpose & Features

This personal portfolio website was created for Queenie Carba, a 19-year-old BSIT student at Eastern Visayas State University Carigara Campus. The website serves as a digital showcase of her skills, projects, and personality, designed to make a strong impression on potential employers, collaborators, and peers.

### Key Features:
- **Responsive Design**: Optimized for desktop, tablet (820px), and mobile (360px) devices
- **Dark/Light Theme Toggle**: Smooth theme switching with CSS variables and localStorage persistence
- **Interactive Navigation**: Icon-based navigation bar that shrinks on mobile devices
- **Project Filtering**: Dynamic filtering system for project categories (Web, Design, School Task)
- **Contact Form**: Custom JavaScript validation with user-friendly error messages
- **Social Media Integration**: Instagram and Facebook buttons with hover effects
- **Smooth Animations**: CSS transitions and keyframe animations throughout the site
- **Semantic HTML5 Structure**: Proper use of header, nav, main, section, article, and footer elements

## CSS3 Techniques Used

### CSS Variables for Theming
The website utilizes CSS custom properties (variables) for consistent theming across light and dark modes:
```css
:root {
    --primary-color: #FFB6C1;
    --text-color: #333;
    --bg-color: #FFF8F8;
}
[data-theme="dark"] {
    --primary-color: #8B008B;
    --text-color: #E6E6FA;
    --bg-color: #2D1B2D;
}
```

### Advanced CSS Features
- **Transitions**: Smooth hover effects on buttons, cards, and navigation elements
- **Animations**: Keyframe animations for floating background elements and fade-in effects
- **Custom Fonts**: Google Fonts (Poppins) imported via @import for modern typography
- **Advanced Selectors**: nth-child selectors for staggered animations on project cards
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **Backdrop Filter**: Blur effect on navigation bar for a modern glass-morphism look

### Responsive Design Implementation
Media queries target specific breakpoints:
- **Desktop**: Default styles with full-width layouts
- **Tablet (820px)**: Adjusted grid layouts and reduced spacing
- **Mobile (360px)**: Single-column layouts, smaller fonts, and touch-friendly sizing

## JavaScript Techniques Used

### Theme Toggle System
- Event listener on theme toggle button
- DOM manipulation to switch data-theme attribute
- localStorage for theme persistence across sessions
- Dynamic icon changes (moon/sun)

### Project Filtering
- Event delegation on filter buttons
- DOM manipulation to show/hide project cards
- CSS class toggling for smooth fade animations
- Dynamic active state management

### Form Validation
- Custom validation functions for name, email, and message fields
- Real-time validation on input events
- Custom error messages without HTML5 validation
- Regex patterns for email validation
- Form submission prevention and success feedback

### Dynamic DOM Updates
- Smooth scrolling for navigation links
- Intersection Observer API for scroll-triggered animations
- Typing effect animation for hero text
- Staggered animations for skills list items

### Social Media Integration
- Event listeners on social buttons
- window.open() for external links
- Placeholder URLs for Instagram and Facebook

## Responsiveness Explanation

The website employs a mobile-first approach with progressive enhancement:

### Breakpoint Strategy:
1. **Mobile (360px)**: Single-column layouts, stacked navigation, reduced font sizes
2. **Tablet (820px)**: Two-column grids where appropriate, adjusted spacing
3. **Desktop (1200px+)**: Full multi-column layouts, optimal spacing

### Responsive Techniques:
- **Flexible Grid**: CSS Grid with auto-fit and minmax for adaptive columns
- **Fluid Typography**: Relative units (rem, em) for scalable text
- **Touch-Friendly Elements**: Adequate button sizes and spacing for mobile interaction
- **Responsive Images**: Max-width constraints with auto height for profile image
- **Adaptive Navigation**: Icon-based nav that works well on small screens

## Semantic Structure Statement

The website follows HTML5 semantic best practices for accessibility and SEO:

### Semantic Elements Used:
- `<header>`: Contains navigation and branding
- `<nav>`: Navigation menu with anchor links
- `<main>`: Would wrap the primary content sections (currently using sections directly)
- `<section>`: Major content divisions (hero, about, skills, projects, contact)
- `<article>`: Individual project cards with self-contained content
- `<footer>`: Site footer with copyright information

### Accessibility Considerations:
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- Form labels associated with inputs
- ARIA-friendly navigation with title attributes
- Color contrast ratios maintained for readability
- Keyboard navigation support through proper focus management

### SEO Benefits:
- Semantic structure helps search engines understand content hierarchy
- Descriptive link text and alt attributes
- Clean URL structure with anchor links for internal navigation

This portfolio website demonstrates modern web development practices while maintaining a clean, beginner-friendly codebase that's easy to understand and modify.