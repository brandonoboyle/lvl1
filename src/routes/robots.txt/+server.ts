export const GET = async () => {
  const body = `User-agent: *\nAllow: /\nSitemap: https://levelonegamepub.com/sitemap.xml\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}; 