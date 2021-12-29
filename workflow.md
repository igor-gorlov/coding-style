# Coding Style Workflow

## Code Snippets

To add a **single-line** fragment of raw program code into a document:

1. Escape less-than characters (`<`), greater-than characters (`>`) and quotation marks (`"`) with appropriate HTML
   entities.
2. Surround the code with `<code>...</code>` tags.

To add a **multiline** fragment:

1. Create an HTML file with an informative name in `snippets` catalog; do **not** apply any template to it.
2. Insert the code fragment into the created file.
3. Escape `<`, `>` characters and quotation marks with appropriate HTML entities.
4. Surround the code with `<pre><code>...</code></pre>` tags.
5. Show this file's contents in a target document using **iframe**.
