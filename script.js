// Swap these three files anytime to change the hero product display:
// assets/product-main.png
// assets/product-core.jpg
// assets/product-verdict.jpg

document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const h=link.getAttribute('href');if(!h||h==='#')return;const t=document.querySelector(h);if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth'});});});

const show=document.querySelector('.showcase');
if(show&&window.matchMedia('(pointer:fine)').matches){show.addEventListener('mousemove',e=>{const r=show.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;document.querySelector('.main').style.transform=`perspective(1400px) rotateX(${2-y*2}deg) rotateY(${x*2}deg)`;document.querySelector('.core').style.transform=`perspective(1200px) rotateY(${7+x*4}deg) rotateZ(-1.4deg) translateY(${y*-3}px)`;document.querySelector('.verdict').style.transform=`perspective(1200px) rotateY(${-7+x*4}deg) rotateZ(1.2deg) translateY(${y*-3}px)`;});show.addEventListener('mouseleave',()=>{document.querySelector('.main').style.transform='perspective(1400px) rotateX(2deg)';document.querySelector('.core').style.transform='perspective(1200px) rotateY(7deg) rotateZ(-1.4deg)';document.querySelector('.verdict').style.transform='perspective(1200px) rotateY(-7deg) rotateZ(1.2deg)';});}
