# Resume Generator
A simple static site that I developed to make tailoring resumes to a specific position really easy.  Information is loaded from `data.js` and is used to populate a template.  The resulting resume is an HTML page that can be saved as a PDF using Chrome's Save to PDF option or whatever website to PDF saving tool you want.  

WARNING: Microsoft's built in Save to PDF tool in Windows 10 takes a picture of the site and generates gigantic PDF files.  Chrome's tool does it correctly and generates PDFs that are much smaller in file size.

# Restrictions on Use
This software is licensed under a modified MIT license.  The license is identical to a normal MIT license, but requires Starring this GitHub repo in order to uze the software.


# Structure
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

# Troubleshooting

## The experience bars/circle things are not filled in when printing
Make sure "Background Graphics" is checked in Chrome under "More Settings" in the Print Dialog.

## Everything is squished/there's too much room at the bottom of the first page
Try adjusting column widths and margins.  With my data, I need the margins to be set to "None" and the columns to be as wide as possible and close together to fit all the information I want to on the front page.  You can set the column widths so that they add up to 90 or so.  There will be a larger space between columns, but it will probably look fine.

## The saved PDF is huge, like 700kb
Windows' build in Save to PDF takes a picture of the webpage for some reason and creates massive files.  Try using Chrome's Save to PDF feature, it should generate a much smaller PDF with the added bonus of highlightable text and clickable links.

## I don't have enough skills to fill the second page/I don't want to put personal projects
A single page resume is fine.  Just print the first page only.  ALternatively, if you have too much job experience to fit on the first page, you can just put another "Experience" section on the back and link it.

