export const GET = async () => {
  const body = `User-agent: *
Allow: /
Disallow: /author/
Disallow: /wp-content/
Disallow: /wp-admin/
Disallow: /wp-json/
Disallow: /wp-includes/
Disallow: /category/
Disallow: /tag/
Disallow: /page/
Disallow: /blog/
Disallow: /pages/
Sitemap: https://levelonegamepub.com/sitemap.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}; 