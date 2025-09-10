# Portfolio Website

## Overview

This is a personal portfolio website for a frontend developer, built with vanilla HTML, CSS, and JavaScript. The site features a modern dark theme design with interactive navigation and responsive layout. It's designed to showcase the developer's skills, projects, and contact information in a professional and visually appealing manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure vanilla web technologies**: Uses HTML5, CSS3, and vanilla JavaScript without any frameworks or build tools
- **Component-based organization**: Code is organized into logical classes and modules (Navigation class) for better maintainability
- **Responsive design**: Built with mobile-first approach using CSS Grid and Flexbox
- **Performance optimization**: Uses requestAnimationFrame for smooth scroll animations and event throttling

### Design System
- **CSS custom properties (variables)**: Centralized theme management using CSS variables for colors, typography, and spacing
- **Dark theme**: Modern dark color scheme with gradient accents and careful contrast ratios
- **Typography**: Uses Google Fonts (Poppins) for consistent and modern typography
- **Icon system**: Integrates Lucide icons for consistent iconography

### Navigation System
- **Smooth scrolling**: Custom smooth scroll implementation for internal navigation
- **Dynamic navbar**: Hide/show behavior based on scroll direction for better UX
- **Active link tracking**: Automatic highlighting of current section in navigation
- **Mobile responsive**: Hamburger menu implementation for mobile devices

### Interactive Features
- **Scroll-based animations**: Uses Intersection Observer API for performant scroll-triggered animations
- **Responsive behavior**: Adaptive layout that works across different screen sizes
- **Progressive enhancement**: Core functionality works without JavaScript, enhanced with interactive features

## External Dependencies

### Fonts and Typography
- **Google Fonts**: Poppins font family loaded via CDN for consistent typography across browsers

### Icon Library
- **Lucide Icons**: SVG icon library loaded via CDN for scalable and crisp iconography

### No Build Tools or Frameworks
- **Zero dependencies**: Pure vanilla implementation without any build process, bundlers, or JavaScript frameworks
- **CDN-based assets**: External resources loaded directly from CDNs for simplicity and performance