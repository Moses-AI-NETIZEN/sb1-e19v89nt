export interface ProductImage {
  src: string;
  alt: string;
  position: number;
}

export interface ProductVariant {
  title: string;
  price: string;
  compare_at_price: string;
  sku: string;
  inventory_quantity: number;
  requires_shipping: boolean;
  weight: number;
  weight_unit: string;
}

export interface ShopifyProduct {
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: ProductVariant[];
  images: ProductImage[];
  status: string;
  published: boolean;
  published_scope: string;
  template_suffix: string;
  options: {
    name: string;
    values: string[];
  }[];
}

export interface ShopifyExport {
  products: ShopifyProduct[];
}