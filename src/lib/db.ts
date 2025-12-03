import { products } from './products';

// This is a mock database client that simulates SQL queries.
// In a real production environment, this would connect to PostgreSQL/MySQL
// using a library like 'pg', 'mysql2', or an ORM like Prisma/Drizzle.

interface QueryResult<T> {
  rows: T[];
  rowCount: number;
}

class MockDatabase {
  private delay: number;

  constructor(delayMs: number = 100) {
    this.delay = delayMs;
  }

  // Simulate network latency
  private async wait() {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }

  // Mock generic query execution
  async query<T = any>(sql: string, params: any[] = []): Promise<QueryResult<T>> {
    await this.wait();
    console.log(`[MockDB] Executing Query: ${sql}`, params);

    // Simple mock logic to parse basic intent from the SQL string
    // This is strictly for demonstration to match the resume's "SQL principles" claim
    
    if (sql.includes('SELECT * FROM products')) {
      return {
        rows: products as unknown as T[],
        rowCount: products.length,
      };
    }

    if (sql.includes('SELECT * FROM products WHERE id =')) {
      const id = params[0];
      const product = products.find(p => p.id === id);
      return {
        rows: (product ? [product] : []) as unknown as T[],
        rowCount: product ? 1 : 0,
      };
    }

    // Default empty return for unimplemented mock queries
    return {
      rows: [],
      rowCount: 0,
    };
  }
}

// Export a singleton instance
export const db = new MockDatabase();
