export const GET = async () => {
  const body = `User-agent: *
Allow: /
Disallow: /board_games/
Sitemap: https://levelonegamepub.com/sitemap.xml
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}; 