/* Shared shell for the main Puravigal site. POS uses its own shell. */
(() => {
  const script = document.currentScript;
  const base = new URL("../", script.src);
  const path = (p) => new URL(p, base).href;
  const header = `<header class="site-header"><div class="container nav-wrap">
<a class="brand" href="index.html"><img src="images/puravigal-black-logo.svg" alt="Puravigal" width="151"></a>
<button class="menu-btn" aria-label="Open menu" aria-expanded="false">Menu</button>
<nav><a href="index.html#products">Products</a><a href="pos/">POS</a><a href="about-us.html">About</a><a href="index.html#faq">FAQ</a><a href="https://pos.puravigal.com/">Log in</a><a href="contact.html" class="nav-cta">Talk to us</a></nav>
</div></header>`;
  const footer = `<footer><div class="container footer-grid"><div><img src="images/puravigal-black-logo.svg" alt="Puravigal" width="151"><p>Practical business software for the businesses that keep everyday commerce moving.</p><a href="mailto:sales@puravigal.com">sales@puravigal.com</a></div><div><b>Products</b><a href="pos/">Puravigal POS</a></div><div><b>Company</b><a href="about-us.html">About</a><a href="careers.html">Careers</a><a href="contact.html">Contact</a></div><div><b>Legal</b><a href="privacy-policy.html">Privacy Policy</a><a href="terms-and-conditions.html">Terms & Conditions</a></div><div><b>Follow Puravigal</b><div class="social-links"><span class="social-pending" role="img" aria-label="LinkedIn link not provided yet" title="LinkedIn link pending"><img src="images/icons/linkedin.svg" alt=""></span><a href="https://www.facebook.com/puravigal" aria-label="Facebook"><img src="images/icons/facebook.svg" alt=""></a><a href="https://instagram.com/puravigal/" aria-label="Instagram"><img src="images/icons/instagram.svg" alt=""></a><a href="https://twitter.com/puravigal" aria-label="X / Twitter"><img src="images/icons/twitter.svg" alt=""></a><a href="https://www.threads.net/@puravigal" aria-label="Threads"><img src="images/icons/threads.svg" alt=""></a><span class="social-pending" role="img" aria-label="WhatsApp link not provided yet" title="WhatsApp link pending"><img src="images/icons/whatsapp.svg" alt=""></span><span class="social-pending" role="img" aria-label="YouTube link not provided yet" title="YouTube link pending"><img src="images/icons/youtube.svg" alt=""></span></div></div></div><div class="container copyright">© 2026 Puravigal. All rights reserved.</div></footer>`;
  const rewriteLocal = (markup) => markup
    .replaceAll('href="index.html"', 'href="' + path('index.html') + '"')
    .replaceAll('href="index.html#products"', 'href="' + path('index.html#products') + '"')
    .replaceAll('href="index.html#faq"', 'href="' + path('index.html#faq') + '"')
    .replaceAll('href="pos/"', 'href="' + path('pos/') + '"')
    .replaceAll('href="about-us.html"', 'href="' + path('about-us.html') + '"')
    .replaceAll('href="careers.html"', 'href="' + path('careers.html') + '"')
    .replaceAll('href="contact.html"', 'href="' + path('contact.html') + '"')
    .replaceAll('href="login.html"', 'href="' + path('login.html') + '"')
    .replaceAll('href="privacy-policy.html"', 'href="' + path('privacy-policy.html') + '"')
    .replaceAll('href="terms-and-conditions.html"', 'href="' + path('terms-and-conditions.html') + '"')
    .replaceAll('src="images/', 'src="' + path('images/'));
  const headerMount = document.querySelector('[data-site-header]');
  const footerMount = document.querySelector('[data-site-footer]');
  if (headerMount) headerMount.outerHTML = rewriteLocal(header);
  if (footerMount) footerMount.outerHTML = rewriteLocal(footer);
  const current = new URL(window.location.href);
  document.querySelectorAll('.site-header nav a[href]').forEach((link) => {
    const target = new URL(link.href, current);
    if (target.origin !== current.origin) return;
    const pathKey = (p) => p.replace(/index\\.html$/, '').replace(/\\/$/, '');
    const samePath = pathKey(target.pathname) === pathKey(current.pathname);
    const sameHash = !target.hash || target.hash === current.hash;
    if (samePath && sameHash && (!target.hash || current.hash === target.hash)) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
})();