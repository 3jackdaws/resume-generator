# Resume Generator
A simple static site that I developed to make tailoring resumes to a specific position really easy.  Information is loaded from `data.js` and is used to populate a template.  The resulting resume is an HTML page that can be saved as a PDF using Chrome's Save to PDF option or whatever website to PDF saving tool you want.  

WARNING: Microsoft's built in Save to PDF tool in Windows 10 takes a picture of the site and generates gigantic PDF files.  Chrome's tool does it correctly and generates PDFs that are much smaller in file size.

This project consists of four main parts:

### index.html
HTML file that is served by NGINX.  Defines the layout of the resume and the relation between data and where it appears in the generated resume.

### components.js
Contains all the Vue.js components that appear in `index.html`.

### resume.css
Contains all the styling that makes the generated resume nice looking.

### data.js
Contains all the data that appears in the generated resume.


# Tailoring
1. Determine the type of position the job posting describes
2. Edit objective to match position
3. Reorder skills so that most relevant are on first page
4. Comment out irrelevant skills
5. Ctrl + P, save as PDF


# Customization

#### Accent color
Change the accent color css variable in `resume.css`


#### Fonts
Change the primary and headings font css variable in `resume.css`


#### Section Order
Reorder sections by moving around HTML tags in `index.html`


#### Column Width
Change the column width in `index.html`.  Column width is in percents and should sum to less than 100 to accound for padding, margins, etc.
```html
<column width="37">
    stuff and things
</column>
```