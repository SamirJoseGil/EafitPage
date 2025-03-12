import { neon } from '@neondatabase/serverless';

// Función para obtener una conexión a la base de datos con mejor manejo de errores
function getDatabaseConnection() {
  const url = process.env.DATABASE_URL;
  
  if (!url) {
    console.error("⚠️ DATABASE_URL no está definido. Verifica las variables de entorno.");
    throw new Error("No database connection string was provided. Set DATABASE_URL environment variable.");
  }
  
  try {
    const sql = neon(url);
    
    // Función para ejecutar consultas con mejor manejo de errores
    const executeQuery = async (query: string, params: any[] = []) => {
      try {
        return await sql(query, params);
      } catch (error) {
        console.error("Error ejecutando consulta SQL:", error);
        throw error;
      }
    };
    
    return { executeQuery };
  } catch (connectError) {
    console.error("Error al conectar con la base de datos Neon:", connectError);
    throw connectError;
  }
}

// Exportar la función de consulta
export const { executeQuery } = getDatabaseConnection();