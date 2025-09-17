# Copilot Instructions for Blouberg Tournament Website

## Project Overview
This is a static website for the Blouberg Annual Tournament, a non-profit community initiative. The site is built with plain HTML, CSS, and JavaScript (no frameworks). Its primary goals are to:
- Raise awareness among youth and the community
- Attract sponsorships from local businesses
- Provide updates and news about monthly tournaments

## Key Files & Structure
- `Index.html`: Main landing page
- `AboutUs.html`, `ContactUs.html`, `Enquiry.html`, `Services.html`, `Tournaments.html`: Sectional pages for organization info, contact, forms, and tournament details
- `styles/main.css`: Main stylesheet for the site
- `scripts/main.js`: Main JavaScript file (minimal scripting)
- `images/`, `icons/`, `logos/`: Static assets for branding and content

## Patterns & Conventions
- **No build system**: All files are static; no npm, bundlers, or frameworks
- **Navigation**: Each HTML file contains its own navigation bar; keep navigation consistent across all pages
- **Forms**: Forms for sponsors and club participation are present; no backend integration (static only)
- **Social Media**: Social media icons are in `images/icons/socialMediaIcons/` and linked in the footer
- **Responsiveness**: Use CSS for mobile-friendly layouts; avoid inline styles
- **Image Usage**: Reference images from the `images/` directory using relative paths

## Developer Workflow
- Edit HTML, CSS, and JS files directly; refresh browser to view changes
- No build, test, or deployment scripts required
- Use consistent class and ID naming across pages for shared styles
- Keep the site lightweight and accessible

## Examples
- To add a new tournament update, edit `Tournaments.html`
- To update sponsor info, edit `AboutUs.html` or add a section as needed
- For new images, place them in `images/` and reference with relative paths

## Additional Notes
- No external dependencies or package managers
- Keep all content and assets within the project directory
- Follow the structure and style of existing pages for consistency

---
If you are unsure about a pattern or workflow, review the existing HTML and CSS files for examples. When in doubt, prefer simplicity and clarity.
