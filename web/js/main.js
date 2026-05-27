const list = document.getElementById("pages-list");

fetch("pages/manifest.json")
  .then((res) => {
    if (!res.ok) throw new Error(`Failed to load manifest: ${res.status}`);
    return res.json();
  })
  .then((pages) => {
    if (pages.length === 0) {
      list.innerHTML = "<li>No pages found.</li>";
      return;
    }
    list.innerHTML = pages
      .map(({ file, title }) => `<li><a href="pages/${file}">${title}</a></li>`)
      .join("");
  })
  .catch((err) => {
    list.innerHTML = `<li>Error: ${err.message}</li>`;
  });
