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
				// Insert the content.
				i.innerHTML = text;
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
