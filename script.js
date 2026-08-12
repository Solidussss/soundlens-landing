// Swap these three files anytime to change the hero product display:
// assets/product-main.png
// assets/product-core.jpg
// assets/product-verdict.jpg

document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const h=link.getAttribute('href');if(!h||h==='#')return;const t=document.querySelector(h);if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth'});});});

// Two independent hero galleries. Plugin and Analyzer never share the same frame.
document.querySelectorAll(".hero-product-control").forEach(button => {
  button.addEventListener("click", () => {
    const gallery = button.dataset.gallery;
    const image = document.getElementById(gallery + "-hero-image");
    if (!image) return;

    const group = [...document.querySelectorAll(`.hero-product-control[data-gallery="${gallery}"]`)];
    group.forEach(item => item.classList.toggle("active", item === button));

    image.classList.add("switching");
    window.setTimeout(() => {
      image.src = button.dataset.image;
      image.alt = button.dataset.alt || "";
      image.classList.toggle("artist-match-view", gallery === "analyzer" && button.textContent.trim() === "Artist Match");
      image.classList.remove("switching");
    }, 90);
  });
});
