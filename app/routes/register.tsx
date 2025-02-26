import { Form, Link } from "@remix-run/react";

export default function Register() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
      <Form method="post">
        {/* Datos Personales */}
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Número de Celular
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {/* Documentación de Identificación */}
        <div className="mb-4">
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
            Tipo de Documento
          </label>
          <select
            id="documentType"
            name="documentType"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="CE">Cédula de Extranjería</option>
            <option value="NUIP">NUIP</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
            Número de Documento
          </label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            País de Expedición
          </label>
          <select
            id="country"
            name="country"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecciona tu país</option>
            <option value="CO">Colombia</option>
            {/* Agrega más países conforme lo necesites */}
          </select>
        </div>
        {/* Información Demográfica */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Género
          </label>
          <select
            id="gender"
            name="gender"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="NB">No Binario</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
            Estado Civil
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="soltero">Soltero(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="unionLibre">Unión Libre</option>
            <option value="viudo">Viudo(a)</option>
            <option value="divorciado">Divorciado(a)</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Dirección de Residencia
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {/* Seguridad */}
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
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="mr-2"
          />
          <label htmlFor="privacy" className="text-sm text-gray-700">
            Acepto la{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Política de privacidad
            </a>
          </label>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          REGÍSTRATE
        </button>
      </Form>
      <p className="mt-4 text-center text-sm">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Inicia Sesión
        </Link>
      </p>
    </div>
  );
}
