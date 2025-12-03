import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Simulate a SQL query to fetch inventory
    // "Structured the backend to handle inventory data using SQL principles."
    const result = await db.query('SELECT * FROM products');
    
    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rowCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inventory data' },
      { status: 500 }
    );
  }
}
