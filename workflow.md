# Coding Style Workflow

## Project Structure

-   The top-level front page (`index.html`) resides within the root directory together with all CSS stylesheets and all
    JS scripts. This page is automatically loaded when no path is provided via URL.
-   The revision that is now under active development (also known as "the current draft") is located in `draft`
    subdirectory.
-   Stable revisions are stored each in its own subdirectory named `rev<number>`, where `<number>` is an ordinal
    starting from 1.

## Code Snippets

The `prepare_snippets.js` script is used to simplify insertion of raw program code listings into HTML documents. You can
find installation and usage instructions at the top of the JavaScript file itself.

## Creating a New HTML Document

1. Copy the document template file (`templates/doc.html`) to where you want to create a new document.
2. Modify its contents at your preference.
3. Optionally substitute appropriate values instead of the placeholders (enclosed in brackets).
