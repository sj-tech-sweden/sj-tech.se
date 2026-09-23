import type { APIRoute } from 'astro';
import { getProductsPage, getImageUrl } from '../../data/products';

// Same-origin JSON endpoint so the browser can load more products without
// hitting the rental API directly (avoids CORS / cross-origin issues).
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const page = Math.max(1, Number(url.searchParams.get('page')) || 1);

  try {
    const data = await getProductsPage(page);
    const items = data.items.map((product) => ({
      ...product,
      imageUrl: product.images[0] ? getImageUrl(product.images[0]) : null,
    }));

    return new Response(JSON.stringify({ ...data, items }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
