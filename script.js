// Swap these three files anytime to change the hero product display:
// assets/product-main.png
// assets/product-core.jpg
// assets/product-verdict.jpg

document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const h=link.getAttribute('href');if(!h||h==='#')return;const t=document.querySelector(h);if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth'});});});

// Hero product switcher: Plugin and Analyzer stay completely separate.
const productSets = {
  plugin: {
    caption: "Capture, inspect and ask questions without leaving your DAW.",
    items: [
      { src: "assets/hero-plugin-home.jpg", label: "Live Capture", alt: "SoundLens Plugin live audio capture" },
      { src: "assets/hero-plugin-space.jpg", label: "Stereo Space", alt: "SoundLens Plugin stereo space view" },
      { src: "assets/hero-plugin-resonance.jpg", label: "Resonance", alt: "SoundLens Plugin resonance scanner" },
      { src: "assets/hero-plugin-ai.jpg", label: "AI Assistant", alt: "SoundLens Plugin AI assistant" }
    ]
  },
  analyzer: {
    caption: "Upload a track and move through the full SoundLens analysis, artist data and reports.",
    items: [
      { src: "assets/hero-analyzer-analyze.jpg", label: "Analyze", alt: "SoundLens Analyzer waveform and analysis" },
      { src: "assets/hero-analyzer-verdict.jpg", label: "Verdict", alt: "SoundLens Analyzer verdict" },
      { src: "assets/hero-analyzer-overview.jpg", label: "Overview", alt: "SoundLens Analyzer overview scores" },
      { src: "assets/hero-analyzer-match.jpg", label: "Artist Match", alt: "SoundLens Artist Match results" },
      { src: "assets/hero-analyzer-galaxy.jpg", label: "Galaxy", alt: "SoundLens Galaxy artist view" },
      { src: "assets/hero-analyzer-database.jpg", label: "Database", alt: "SoundLens artist database" },
      { src: "assets/hero-analyzer-mainstream.jpg", label: "Mainstream", alt: "SoundLens mainstream collection coming soon" },
      { src: "assets/hero-analyzer-pricing.jpg", label: "Pricing", alt: "SoundLens pricing tiers" }
    ]
  }
};

const switcher = document.querySelector("[data-product-switcher]");
if (switcher) {
  const tabs = [...switcher.querySelectorAll("[data-product-tab]")];
  const mainImage = switcher.querySelector("[data-product-main]");
  const title = switcher.querySelector("[data-product-title]");
  const kicker = switcher.querySelector("[data-product-kicker]");
  const caption = switcher.querySelector("[data-product-caption]");
  const thumbs = switcher.querySelector("[data-product-thumbs]");
  let currentProduct = "plugin";
  let currentIndex = 0;

  function showItem(index) {
    const set = productSets[currentProduct];
    currentIndex = Math.max(0, Math.min(index, set.items.length - 1));
    const item = set.items[currentIndex];

    mainImage.classList.add("changing");
    window.setTimeout(() => {
      mainImage.src = item.src;
      mainImage.alt = item.alt;
      title.textContent = item.label;
      kicker.textContent = currentProduct === "plugin" ? "PLUGIN" : "ANALYZER";
      mainImage.classList.remove("changing");
    }, 110);

    [...thumbs.querySelectorAll(".product-thumb")].forEach((button, i) => {
      button.classList.toggle("active", i === currentIndex);
      button.setAttribute("aria-current", i === currentIndex ? "true" : "false");
    });
  }

  function renderProduct(product) {
    currentProduct = product;
    currentIndex = 0;
    const set = productSets[product];

    tabs.forEach(tab => {
      const active = tab.dataset.productTab === product;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });

    caption.textContent = set.caption;
    thumbs.innerHTML = "";

    set.items.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "product-thumb";
      button.setAttribute("aria-label", `View ${item.label}`);
      button.innerHTML = `<img src="${item.src}" alt="" loading="lazy"><span>${item.label}</span>`;
      button.addEventListener("click", () => showItem(index));
      thumbs.appendChild(button);
    });

    showItem(0);
  }

  tabs.forEach(tab => tab.addEventListener("click", () => renderProduct(tab.dataset.productTab)));
  renderProduct("plugin");
}
