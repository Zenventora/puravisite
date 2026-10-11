/* Shared shell for every page inside /pos. Main Puravigal pages use js/site-shell.js. */
(() => {
  const script = document.currentScript;
  const siteRoot = new URL("../", script.src);
  const url = (p) => new URL(p, siteRoot).href;
  const header = `
<header class="product-header"><div class="container product-nav">
  <a class="product-brand" href="${url('pos/')}"><img src="${url('images/puravigal-black-logo.svg')}" alt="Puravigal" width="151"><span>POS</span></a>
  <button class="menu-btn product-menu-btn" type="button" aria-label="Open POS navigation" aria-expanded="false">Menu</button>
  <nav aria-label="POS navigation">
    <a data-nav="overview" href="${url('pos/')}">Overview</a>
    <a data-nav="features" href="${url('pos/features.html')}">Features</a>
    <a data-nav="pricing" href="${url('pos/pricing.html')}">Pricing</a>
    <a data-nav="business-types" href="${url('pos/industries/')}">Business types</a>
    <a data-nav="resources" href="${url('pos/resources.html')}">Resources</a>
    <a href="https://pos.puravigal.com/">Log in</a>
    <a data-pos-cta class="product-nav-cta" href="https://pos.puravigal.com/?signup=true">Get Started Free</a>
  </nav>
</div></header>`;
  const footer = `
<footer><div class="container footer-grid product-footer">
  <div><a class="product-brand" href="${url('pos/')}"><img src="${url('images/puravigal-black-logo.svg')}" alt="Puravigal" width="151"><span>POS</span></a><p>Simple point of sale software for everyday businesses.</p></div>
  <div><b>POS</b><a href="${url('pos/')}">Overview</a><a href="${url('pos/features.html')}">Features</a><a href="${url('pos/pricing.html')}">Pricing</a></div>
  <div><b>Business types</b><a href="${url('pos/industries/retail.html')}">Retail</a><a href="${url('pos/industries/restaurant.html')}">Restaurant</a><a href="${url('pos/industries/cafe.html')}">Café</a><a href="${url('pos/industries/mobile-shop.html')}">Mobile shop</a><a href="${url('pos/industries/supermarket.html')}">Supermarket</a><a href="${url('pos/industries/grocery.html')}">Grocery</a></div>
  <div><b>Puravigal</b><a href="${url('')}">Main website</a><a href="${url('contact.html')}">Talk to us</a><a href="${url('privacy-policy.html')}">Privacy Policy</a><a href="${url('terms-and-conditions.html')}">Terms &amp; Conditions</a></div>
  <div class="social-footer"><b>Follow Puravigal</b><div class="social-links">
    <span class="social-pending" role="img" aria-label="LinkedIn link not provided yet" title="LinkedIn link pending"><img src="${url('images/icons/linkedin.svg')}" alt=""></span>
    <a href="https://www.facebook.com/puravigal" aria-label="Facebook"><img src="${url('images/icons/facebook.svg')}" alt=""></a>
    <a href="https://instagram.com/puravigal/" aria-label="Instagram"><img src="${url('images/icons/instagram.svg')}" alt=""></a>
    <a href="https://twitter.com/puravigal" aria-label="X / Twitter"><img src="${url('images/icons/twitter.svg')}" alt=""></a>
    <a href="https://www.threads.net/@puravigal" aria-label="Threads"><img src="${url('images/icons/threads.svg')}" alt=""></a>
    <span class="social-pending" role="img" aria-label="WhatsApp link not provided yet" title="WhatsApp link pending"><img src="${url('images/icons/whatsapp.svg')}" alt=""></span>
    <span class="social-pending" role="img" aria-label="YouTube link not provided yet" title="YouTube link pending"><img src="${url('images/icons/youtube.svg')}" alt=""></span>
  </div></div>
</div><div class="container copyright">© 2026 Puravigal POS. Part of Puravigal.</div></footer>`;
  const headerMount = document.querySelector('[data-pos-header]');
  const footerMount = document.querySelector('[data-pos-footer]');
  if (headerMount) headerMount.outerHTML = header;
  if (footerMount) footerMount.outerHTML = footer;

  const current = new URL(window.location.href);
  const p = current.pathname.replace(/index\\.html$/, '').replace(/\\/$/, '');
  let active = 'overview';
  if (/\\/pos\\/features\\.html$/.test(p)) active = 'features';
  else if (/\\/pos\\/pricing\\.html$/.test(p)) active = 'pricing';
  else if (/\\/pos\\/industries(?:\\/|$)/.test(p)) active = 'business-types';
  else if (/\\/pos\\/resources(?:\\.html|\\/)/.test(p)) active = 'resources';
  document.querySelectorAll('.product-header nav [data-nav]').forEach(a => {
    if (a.dataset.nav === active) { a.classList.add('is-active'); a.setAttribute('aria-current','page'); }
    else { a.classList.remove('is-active'); a.removeAttribute('aria-current'); }
  });

  const menu = document.querySelector('.product-menu-btn');
  const nav = document.querySelector('.product-header nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));
  }

  const ctas = [...document.querySelectorAll('[data-pos-cta]')];
  if (ctas.length) {
    const signup = 'https://pos.puravigal.com/?signup=true';
    const app = 'https://pos.puravigal.com/';
    ctas.forEach(a => { a.href = signup; a.textContent = 'Get Started Free'; });
    fetch('https://pos.puravigal.com/api/auth/status', {
      method: 'GET', credentials: 'include', headers: { Accept: 'application/json' }
    }).then(res => res.ok ? res.json() : null).then(data => {
      if (data && data.authenticated === true) ctas.forEach(a => {
        a.href = app; a.textContent = 'Access Now'; a.setAttribute('aria-label','Access Puravigal POS');
      });
    }).catch(() => {});
  }
})();