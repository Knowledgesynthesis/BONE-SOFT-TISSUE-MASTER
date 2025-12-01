# Bone & Soft Tissue Master

A mobile-first, offline-ready educational platform for Bone and Soft Tissue Pathology designed for pathology residents and fellows.

## Features

- **Comprehensive Coverage**: 15 learning modules covering normal histology through complex diagnostic scenarios
- **Pattern-Based Learning**: Matrix-first approach to bone and soft tissue tumor diagnosis
- **Interactive Cases**: Integrated case studies synthesizing morphology, IHC, molecular, and radiology
- **Session-Only Assessments**: Practice quizzes with instant feedback (no tracking or data storage)
- **Dark Mode First**: Optimized for comfortable extended study sessions
- **Offline Ready**: Service worker enables offline access to all educational content
- **Mobile Optimized**: Responsive design works seamlessly on all devices

## Educational Modules

1. **Normal Bone & Soft Tissue** - Foundational anatomy and histology
2. **Reactive & Non-Neoplastic** - Fracture healing, myositis ossificans, nodular fasciitis
3. **Bone-Forming Tumors** - Osteoid-producing neoplasms
4. **Cartilage-Forming Tumors** - Chondroid matrix lesions
5. **Fibrous & Fibro-Osseous** - Fibroblastic neoplasms
6. **Adipocytic Tumors** - Lipomas and liposarcomas
7. **Vascular & Perivascular** - Vascular neoplasms
8. **Muscle & Nerve Sheath** - Smooth muscle, skeletal muscle, and nerve tumors
9. **Spindle Cell Patterns** - Pattern-based differential diagnosis
10. **Small Round Blue Cell Tumors** - Systematic approach to SRBCT
11. **Molecular & Genetic Concepts** - Fusions, amplifications, and molecular alterations
12. **Radiology Correlation** - Imaging-pathology integration
13. **Core Biopsy & Resection** - Tissue triage and sampling strategies
14. **Pitfalls & Dangerous Mimics** - Common diagnostic traps
15. **Integrated Case Synthesis** - Full workflow case studies

## Tech Stack

- **React 18** with TypeScript for type-safe component development
- **Vite** for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling with dark mode support
- **Zustand** for lightweight state management (session-only)
- **React Router** for client-side routing
- **PWA** with service worker for offline capability
- **Lucide React** for consistent iconography

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

```bash
# Run development server with hot reload
npm run dev

# Type check
npx tsc --noEmit

# Build
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation component
│   └── ModuleLayout.tsx # Module page layout
├── pages/              # Route pages
│   ├── modules/        # Learning module pages
│   ├── Home.tsx        # Home page
│   ├── Settings.tsx    # Settings page
│   └── Assessment.tsx  # Quiz/assessment page
├── store/              # Zustand state management
│   └── useStore.ts     # App state store
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind directives
```

## Key Design Principles

### Educational Philosophy

- **Matrix-First Approach**: Identify osteoid, chondroid, or myxoid matrix to narrow differentials
- **Pattern Recognition**: Classify architectural patterns (fascicular, storiform, herringbone, myxoid)
- **Integration**: Synthesize morphology, IHC, molecular, and radiology findings
- **Pitfall Awareness**: Recognize common diagnostic traps and mimics

### No Data Tracking

This app intentionally does **not** track, store, or transmit any user data:
- No user accounts or authentication
- No progress tracking or completion statistics
- No data exports or analytics
- Quiz scores are session-only and cleared on refresh

### Accessibility

- WCAG 2.2 AA compliant
- Dark mode optimized for reduced eye strain
- Mobile-first responsive design
- Clear typography and sufficient color contrast

## Disclaimers

**IMPORTANT**: This application is for educational purposes only.

- **Not for Clinical Use**: This app is NOT intended for diagnosis, patient care, or treatment decisions
- **Synthetic Content**: All cases and examples are 100% synthetic and non-identifiable
- **No PHI**: No real patient data or protected health information is used
- **Educational Only**: Consult qualified healthcare professionals and established clinical guidelines for patient care
- **Illustrations Only**: All visual content consists of schematic illustrations and icons (no real histology images)

## License

This is an educational project. All content is synthetic and for educational purposes only.

## Version

1.0.0
