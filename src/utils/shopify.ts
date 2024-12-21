import { ProductImage, ShopifyProduct, ProductVariant } from './types';

const PRODUCT_IMAGES: ProductImage[] = [
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    alt: "EcoBud Headband - Meditation",
    position: 1
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    alt: "EcoBud Headband - Product",
    position: 2
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    alt: "EcoBud Headband - Sleep",
    position: 3
  }
];

const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    title: "Gray",
    price: "39.99",
    compare_at_price: "69.99",
    sku: "ECOBUD-BT-GRAY",
    inventory_quantity: 100,
    requires_shipping: true,
    weight: 0.2,
    weight_unit: "kg"
  },
  {
    title: "Blue",
    price: "39.99",
    compare_at_price: "69.99",
    sku: "ECOBUD-BT-BLUE",
    inventory_quantity: 100,
    requires_shipping: true,
    weight: 0.2,
    weight_unit: "kg"
  }
];

export const generateShopifyProduct = (): ShopifyProduct => ({
  title: "Bluetooth-Compatible Earphones Sports Sleeping Headband",
  body_html: `
    <p>Experience the perfect blend of comfort and technology with our innovative Bluetooth Headband.</p>
    <h3>Key Features:</h3>
    <ul>
      <li>Advanced Bluetooth 5.0 connectivity for stable audio</li>
      <li>10-hour battery life for all-day use</li>
      <li>Ultra-soft, breathable fabric for maximum comfort</li>
      <li>Machine washable (removable electronics)</li>
      <li>Perfect for sleep, meditation, and workouts</li>
    </ul>
    <h3>Technical Specifications:</h3>
    <ul>
      <li>Bluetooth Version: 5.0</li>
      <li>Battery: 200mAh Li-ion</li>
      <li>Charging Time: 2 hours</li>
      <li>Range: 33ft (10m)</li>
    </ul>
  `,
  vendor: "EcoBud",
  product_type: "Wearable Technology",
  tags: [
    "bluetooth headband",
    "sleep headphones",
    "sports headband",
    "meditation headphones",
    "wireless sleep mask"
  ],
  variants: PRODUCT_VARIANTS,
  images: PRODUCT_IMAGES,
  status: "active",
  published: true,
  published_scope: "web",
  template_suffix: "",
  options: [{
    name: "Color",
    values: ["Gray", "Blue"]
  }]
});