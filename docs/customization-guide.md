# Doctor Digital Website Customization Guide

This guide will help you customize various aspects of the Doctor Digital website. You can use any text editor (including Notepad) to make these changes, but we recommend Visual Studio Code for a better editing experience.

## Table of Contents

1. [Project Structure Overview](#project-structure-overview)
2. [Modifying Text Content](#modifying-text-content)
3. [Updating Services](#updating-services)
4. [Editing Testimonials](#editing-testimonials)
5. [Adding or Replacing Images](#adding-or-replacing-images)
6. [Changing Colors and Styling](#changing-colors-and-styling)
7. [Testing Your Changes](#testing-your-changes)
8. [Deployment](#deployment)

## Project Structure Overview

The Doctor Digital website is built with Next.js, a React framework. Here's a quick overview of the important directories and files:

```
doctordigital-project/
├── public/                 # Static assets like images
│   └── images/             # All website images
├── src/                    # Source code
│   ├── app/                # Page components and routes
│   │   ├── page.tsx        # Homepage
│   │   ├── layout.tsx      # Main website layout (header, footer)
│   │   ├── globals.css     # Global styles
│   │   ├── blog/           # Blog page 
│   │   ├── case-studies/   # Case studies page
│   │   ├── epikoinonia/    # Contact page
│   │   └── ypiresies/      # Services pages
│   └── components/         # Reusable UI components
│       ├── icons/          # Icon components
│       └── schema/         # SEO schema markup components
└── tailwind.config.ts      # Tailwind CSS configuration (colors, etc.)
```

## Modifying Text Content

Most of the website's text content is located in the page files within the `src/app` directory. The main homepage content is in `src/app/page.tsx`.

### Example: Changing the Homepage Hero Heading

1. Open `src/app/page.tsx`
2. Find the hero section (around line 150):

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
  Ιατρικό Μάρκετινγκ για Ιατρούς & Κλινικές
</h1>
```

3. Change the text between the `<h1>` tags to your desired heading
4. Save the file

### Example: Changing the Services Section Title

1. Open `src/app/page.tsx`
2. Find the services section (around line 200):

```tsx
<h2 className="text-2xl md:text-3xl font-bold mb-4">Υπηρεσίες Ιατρικού Μάρκετινγκ</h2>
```

3. Change the text between the `<h2>` tags to your desired title
4. Save the file

## Updating Services

The services cards are defined in the homepage file `src/app/page.tsx`.

### Example: Modifying a Service Description

1. Open `src/app/page.tsx`
2. Find the services section (around line 210-280)
3. Locate the `ServiceCard` component you want to modify:

```tsx
<ServiceCard 
  icon={
    <div className="w-16 h-16">
      <Image 
        src="/images/icons/διαφημιση-google-ads.svg"
        alt="Google Ads για ιατρούς - στοχευμένες διαφημίσεις"
        width={64}
        height={64}
      />
    </div>
  }
  title="Google Ads για Ιατρούς"
  description="Εμφανιστείτε στην κορυφή της Google με στοχευμένες διαφημίσεις όταν οι ασθενείς αναζητούν τις υπηρεσίες σας."
/>
```

4. Change the text in the `title` or `description` props
5. Save the file

### Adding a New Service

To add a new service:

1. Create a new icon SVG in `/public/images/icons/` if needed
2. Add a new `ServiceCard` component to the services grid in `src/app/page.tsx`:

```tsx
<ServiceCard 
  icon={
    <div className="w-16 h-16">
      <Image 
        src="/images/icons/your-new-icon.svg"
        alt="Alt text for the new service"
        width={64}
        height={64}
      />
    </div>
  }
  title="Your New Service Title"
  description="Description of your new service goes here."
/>
```

## Editing Testimonials

The testimonials section is defined in the homepage file `src/app/page.tsx`.

### Example: Changing a Testimonial

1. Open `src/app/page.tsx`
2. Find the testimonials section (around line 590-680)
3. Locate the testimonial you want to modify:

```tsx
<div className="bg-background p-6 rounded-lg shadow-sm">
  <div className="mb-4">
    <p className="italic text-text-light">
      "Μέσα σε 2 μήνες, είδαμε σημαντική αύξηση στα ραντεβού μας μέσω της Google! 
      Η Doctor Digital μάς βοήθησε να στοχεύσουμε ακριβώς τους ασθενείς που χρειαζόμαστε."
    </p>
  </div>
  <div className="flex items-center">
    <div className="flex-1">
      <p className="font-semibold">Dr. Κωνσταντίνος Π.</p>
      <p className="text-sm text-text-light">Καρδιολόγος</p>
    </div>
  </div>
</div>
```

4. Change the text inside the `<p className="italic text-text-light">` tag to update the testimonial content
5. Update the name and specialty information as needed
6. Save the file

### Adding a New Testimonial

To add a new testimonial, copy an existing testimonial block and modify it with the new testimonial content, name, and specialty.

## Adding or Replacing Images

Images are stored in the `public/images/` directory. You can replace existing images or add new ones.

### Replacing an Existing Image

1. Find the image you want to replace in `public/images/` or its subdirectories
2. Create a new image with the exact same filename and extension
3. Replace the old file with your new one
4. Make sure your new image has similar dimensions to the old one for optimal layout

### Adding a New Image

1. Save your new image to the appropriate directory inside `public/images/`
2. To use the image in a component, open the relevant file (e.g., `src/app/page.tsx`)
3. Import the Image component if it's not already imported:

```tsx
import Image from 'next/image';
```

4. Add the image to your component:

```tsx
<Image
  src="/images/your-new-image.webp"
  alt="Descriptive alt text for the image"
  width={600}
  height={400}
  className="w-full h-auto object-cover"
/>
```

5. Adjust the width, height, and className props as needed
6. Save the file

### Image Optimization Tips

- Use WebP format for better performance (`.webp` extension)
- Optimize images before adding them to the project using tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Keep image dimensions reasonable - large images will slow down your website
- Always include meaningful alt text for accessibility

## Changing Colors and Styling

The website uses Tailwind CSS for styling. The main color definitions are in `tailwind.config.ts`.

### Heading Structure and SEO Best Practices

For SEO and accessibility, it's important to maintain a proper heading structure on your website. Heading tags (h1-h6) create a document outline that search engines and screen readers use to understand your content hierarchy.

#### Avoid Using Heading Tags in Footers

Footer section titles should not use heading tags (h1-h6) as they aren't part of the main content hierarchy. Instead, use:

```tsx
// Good practice - using styled div with strong tag
<div className="text-lg font-bold mb-6 text-white relative">
  <strong className="relative z-10">Υπηρεσίες</strong>
  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
</div>

// Alternative with paragraph tag
<p className="text-lg font-bold mb-6 text-white relative">
  <span className="relative z-10">Υπηρεσίες</span>
  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
</p>

// Bad practice - using heading tag in footer
<h3 className="text-lg font-bold mb-6 text-white relative">
  <span className="relative z-10">Υπηρεσίες</span>
  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-accent"></span>
</h3>
```

This maintains a clean document outline while preserving the visual styling of your footer sections.

### Example: Changing the Accent Color

1. Open `tailwind.config.ts`
2. Find the colors section in the theme configuration:

```typescript
colors: {
  'accent': '#c5ff00',
  'background': '#f5f5f5',
  'text-dark': '#222222',
  'text-light': '#555555',
  'footer': '#333333',
},
```

3. Change the hex color code for 'accent' to your desired color (e.g., `'#00a8ff'`)
4. Save the file

### Modifying Component Styles

Component styles are defined using Tailwind CSS classes directly in the component JSX. For example:

```tsx
<div className="bg-white p-6 rounded-lg shadow-card hover-up">
```

To modify styles:

1. Find the component you want to change in the appropriate file
2. Modify the `className` prop to add or remove Tailwind classes
3. Save the file

For more advanced styling changes, consider modifying the global CSS file at `src/app/globals.css`.

## Testing Your Changes

After making changes, you should test them to make sure everything looks good.

### Running the Development Server

1. Open a terminal
2. Navigate to your project directory 
3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000
5. Verify your changes look as expected

### Checking Responsiveness

Make sure to test your changes at different screen sizes:

1. Use your browser's developer tools (F12 or right-click > Inspect)
2. Click the device toggle button (usually in the top-left of the developer tools)
3. Test with different device presets or by resizing the viewport manually

## Deployment

When you're ready to deploy your changes, you have several options:

### Option 1: Building for Production

1. Run the build command:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

3. Your website will be available at http://localhost:3000

### Option 2: Exporting as Static HTML

1. Run the export command:

```bash
next build && next export
```

2. The static website will be generated in the `out` directory
3. You can then upload these files to any static hosting service

### Option 3: GitHub and Vercel Deployment

1. Push your changes to GitHub:

```bash
git add .
git commit -m "Update website content"
git push
```

2. If you have Vercel connected to your GitHub repository, it will automatically deploy your changes

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
