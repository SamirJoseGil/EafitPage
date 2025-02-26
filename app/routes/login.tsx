import { Form, Link } from "@remix-run/react";

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <Form method="post">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          INGRESAR
        </button>
      </Form>
      <p className="mt-4 text-center text-sm">
        ¿AÚN NO HACES PARTE?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          REGÍSTRATE
        </Link>
      </p>
    </div>
  );
}
