# Website Style Guide

This document provides a guide on the branding choices - color palette, fonts, tone, etc. for my personal website.

- **`disclaimer` - AI Usage**

This markdown document was generated with the help of AI and audited by myself, Leah Stiff. The code contained within the .html, .css, and .js is my own, although I heavily relied on the use of the websites referenced below.

---

## Fonts

Fonts were obtained from Google Fonts and used in accordance with their open source, free use guidelines.

Font used: "IM Fell Great Primer", serif;

---

## Header Usage

I used only three headers for the page structure.

- **`h1` – Page Titles**  
  Used for the main title of each page. Centered, large font size (40px), serif font ("IM Fell Great Primer"), normal style.

- **`h2` – Page Subtitles**  
  Used for subtitles or section headings within a page. Font size 36px, serif font, slightly lighter weight.

- **`h3` – Accordion Titles or Small Section Headings**  
  Used for smaller headings, like accordion titles. Font size 20px, serif font, lighter weight than `h2`.

---

## Images

The background image is my own property, taken on a hiking trip. This dictated the color palette.

---

## Color Palette

My goal was to replicate forest colors in alignment with the background image:

- **Primary Colors:**

  - Background overlay: `rgba(244, 250, 255, 0.5)` (#F4FAFF)
  - Borders: `rgba(244, 250, 255, 0.7)` (#F4FAFF)

- **Secondary Colors:**

  - Navigation bar: `rgba(31, 70, 50, 0.858)` (#1F4632)
  - Accordion background: `#6c493a`
  - Flip card back: `#6c493a`

- **Tertiary Colors / Accents:**
  - Flip card front: `#8ca69b`
  - Flip card front text: `#4b3f32`
  - Flip card back text: `#f4faff`
  - Accordion hover/active: background `white`, text `#6c493a`

This palette provides a natural, calm feel suitable for content-heavy pages with images and interactive elements.

---

## Accordion

- Style: brown background (`#6c493a`), white text; on hover/active, background turns white and text turns brown.
- Collapsible panel displays content with padding and text color matching the accordion hover color.

**Credit:** Accordion instructions adapted from [W3Schools](https://www.w3schools.com/howto/howto_js_accordion.asp).

---

## Flip Card

This is the only element that uses JavaScript, contained within main.js

- Structure: `.flip-card` container with `.flip-card-inner` for 3D rotation
- Front and back faces styled individually with background and text colors
- Hover effect rotates the inner card 180° to reveal back content

**Credit:** Flip card instructions adapted from [W3Schools](https://www.w3schools.com/howto/howto_css_flip_card.asp).

---

## Contact Form

This form was created through the free Google Forms platform and embedded via their embed code. Responses are NOT anonymous and I do not have control with what Google does with user's information. please proceed with caution.

---

## Layout Notes

- **Body:** 900px width, centered, semi-transparent background overlay
- **Images:** Float left, max-width 100%, margin for spacing
- **Navigation:** Flex layout, space-between for links, white text
- **Photos Grid:** 3-column responsive grid with 10px gap

---

_This style guide serves as a reference for maintaining consistent styling across the website._
