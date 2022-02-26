/*
This script performs automatic loading and highlighting of source code fragments which are to be shown on a webpage.

You can either put snippets directly into an HTML document or load them from files.
In the former case, you have to escape special characters with HTML entities and enclose the code into <code>...</code>.
Assign .snippet and .language-xxxx classes to the <code> tag, otherwise there is a threat of incorrect highlighting.
The latter method uses an empty <code>...</code> pair with the same set of assigned classes as above; however, a
data-src attribute is required to specify URL of the source file where the code fragment is stored. Don't worry about
special characters - the script will escape them for you.
*/


// Load multiline snippets and highlight them.
let placeholders = document.querySelectorAll("code.snippet[data-src]");
for (let i of placeholders)
{
	let sourceURL = i.getAttribute("data-src");
	let result = fetch(sourceURL)
		.then(response => response.text())
		.then(text =>
			{
				// If the placeholder is not a child of a <pre> element, create the latter and set it as a parent for the former.
				if(!i.matches("pre>code"))
				{
					let wrapper = document.createElement("pre");
					i.parentElement?.appendChild(wrapper);
					wrapper.appendChild(i);
				}
				// Escape and insert the code.
				let escapedCode = text.replace(/\</g, "&lt;")
					.replace(/\>/g, "&gt;")
					.replace(/\"/g, "&quot;");
				i.innerHTML = escapedCode;
				// Highlight the snippet.
				hljs.highlightElement(i);
			}
		);
}

// Highlight single-line snippets
let snippets = document.querySelectorAll("code.snippet:not([data-src])");
for(let i of snippets)
{
	hljs.highlightElement(i);
}
