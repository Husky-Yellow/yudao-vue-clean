# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **yudao-ui-admin-vue3**, a Vue 3 admin dashboard built with modern technologies. It's part of the YuDao ecosystem - an open-source rapid development platform designed for both individual and enterprise use.

**Key Features:**
- Vue 3 + TypeScript + Vite 5 + Element Plus
- Multi-tenant SaaS architecture support
- Enterprise-level management modules (BPM, CRM, ERP, Mall, AI)
- Comprehensive workflow engine with dual designers (BPMN + Simple/Dingtalk-style)
- Integrated payment system, member center, and data reporting

## Development Commands

### Essential Commands
- `pnpm i` - Install dependencies (pnpm is required, not npm/yarn)
- `pnpm dev` - Start development server (local environment)
- `pnpm dev-server` - Start development server (dev environment)
- `pnpm build:local` - Build for local/development
- `pnpm build:prod` - Build for production
- `pnpm ts:check` - Run TypeScript type checking
- `pnpm preview` - Build and preview locally

### Code Quality & Linting
- `pnpm lint:eslint` - Run ESLint and auto-fix
- `pnpm lint:format` - Format code with Prettier
- `pnpm lint:style` - Run Stylelint for CSS/SCSS

### Environment Requirements
- Node.js >= 16.18.0
- pnpm >= 8.6.0 (strongly enforced)

## Architecture Overview

### Core Technology Stack
- **Frontend Framework:** Vue 3.5+ with Composition API
- **Build Tool:** Vite 5.1+ with modern ES modules
- **UI Library:** Element Plus 2.9+
- **State Management:** Pinia with persistence plugin
- **Routing:** Vue Router 4.4+ with history mode
- **Styling:** SCSS + UnoCSS atomic CSS
- **TypeScript:** Full type safety throughout
- **Internationalization:** Vue I18n with dynamic locale switching

### Project Structure

```
src/
├── api/               # API layer - organized by business modules
│   ├── ai/           # AI modules (chat, image, workflow, etc.)
│   ├── bpm/          # Business Process Management
│   ├── crm/          # Customer Relationship Management
│   ├── erp/          # Enterprise Resource Planning
│   ├── mall/         # E-commerce system
│   ├── system/       # System administration
│   └── ...
├── components/        # Reusable UI components
├── layout/           # Layout components (multi-layout support)
├── views/            # Page components (mirrors api structure)
├── store/            # Pinia state management
├── router/           # Vue Router configuration
├── utils/            # Utility functions and helpers
├── hooks/            # Vue 3 composition hooks
├── styles/           # Global SCSS styles and variables
└── types/            # TypeScript type definitions
```

### Key Architectural Patterns

**API Layer Organization:**
- APIs are organized by business domains (ai, bpm, crm, erp, mall, etc.)
- Each module follows a consistent structure with index.ts exports
- Request/response types are co-located with API functions

**Component Architecture:**
- Composition API with `<script setup>` syntax
- Highly reusable component library in `/components`
- Layout system supports multiple layouts (classic, topLeft, top, cutMenu)
- Form components use FormCreate for dynamic form generation

**State Management:**
- Pinia stores organized by feature modules
- Persistence plugin for automatic localStorage sync
- Reactive state with computed properties and watchers

**Routing & Permissions:**
- Dynamic route generation based on user permissions
- Route guards in `permission.ts` for access control
- Menu structure mirrors routing structure

### Business Modules

**Workflow (BPM):**
- Dual workflow designers: BPMN standard + Simple/Dingtalk-style
- Flowable engine integration
- Support for complex approval flows, parallel/sequential processing
- Advanced features: delegation, countersigning, escalation

**AI Integration:**
- Chat conversations with multiple AI models
- Image generation and processing
- Knowledge base management with document segmentation
- Workflow automation and mind mapping

**E-commerce (Mall):**
- Complete product catalog and inventory
- Promotion engine (coupons, discounts, group buying)
- Order management and after-sales service
- Multi-channel payment integration

**CRM & ERP:**
- Customer lifecycle management
- Business opportunity tracking
- Inventory and warehouse management
- Financial accounting integration

### Development Guidelines

**Code Style:**
- Use TypeScript for all new code
- Follow Vue 3 Composition API patterns
- Prefer `<script setup>` syntax
- Use Pinia for state management over Vuex
- Follow the established API structure patterns

**Component Development:**
- Create reusable components in `/components`
- Use proper TypeScript interfaces for props
- Implement proper error handling
- Follow Element Plus design patterns

**API Development:**
- Mirror the existing API structure
- Use the centralized request wrapper in `config/axios`
- Implement proper error handling and loading states
- Type all API responses

## Important Notes

- **Package Manager:** Must use pnpm (not npm or yarn)
- **Environment Variables:** Configuration managed via Vite env files
- **Asset Management:** SVG icons auto-imported, images in `/assets`
- **Internationalization:** All text must support i18n
- **Permission System:** All routes/components must respect permission controls
- **Multi-tenant:** Architecture supports SaaS multi-tenancy