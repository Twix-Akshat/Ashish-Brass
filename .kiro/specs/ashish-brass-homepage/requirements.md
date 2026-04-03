# Requirements Document

## Introduction

A complete, modern homepage for Ashish Brass — a brass manufacturing company based in Jamnagar, India. The homepage is built in Next.js using a component-based architecture where each section is a separate component and all content is data-driven (no hardcoded strings in JSX). The design should surpass the reference HTML in visual quality, responsiveness, and user experience, while clearly communicating Ashish Brass's brand, product range, and trustworthiness to B2B buyers.

## Glossary

- **Homepage**: The root page (`/`) of the Next.js application rendered by `src/app/page.tsx`
- **Section_Component**: A React component representing one distinct visual section of the homepage (e.g. Navbar, Hero, Products)
- **Data_File**: A TypeScript file under `src/data/` that exports typed constants used to populate a Section_Component
- **Navbar**: The top navigation bar component
- **Hero**: The full-width introductory banner section
- **Features_Strip**: The horizontal strip of highlight cards below the Hero
- **Trust_Bar**: The row of trust/certification badges
- **Products_Section**: The section showcasing the featured product range
- **Industries_Section**: The section showing industries served by Ashish Brass
- **CTA_Section**: A mid-page call-to-action banner prompting visitors to get a quote
- **Footer**: The bottom section containing company info, links, and contact details
- **Quote_Form**: A modal or inline form for requesting a product quote
- **Product_Card**: A single card component displaying one product's name, image placeholder, specs, and tags
- **Stat**: A numeric highlight (e.g. "25+ Years of Trust") displayed in the Hero
- **Trust_Badge**: A single certification or credential item displayed in the Trust_Bar
- **Nav_Link**: A single navigation item in the Navbar

## Requirements

---

### Requirement 1: Component-Based Architecture

**User Story:** As a developer, I want each homepage section in its own file, so that the codebase is maintainable and each section can be developed or updated independently.

#### Acceptance Criteria

1. THE Homepage SHALL render by composing Section_Components imported from `src/components/`
2. THE Homepage SHALL NOT contain inline JSX markup for any section content — all section markup SHALL live inside their respective Section_Component files
3. WHEN a new Section_Component is added to `src/components/`, THE Homepage SHALL be able to include it without modifying any other component
4. THE Homepage SHALL include the following Section_Components in order: Navbar, Hero, Features_Strip, Trust_Bar, Products_Section, Industries_Section, CTA_Section, Footer

---

### Requirement 2: Data-Driven Content

**User Story:** As a developer, I want all content (text, links, product info) stored in data files, so that updating copy or adding products never requires touching component markup.

#### Acceptance Criteria

1. THE Data_File for each Section_Component SHALL export a typed TypeScript constant containing all user-visible strings, links, and structured data for that section
2. WHEN a product is added to the products Data_File, THE Products_Section SHALL render the new Product_Card without any component code changes
3. WHEN a Nav_Link is added to the navigation Data_File, THE Navbar SHALL render the new link without any component code changes
4. THE Data_File SHALL use TypeScript interfaces or types to define the shape of each data constant
5. THE Homepage SHALL NOT contain any hardcoded user-visible strings in JSX — all strings SHALL be sourced from Data_Files

---

### Requirement 3: Navbar

**User Story:** As a visitor, I want a clear and accessible navigation bar, so that I can quickly reach any section of the site.

#### Acceptance Criteria

1. THE Navbar SHALL display the Ashish Brass logo/brand name on the left side
2. THE Navbar SHALL render all Nav_Links sourced from the navigation Data_File
3. THE Navbar SHALL display a phone number contact detail sourced from the contact Data_File
4. THE Navbar SHALL display a "Get a Quote" call-to-action button that links to the Quote_Form or contact section
5. WHILE the page scroll position is greater than 0px, THE Navbar SHALL apply a background and shadow style to remain legible against page content
6. WHEN a Nav_Link is clicked, THE Navbar SHALL navigate to the corresponding page section using anchor links
7. WHEN the viewport width is below 768px, THE Navbar SHALL collapse Nav_Links into a hamburger menu
8. WHEN the hamburger menu is open, THE Navbar SHALL display Nav_Links in a vertical dropdown panel
9. WHEN the hamburger menu is open and the user clicks outside the panel, THE Navbar SHALL close the dropdown panel

