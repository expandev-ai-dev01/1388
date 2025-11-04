# Restaurante Italiano - Frontend

Página de restaurante italiano, mostrando o local e pratos, atraindo o cliente.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 6.26.2
- TailwindCSS 3.4.14
- TanStack Query 5.59.20
- Axios 1.7.7

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores de contexto
│   └── router.tsx         # Configuração de rotas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── core/                  # Componentes e utilitários globais
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Features

- **Apresentação do Restaurante**: História, conceito e diferenciais
- **Exibição do Cardápio**: Pratos com fotos, descrições e preços
- **Galeria de Fotos**: Ambiente e eventos do restaurante
- **Localização e Contato**: Endereço, mapa, telefone e horários

## Arquitetura

- **Routing**: React Router com lazy loading
- **State Management**: TanStack Query para server state
- **API Client**: Axios com interceptors
- **Styling**: TailwindCSS com tema customizado
- **TypeScript**: Strict mode habilitado