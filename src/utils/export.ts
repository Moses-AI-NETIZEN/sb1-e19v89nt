import fs from 'fs';
import { join } from 'path';
import type { ShopifyExport } from './types';

export function createExport(projectRoot: string, data: ShopifyExport): void {
  const exportDir = join(projectRoot, 'exports');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `shopify-export-${timestamp}.json`;

  // Create exports directory if it doesn't exist
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }

  const exportPath = join(exportDir, filename);
  fs.writeFileSync(
    exportPath,
    JSON.stringify(data, null, 2)
  );

  console.log(`✓ Shopify export created successfully: ${filename}`);
}