---

### Requirement 4: Hero Section

**User Story:** As a visitor, I want a visually striking hero section, so that I immediately understand what Ashish Brass does and feel confident in their credibility.

#### Acceptance Criteria

1. THE Hero SHALL display a primary headline and a supporting subheadline sourced from the hero Data_File
2. THE Hero SHALL display a short description paragraph sourced from the hero Data_File
3. THE Hero SHALL render two CTA buttons: a primary "Request a Quote" button and a secondary "View Products" button, with targets sourced from the hero Data_File
4. THE Hero SHALL render all Stat items sourced from the hero Data_File, each displaying a numeric value and a label
5. THE Hero SHALL use a visually rich background (gradient, pattern, or high-quality imagery) that conveys industrial precision
6. WHEN the viewport width is below 768px, THE Hero SHALL stack its content and Stat items vertically
7. THE Hero SHALL be no less than 90vh in height on desktop viewports

---

### Requirement 5: Features Strip

**User Story:** As a visitor, I want to see Ashish Brass's key differentiators at a glance, so that I can quickly assess whether they meet my sourcing needs.

#### Acceptance Criteria

1. THE Features_Strip SHALL render all feature cards sourced from the features Data_File
2. EACH feature card SHALL display an icon, a title, and a short description sourced from the features Data_File
3. THE Features_Strip SHALL display feature cards in a horizontal row on desktop viewports
4. WHEN the viewport width is below 768px, THE Features_Strip SHALL stack feature cards vertically

---

### Requirement 6: Trust Bar

**User Story:** As a B2B buyer, I want to see certifications and credentials prominently, so that I can trust Ashish Brass as a verified supplier.

#### Acceptance Criteria

1. THE Trust_Bar SHALL render all Trust_Badge items sourced from the trust Data_File
2. EACH Trust_Badge SHALL display an icon and a label sourced from the trust Data_File
3. THE Trust_Bar SHALL display all Trust_Badge items in a single horizontal row on desktop viewports
4. WHEN the viewport width is below 640px, THE Trust_Bar SHALL wrap Trust_Badge items into a 2-column grid

---

### Requirement 7: Products Section

**User Story:** As a buyer, I want to browse featured products with key specs, so that I can quickly identify relevant items and take action.

#### Acceptance Criteria

1. THE Products_Section SHALL display a section title and subtitle sourced from the products Data_File
2. THE Products_Section SHALL render a Product_Card for each product in the products Data_File
3. EACH Product_Card SHALL display the product name, a tag list (e.g. "Bestseller", "New"), a short spec list, and a "View Details" action sourced from the products Data_File
4. EACH Product_Card SHALL display a placeholder image or SVG illustration when no product image URL is provided in the Data_File
5. WHEN a product in the Data_File has an `isFeatured` flag set to true, THE Products_Section SHALL visually distinguish that Product_Card (e.g. border highlight or badge)
6. THE Products_Section SHALL display a "View All Products" link below the product grid sourced from the products Data_File
7. WHEN the viewport width is below 768px, THE Products_Section SHALL display Product_Cards in a single-column layout
8. WHEN the viewport width is between 768px and 1024px, THE Products_Section SHALL display Product_Cards in a 2-column grid
9. WHEN the viewport width is 1024px or above, THE Products_Section SHALL display Product_Cards in a 3-column grid

---

### Requirement 8: Industries Section

**User Story:** As a procurement manager, I want to see which industries Ashish Brass serves, so that I can confirm they have relevant domain experience.

