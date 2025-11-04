# Backend API - Página de Restaurante Italiano

## Description
Backend API for the Italian Restaurant website project.

## Technology Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure
```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Configuration
1. Copy `.env.example` to `.env`
2. Configure environment variables

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/health` - Server health status

### API Version 1
- Base URL: `/api/v1`
- External (Public): `/api/v1/external`
- Internal (Authenticated): `/api/v1/internal`

## Development Guidelines

### Code Standards
- Follow TypeScript strict mode
- Use 2-space indentation
- Maximum line length: 120 characters
- Use single quotes for strings
- Always use semicolons

### Path Aliases
- Use `@/` prefix for absolute imports from `src/`
- Example: `import { successResponse } from '@/utils/response'`

### Error Handling
- All errors should use the standardized error middleware
- Return appropriate HTTP status codes
- Provide clear error messages

## License
ISC
