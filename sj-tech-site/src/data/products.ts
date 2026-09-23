export interface ProductImage {
  id: number;
  url: string;
  content_type: string;
  original_filename: string;
}

export interface RentalProduct {
  id: number;
  sku: string;
  name: string;
  category: string;
  brand: string | null;
  product_type: string;
  daily_rate: string;
  rental_price: string;
  weight_kg: string;
  height_cm: string | null;
  width_cm: string | null;
  depth_cm: string | null;
  images: ProductImage[];
}

export interface ProductsPage {
  items: RentalProduct[];
  total: number;
  skip: number;
  limit: number;
  has_more: boolean;
}

// Base URL of the rental API. Override with PRODUCTS_API_BASE in production
// (e.g. https://rental-api.sj-tech.se). Defaults to the local dev instance.
const API_BASE = process.env.PRODUCTS_API_BASE ?? 'http://localhost:8000';

// How many products to show per page.
export const PRODUCTS_PAGE_SIZE = 12;

// Image URLs from the API are relative to the API host — resolve them to absolute.
export function getImageUrl(image: ProductImage): string {
  return new URL(image.url, API_BASE).href;
}

export async function getProductsPage(page: number): Promise<ProductsPage> {
  const skip = Math.max(0, (page - 1) * PRODUCTS_PAGE_SIZE);
  const url = `${API_BASE}/api/v1/public/products?locale=sv&skip=${skip}&limit=${PRODUCTS_PAGE_SIZE}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as ProductsPage;
}
