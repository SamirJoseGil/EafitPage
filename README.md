# EafitPage/EafitPage/README.md

# EafitPage Chatbot Application

This project is a Remix application that integrates a text and voice chatbot, providing users with an interactive experience through both text and voice interfaces.

## Features

- Text-based chat interface
- Voice recognition and voice assistant capabilities
- Message display with user and assistant differentiation
- Voice recording functionality

## Project Structure

```
EafitPage
├── app
│   ├── components
│   │   ├── ChatInterface.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── VoiceAssistant.tsx
│   │   └── VoiceRecorder.tsx
│   ├── hooks
│   │   ├── useChat.ts
│   │   └── useSpeechRecognition.ts
│   ├── routes
│   │   └── asistente.tsx
│   ├── services
│   │   ├── chatService.ts
│   │   └── speechService.ts
│   └── utils
│       └── audioProcessing.ts
├── api
│   └── chat.js
├── package.json
├── remix.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd EafitPage
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Visit `http://localhost:3000/asistente` to access the chatbot interface.

## Deployment

This application is designed to be deployed on Vercel. Follow the Vercel documentation for deploying a Remix application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.