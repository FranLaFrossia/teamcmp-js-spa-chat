// Import of pages
import Profile from './views/Profile.js';
import Chat from './views/Chat.js';
import Error404 from './views/Error404.js'; // Just in case

// Supported routes
const routes = {
  '/': Profile,
  'profile': Profile,
  'chat': Chat
};

const router = async () => {
  const content = null || document.getElementById('pageContent');

  // extract pageName from URL.
  const path = location.hash.slice(2).toLowerCase() || '/';

  // Render desired page
  const page = routes[path] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change.
window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);

// Random chat generator
sessionStorage.setItem("randomChat", "Dzień dobry!");