(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme',saved);
  document.getElementById('themeToggle')?.addEventListener('click',()=>{
    const next=root.getAttribute('data-theme')==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);localStorage.setItem('theme',next);
  });

  const search=document.getElementById('searchInput');
  const cards=[...document.querySelectorAll('.answer-card')];
  const filters=[...document.querySelectorAll('.filter')];
  const empty=document.getElementById('emptyState');
  let category='all';
  function apply(){
    const q=(search?.value||'').trim().toLowerCase();let shown=0;
    cards.forEach(card=>{const okQ=card.dataset.search.includes(q);const okC=category==='all'||card.dataset.category===category;const show=okQ&&okC;card.hidden=!show;if(show)shown++;});
    if(empty) empty.hidden=shown!==0;
  }
  search?.addEventListener('input',apply);
  filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');category=btn.dataset.category;apply();}));

  const toc=document.getElementById('toc');
  const headings=[...document.querySelectorAll('#answerContent h2')];
  if(toc&&headings.length){headings.forEach((h,i)=>{if(!h.id)h.id='section-'+(i+1);const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;toc.appendChild(a);});}

  document.querySelector('[data-copy-link]')?.addEventListener('click',async(e)=>{try{await navigator.clipboard.writeText(location.href);e.currentTarget.textContent='Copy ho gaya';setTimeout(()=>e.currentTarget.textContent='Link Copy',1600);}catch{prompt('Link copy karein:',location.href);}});
})();
