export default async function handler(req, res) {
  const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN;
  
  // Resolve the actual domain and requested path dynamically
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'dangalgym.in';
  const rawPath = req.query.path ? `/${req.query.path}` : (req.url.replace(/^\/api\/prerender(\?path=)?/, '') || '/');
  const targetUrl = `${protocol}://${host}${rawPath}`;

  // If no Prerender token is configured, safely fall back to the live site so bots never receive a 500 error
  if (!PRERENDER_TOKEN || PRERENDER_TOKEN === 'fake_token_for_now') {
    try {
      const originRes = await fetch(`${protocol}://${host}/index.html`);
      const html = await originRes.text();
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(html);
    } catch {
      return res.redirect(302, targetUrl);
    }
  }

  try {
    const prerenderUrl = `https://service.prerender.io/${targetUrl}`;
    const prerenderRes = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': req.headers['user-agent'] || 'Googlebot'
      }
    });

    if (prerenderRes.ok) {
      const html = await prerenderRes.text();
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(html);
    }

    // If Prerender fails or hits quota limit, fallback to serving index.html directly
    const fallbackRes = await fetch(`${protocol}://${host}/index.html`);
    const fallbackHtml = await fallbackRes.text();
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(fallbackHtml);
  } catch (error) {
    // Fail-safe: redirect to target URL so crawler is never stranded
    return res.redirect(302, targetUrl);
  }
}
