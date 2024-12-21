// @ts-check
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createExport } from '../src/utils/export.js';
import { generateShopifyProduct } from '../src/utils/shopify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const product = generateShopifyProduct();
createExport(projectRoot, { products: [product] });