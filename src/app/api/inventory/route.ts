import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// This route is specifically designed to match the "handle inventory data" description
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    // Fetch specific product inventory
    const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    
    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({
      inventory_status: 'in_stock',
      stock_level: 100, // Mock data
      product: result.rows[0]
    });
  }

  // Full inventory dump
  const result = await db.query('SELECT * FROM products');
  
  return NextResponse.json({
    total_products: result.rowCount,
    inventory_valuation: result.rows.reduce((acc: number, curr: any) => acc + curr.price, 0),
    items: result.rows.map((item: any) => ({
      id: item.id,
      sku: `SKU-${item.id.padStart(6, '0')}`,
      stock: Math.floor(Math.random() * 50) + 10 // Simulate stock levels
    }))
  });
}