#### Acceptance Criteria

1. THE Industries_Section SHALL display a section title and subtitle sourced from the industries Data_File
2. THE Industries_Section SHALL render an industry card for each industry in the industries Data_File
3. EACH industry card SHALL display an icon, an industry name, and a short description sourced from the industries Data_File
4. WHEN the viewport width is below 768px, THE Industries_Section SHALL display industry cards in a 2-column grid

---

### Requirement 9: CTA Section

**User Story:** As a visitor who has scrolled through the page, I want a clear mid-page prompt to get in touch, so that I can take action without scrolling back to the top.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a headline, a supporting description, and a primary CTA button sourced from the cta Data_File
2. THE CTA_Section SHALL display a secondary contact detail (e.g. phone number) alongside the CTA button sourced from the cta Data_File
3. THE CTA_Section SHALL use a visually distinct background (e.g. brand color fill or gradient) to differentiate it from adjacent sections
4. WHEN the CTA button is clicked, THE CTA_Section SHALL navigate the user to the contact section or open the Quote_Form

---

### Requirement 10: Footer

**User Story:** As a visitor, I want a comprehensive footer with company info and links, so that I can find contact details and navigate to key pages without scrolling back up.

#### Acceptance Criteria

1. THE Footer SHALL display the company name, a short tagline, and address sourced from the footer Data_File
2. THE Footer SHALL display phone and email contact details sourced from the footer Data_File
3. THE Footer SHALL render grouped link columns (Products, Company, Contact) with all links sourced from the footer Data_File
4. THE Footer SHALL display business hours sourced from the footer Data_File
5. THE Footer SHALL display a copyright notice with the current year computed at render time
6. WHEN the viewport width is below 768px, THE Footer SHALL stack its columns vertically

---

### Requirement 11: Responsive Design

**User Story:** As a visitor on any device, I want the homepage to look polished and be fully usable, so that I have a good experience whether I'm on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Homepage SHALL be fully usable at viewport widths from 320px to 1920px
2. THE Homepage SHALL use Tailwind CSS responsive utility classes to implement all layout breakpoints
3. WHEN rendered on a mobile viewport, THE Homepage SHALL not produce horizontal scroll
4. THE Homepage SHALL use relative units (rem, %, vw/vh) for spacing and typography to support fluid scaling

---

### Requirement 12: Visual Design Quality

**User Story:** As a business owner, I want the homepage to look modern and professional, so that it builds trust with potential B2B clients.

#### Acceptance Criteria

1. THE Homepage SHALL use a consistent color palette with a defined primary brand color, a neutral background, and accent colors — all sourced from Tailwind CSS theme tokens or CSS custom properties
2. THE Homepage SHALL use a consistent typographic scale with distinct styles for headings (h1–h3), body text, and labels
3. THE Homepage SHALL apply smooth hover transitions (150ms–300ms) to all interactive elements (buttons, cards, links)
4. THE Homepage SHALL use Lucide React icons (already installed) for all iconography — no external icon libraries SHALL be added
5. THE Homepage SHALL use Framer Motion (already installed) for at least one entrance animation on the Hero section
6. THE Homepage SHALL achieve a Lighthouse performance score of 80 or above when built in production mode

---

### Requirement 13: Accessibility

**User Story:** As a user relying on assistive technology, I want the homepage to be navigable and readable, so that I can access all content regardless of ability.

#### Acceptance Criteria

1. THE Homepage SHALL include a descriptive `<title>` and `<meta name="description">` tag via Next.js Metadata API
2. ALL images rendered by THE Homepage SHALL include a non-empty `alt` attribute
3. ALL interactive elements (buttons, links) rendered by THE Homepage SHALL be keyboard-focusable and have a visible focus indicator
4. THE Navbar hamburger button SHALL include an `aria-label` and `aria-expanded` attribute reflecting the current open/closed state
5. THE Homepage SHALL use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`) for major landmark regions
