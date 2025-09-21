// smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'});}));

// keywords open related.html with query param so user sees related content
document.querySelectorAll('.k').forEach(k=>k.addEventListener('click',e=>{
  e.preventDefault();
  const q = k.dataset.q || k.textContent.trim();
  window.location.href = 'related.html?q=' + encodeURIComponent(q);
}));

console.log('Final SEO demo loaded');