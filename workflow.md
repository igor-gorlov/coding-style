# Coding Style Workflow

## Code Snippets

To add a **single-line** fragment of raw program code into a document:

1. Escape less-than characters (`<`), greater-than characters (`>`) and quotation marks (`"`) with appropriate `HTML`
   entities.
2. Surround the code with `<code>...</code>` tags.
3. Assign two classes to the `<code>` tag: `.snippet` and `.language-xxxx`, where `xxxx` is an identifier of the
   programming language this snippet is written in.

To add a **multiline** fragment:

1. Create an `HTML` file with an informative name in `snippets` catalog; do **not** apply any template to it.
2. Insert the code fragment into the created file.
3. Escape `<`, `>` characters and quotation marks with appropriate `HTML` entities.
4. Surround the code with `<pre><code>...</code></pre>` tags.
5. Show this file's contents in a target document using `<iframe>`.

## Creating a New `HTML` Document

1. Copy the document template file (`templates/doc.html`) to where you want to create a new document.
2. Modify its contents at your preference.
3. Optionally substitute appropriate values instead of the placeholders (enclosed in brackets).
