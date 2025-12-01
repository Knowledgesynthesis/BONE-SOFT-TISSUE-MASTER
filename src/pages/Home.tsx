import { Link } from 'react-router-dom'
import {
  Microscope,
  Activity,
  Bone,
  CircleDot,
  Network,
  Droplet,
  Heart,
  Zap,
  GitBranch,
  Circle,
  Dna,
  ScanLine,
  Scissors,
  AlertTriangle,
  FolderOpen,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

interface Module {
  title: string
  description: string
  path: string
  icon: React.ElementType
  color: string
}

const modules: Module[] = [
  {
    title: 'Normal Bone & Soft Tissue',
    description: 'Bone anatomy, cartilage structure, muscle, tendon, fat, and nerve basics',
    path: '/normal',
    icon: Microscope,
    color: 'text-blue-500'
  },
  {
    title: 'Reactive & Non-Neoplastic',
    description: 'Fracture healing, myositis ossificans, nodular fasciitis, fibrous dysplasia',
    path: '/reactive',
    icon: Activity,
    color: 'text-green-500'
  },
  {
    title: 'Bone-Forming Tumors',
    description: 'Osteoid matrix patterns, osteoma, osteoblastoma, osteosarcoma',
    path: '/bone-tumors',
    icon: Bone,
    color: 'text-amber-500'
  },
  {
    title: 'Cartilage-Forming Tumors',
    description: 'Chondroid matrix, enchondroma, osteochondroma, chondrosarcoma',
    path: '/cartilage',
    icon: CircleDot,
    color: 'text-cyan-500'
  },
  {
    title: 'Fibrous & Fibro-Osseous',
    description: 'Fibroma, desmoid-type fibromatosis, fibrosarcoma patterns',
    path: '/fibrous',
    icon: Network,
    color: 'text-purple-500'
  },
  {
    title: 'Adipocytic Tumors',
    description: 'Lipoma, atypical lipomatous tumor, myxoid liposarcoma, MDM2',
    path: '/fat',
    icon: Droplet,
    color: 'text-yellow-500'
  },
  {
    title: 'Vascular & Perivascular',
    description: 'Hemangioma, angiosarcoma, perivascular epithelioid cell tumors',
    path: '/vascular',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    title: 'Muscle & Nerve Sheath',
    description: 'Leiomyosarcoma, rhabdomyosarcoma, schwannoma, neurofibroma, MPNST',
    path: '/muscle-nerve',
    icon: Zap,
    color: 'text-orange-500'
  },
  {
    title: 'Spindle Cell Patterns',
    description: 'Fascicular, storiform, myxoid, herringbone, fibrohistiocytic patterns',
    path: '/spindle',
    icon: GitBranch,
    color: 'text-pink-500'
  },
  {
    title: 'Small Round Blue Cell Tumors',
    description: 'Ewing family, lymphoma, rhabdomyosarcoma, mesenchymal chondrosarcoma',
    path: '/srbct',
    icon: Circle,
    color: 'text-indigo-500'
  },
  {
    title: 'Molecular & Genetic Concepts',
    description: 'Fusions (EWSR1, SS18, DDIT3), amplifications (MDM2/CDK4), INI1 loss',
    path: '/molecular',
    icon: Dna,
    color: 'text-teal-500'
  },
  {
    title: 'Radiology Correlation',
    description: 'Osteoid density, chondroid calcifications, aggressive periosteal reactions',
    path: '/radiology',
    icon: ScanLine,
    color: 'text-violet-500'
  },
  {
    title: 'Core Biopsy & Resection',
    description: 'Tissue triage, sampling strategies, margin concepts, tumor heterogeneity',
    path: '/triage',
    icon: Scissors,
    color: 'text-emerald-500'
  },
  {
    title: 'Pitfalls & Dangerous Mimics',
    description: 'Myositis ossificans vs osteosarcoma, nodular fasciitis, MDM2 pitfalls',
    path: '/pitfalls',
    icon: AlertTriangle,
    color: 'text-rose-500'
  },
  {
    title: 'Integrated Case Synthesis',
    description: 'Full workflow: morphology → matrix → IHC → molecular → radiology',
    path: '/cases',
    icon: FolderOpen,
    color: 'text-sky-500'
  },
  {
    title: 'Assessment',
    description: 'Test your knowledge with session-only quizzes and case-based questions',
    path: '/assessment',
    icon: ClipboardCheck,
    color: 'text-lime-500'
  }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bone & Soft Tissue Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master bone and soft tissue pathology through pattern recognition,
          matrix interpretation, and integrated diagnostic reasoning
        </p>
      </div>

      {/* Educational Approach */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Pattern-Based Learning Approach</CardTitle>
          <CardDescription>
            Start with matrix → recognize patterns → integrate features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Matrix First</h4>
              <p className="text-muted-foreground">
                Identify osteoid, chondroid, or myxoid matrix to narrow differentials
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pattern Recognition</h4>
              <p className="text-muted-foreground">
                Classify spindle, small round, or epithelioid architectures
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Integration</h4>
              <p className="text-muted-foreground">
                Synthesize morphology, IHC, molecular, and radiology findings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link key={module.path} to={module.path}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Icon className={`h-8 w-8 ${module.color}`} />
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {module.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer Note */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <p className="text-sm text-center text-muted-foreground">
            All content is synthetic and for educational purposes only.
            Not intended for clinical diagnosis or patient care.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
