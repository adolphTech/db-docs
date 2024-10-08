console.log("Custom.js script is loading");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");

  const items = document.querySelectorAll('ul > li');
  console.log("Items found:", items.length);

  items.forEach(item => {
    const description = item.querySelector('strong')?.nextSibling?.textContent.trim();
    console.log("Description:", description);

    if (description === '') {
      item.querySelector('strong')?.classList.add('empty-description');
      console.log("Empty description found and class added");
    }
  });

  console.log("Script completed");
});
