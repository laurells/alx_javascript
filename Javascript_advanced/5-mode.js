// Function to change the page style
function changeMode(size, weight, transform, background, color) {
    document.body.style.cssText = `
      font-size: ${size}px;
      font-weight: ${weight};
      text-transform: ${transform};
      background-color: ${background};
      color: ${color};
    `;
  }
  
  // Function to create and append a button
  function createButton(text, style) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", style);
    document.body.appendChild(button);
  }
  
  // Function to create and append a paragraph
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
  }
  
  // Main function
  function main() {
    createParagraph("Welcome Holberton!");
  
    createButton("Spooky", changeMode.bind(null, 9, "bold", "uppercase", "pink", "green"));
    createButton("Dark mode", changeMode.bind(null, 12, "bold", "capitalize", "black", "white"));
    createButton("Scream mode", changeMode.bind(null, 12, "normal", "lowercase", "white", "black"));
  }
  
  main();
  