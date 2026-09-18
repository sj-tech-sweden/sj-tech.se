export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 'wifi-ap-pro',
    name: 'WiFi Access Point (Pro)',
    description: 'Högpresterande accesspunkt för temporära nätverk vid event och mässor.',
    price: 2490,
    inStock: true,
    category: 'Nätverk',
  },
  {
    id: 'stream-bundle',
    name: 'Liveströmningspaket',
    description: 'Flerkameraproduktion med bildmixer och stabil sändning till webb.',
    price: 8900,
    inStock: true,
    category: 'Video',
  },
  {
    id: 'pa-speaker-kit',
    name: 'PA-högtalarkit',
    description: 'Kompakt ljudsystem för scen och presentation vid mindre evenemang.',
    price: 3950,
    inStock: false,
    category: 'Evenemang',
  },
];
