// /app/services/db.server.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Usar DATABASE_URL de las variables de entorno
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

// Función auxiliar para ejecutar consultas SQL directas
export async function executeQuery(query: string, params: any[] = []) {
  return sql(query, params);
}