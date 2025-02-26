import { Link } from "@remix-run/react";

export default function AssistantButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      {/* Text chat button */}
      <Link
        to="/asistente?mode=text"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-blue text-white shadow-lg hover:bg-primary-blue/90 transition-all hover:scale-105"
        aria-label="Chat asistente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Link>

      {/* Voice assistant button */}
      <Link
        to="/asistente?mode=voice"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-yellow text-dark shadow-lg hover:bg-accent-yellow/90 transition-all hover:scale-105"
        aria-label="Asistente de voz"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </Link>
    </div>
  );
}