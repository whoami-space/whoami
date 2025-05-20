const datePicker = new Date()
let currentYear = datePicker.getFullYear()


const posts = [
  {
    slug: "page",
    updatedAt: currentYear
  }
] 

const tests = [
  {
    slug: "page",
    updatedAt: currentYear
  }
]

const pages = [
  "about",
  "explore"
]

const site = 'https://whoami.space'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const body = sitemap(pages, posts, tests)
  const response = new Response(body)
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600')
  response.headers.set('Content-Type', 'application/xml')
  return response
}

const sitemap = (pages, posts, tests) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `,
    )
    .join('')}
  ${posts
    .map((post) =>
      post.visible
        ? null
        : `
  <url>
    <loc>${site}/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `,
    )
    .join('')}
  ${tests
      .map((test) =>
        test.visible
          ? null
          : `
    <url>
      <loc>${site}/blog/${test.slug}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${test.updatedAt}</lastmod>
      <priority>0.8</priority>
    </url>
    `,
      )
      .join('')}
</urlset>`
