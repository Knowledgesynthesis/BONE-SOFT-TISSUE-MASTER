import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'

interface CaseData {
  id: string
  title: string
  clinical: string
  imaging: string
  morphology: string
  ihc: string
  molecular: string
  diagnosis: string
  rationale: string
}

const cases: CaseData[] = [
  {
    id: 'case_1',
    title: 'Case 1: Adolescent with Knee Pain',
    clinical: '16-year-old male with progressive knee pain and swelling. No history of trauma.',
    imaging: 'Radiograph shows metaphyseal lesion in distal femur with cloud-like density and sunburst periosteal reaction.',
    morphology: 'Biopsy shows highly atypical cells with hyperchromatic nuclei, brisk mitotic activity, and lace-like eosinophilic osteoid matrix production.',
    ihc: 'Not required for diagnosis given clear osteoid production.',
    molecular: 'Complex karyotype (no specific translocation).',
    diagnosis: 'High-Grade Osteosarcoma (Conventional Type)',
    rationale: 'Matrix first: osteoid production is diagnostic. Highly atypical cells producing osteoid = osteosarcoma. Location (metaphysis around knee), age (adolescent), and sunburst periosteal reaction support diagnosis.'
  },
  {
    id: 'case_2',
    title: 'Case 2: Deep Thigh Mass',
    clinical: '35-year-old female with slowly growing deep thigh mass over 2 years.',
    imaging: 'MRI shows large heterogeneous soft tissue mass with areas of fat attenuation and septations.',
    morphology: 'Resection shows mature adipose tissue with variation in adipocyte size, scattered hyperchromatic atypical stromal cells in fibrous septa, and rare lipoblasts.',
    ihc: 'MDM2 amplification by FISH confirmed. MDM2 and CDK4 positive by IHC.',
    molecular: 'MDM2 and CDK4 amplification. Supernumerary ring chromosomes.',
    diagnosis: 'Atypical Lipomatous Tumor (Well-Differentiated Liposarcoma)',
    rationale: 'Adipocytic tumor with atypia. MDM2 amplification is diagnostic and distinguishes from lipoma. Deep location in thigh. Complete excision is curative for extremity lesions.'
  },
  {
    id: 'case_3',
    title: 'Case 3: Small Round Blue Cell Tumor',
    clinical: '12-year-old male with diaphyseal femur mass and systemic symptoms.',
    imaging: 'Radiograph shows permeative lytic lesion with onion-skin periosteal reaction.',
    morphology: 'Sheets of monotonous small round blue cells with scant cytoplasm, finely dispersed chromatin, and minimal pleomorphism.',
    ihc: 'CD99 strongly positive (membranous). NKX2.2 positive. FLI1 positive. CD45 negative.',
    molecular: 'EWSR1-FLI1 fusion detected by RT-PCR. EWSR1 rearrangement by FISH.',
    diagnosis: 'Ewing Sarcoma',
    rationale: 'Small round blue cells + CD99 positivity + EWSR1-FLI1 fusion = Ewing sarcoma. Age, location (diaphysis), and onion-skin reaction support. CD45 negative rules out lymphoma.'
  },
  {
    id: 'case_4',
    title: 'Case 4: Myxoid Soft Tissue Mass',
    clinical: '40-year-old male with deep soft tissue mass in thigh.',
    imaging: 'MRI shows lobulated mass with high T2 signal (myxoid).',
    morphology: 'Abundant myxoid stroma with characteristic chicken-wire capillary network. Small round to oval cells. Lipoblasts at varying stages of differentiation.',
    ihc: 'S100 positive. No specific IHC needed.',
    molecular: 'FUS-DDIT3 fusion confirmed.',
    diagnosis: 'Myxoid Liposarcoma',
    rationale: 'Myxoid pattern + chicken-wire vasculature + lipoblasts + FUS-DDIT3 fusion = myxoid liposarcoma. Classic presentation in deep thigh.'
  },
  {
    id: 'case_5',
    title: 'Case 5: Spindle Cell Tumor with Zonation',
    clinical: '25-year-old athlete with rapidly growing thigh mass after blunt trauma 3 weeks ago.',
    imaging: 'CT shows soft tissue mass with peripheral calcification/ossification.',
    morphology: 'Biopsy shows zonal pattern: peripheral mature bone, middle zone with osteoid, central zone with active fibroblastic proliferation and scattered mitoses. Some central atypia.',
    ihc: 'Not required.',
    molecular: 'Not required.',
    diagnosis: 'Myositis Ossificans',
    rationale: 'Zonation pattern is key: mature bone at periphery, immature center. Clinical history of recent trauma. Peripheral calcification on imaging. Despite central atypia, organized pattern confirms reactive process, not sarcoma.'
  },
  {
    id: 'case_6',
    title: 'Case 6: Biphasic Spindle Cell Tumor',
    clinical: '30-year-old with deep-seated mass near knee.',
    imaging: 'MRI shows heterogeneous soft tissue mass.',
    morphology: 'Biphasic pattern with densely cellular spindle cell areas and epithelioid nests. Fascicular architecture. Focal calcification.',
    ihc: 'TLE1 positive, EMA positive, Keratin focally positive, BCL2 positive.',
    molecular: 'SS18-SSX1 fusion detected.',
    diagnosis: 'Biphasic Synovial Sarcoma',
    rationale: 'Biphasic pattern (spindle and epithelial) + TLE1/EMA positivity + SS18-SSX fusion = synovial sarcoma. Classic presentation in young adult near large joint.'
  }
]

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null)
  const [showDiagnosis, setShowDiagnosis] = useState(false)

  const currentCase = cases.find(c => c.id === selectedCase)

  return (
    <ModuleLayout
      title="Integrated Case Synthesis"
      description="Practice integrating morphology, IHC, molecular, and radiology"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Integrated Diagnostic Reasoning</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            These synthetic cases demonstrate the integrated approach to BST diagnosis:
            Clinical → Imaging → Morphology → Matrix → IHC → Molecular → Diagnosis.
            Practice synthesizing all available data to reach a final diagnosis.
          </p>
        </CardContent>
      </Card>

      {!selectedCase ? (
        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((case_) => (
            <Card
              key={case_.id}
              className="cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all"
              onClick={() => {
                setSelectedCase(case_.id)
                setShowDiagnosis(false)
              }}
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {case_.title}
                  <ChevronRight className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {case_.clinical}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : currentCase ? (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCase(null)
              setShowDiagnosis(false)
            }}
          >
            ← Back to Cases
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>{currentCase.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Clinical Presentation
                </h4>
                <p className="text-sm text-muted-foreground ml-8">{currentCase.clinical}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Imaging Findings
                </h4>
                <p className="text-sm text-muted-foreground ml-8">{currentCase.imaging}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Morphology
                </h4>
                <p className="text-sm text-muted-foreground ml-8">{currentCase.morphology}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Immunohistochemistry
                </h4>
                <p className="text-sm text-muted-foreground ml-8">{currentCase.ihc}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">5</span>
                  Molecular Studies
                </h4>
                <p className="text-sm text-muted-foreground ml-8">{currentCase.molecular}</p>
              </div>

              <div className="pt-4">
                {!showDiagnosis ? (
                  <Button onClick={() => setShowDiagnosis(true)}>
                    Show Diagnosis & Rationale
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary">
                      <h4 className="font-semibold mb-2">Diagnosis</h4>
                      <p className="text-lg font-semibold text-primary">{currentCase.diagnosis}</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Diagnostic Rationale</h4>
                      <p className="text-sm text-muted-foreground">{currentCase.rationale}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            All cases are synthetic and educational only. Practice the integrated workflow:
            never rely on morphology alone. Layer in clinical context, imaging patterns,
            IHC, and molecular findings to reach a comprehensive diagnosis.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
