import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Triage() {
  return (
    <ModuleLayout
      title="Core Biopsy & Resection Principles"
      description="Tissue triage, sampling strategies, and margin assessment"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Specimen Triage Philosophy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Bone and soft tissue specimens require careful assessment to maximize diagnostic
              yield while preserving tissue for ancillary studies. Fresh tissue handling and
              proper triage are critical for accurate diagnosis.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Core Biopsy Handling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Initial Assessment</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Measure and describe cores</li>
              <li>Assess for bone, cartilage, or soft tissue</li>
              <li>Note areas of necrosis, hemorrhage, or firm tumor</li>
              <li>Touch preps can be helpful for cellularity assessment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tissue Allocation</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Formalin for routine H&E (majority of tissue)</li>
              <li>Fresh/frozen tissue for molecular studies (if available and indicated)</li>
              <li>Consider touch preps or cytology if very limited tissue</li>
              <li>Avoid crushing artifact during handling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Decalcification</h4>
            <p className="text-sm text-muted-foreground">
              If bone is present, use appropriate decalcification (avoid harsh agents that
              may affect molecular studies). EDTA is gentler but slower.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sampling Strategy for Resection Specimens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Gross Examination Priorities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Measure and weigh specimen</li>
              <li>Orient specimen (surgical margins)</li>
              <li>Serially section (bread-loaf technique)</li>
              <li>Identify tumor, necrosis, hemorrhage, cystic change</li>
              <li>Assess relationship to surrounding structures (bone, muscle, vessels, nerves)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sampling Areas of Interest</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Viable tumor (avoid pure necrosis or hemorrhage)</li>
              <li>Interface with surrounding tissue (infiltration assessment)</li>
              <li>Areas with different gross appearance (heterogeneity)</li>
              <li>Any matrix-producing areas (bone, cartilage)</li>
              <li>Margins (inked and sampled)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Recognize Tumor Heterogeneity</h4>
            <p className="text-sm text-muted-foreground">
              Many bone and soft tissue tumors show heterogeneity (e.g., dedifferentiated
              liposarcoma with abrupt transition, osteosarcoma with variable matrix). Sample
              multiple areas to capture full spectrum.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Margin Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Types of Margins</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>R0 (Negative margin):</strong> No tumor at inked margin</li>
              <li><strong>R1 (Positive microscopic margin):</strong> Tumor at inked margin
              microscopically</li>
              <li><strong>R2 (Positive gross margin):</strong> Gross residual tumor</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Margin Assessment Strategy</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Ink all margins (use multiple colors if possible for orientation)</li>
              <li>Perpendicular sections for true margin evaluation</li>
              <li>Document distance from tumor to margin (especially if close)</li>
              <li>Assess all margins: radial, deep, superficial, proximal, distal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Significance</h4>
            <p className="text-sm text-muted-foreground">
              Positive margins increase local recurrence risk. Some tumors (e.g., desmoid
              fibromatosis) may recur even with negative margins. Margin status guides
              adjuvant therapy and re-resection decisions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Avoiding Crush Artifact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Problem</h4>
            <p className="text-sm text-muted-foreground">
              Core biopsies and small specimens can show significant crush artifact, making
              interpretation difficult. Crushed cells may appear hyperchromatic and atypical,
              mimicking malignancy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mitigation</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Handle tissue gently</li>
              <li>Use sharp instruments to section cores</li>
              <li>Evaluate deeper levels or less crushed areas</li>
              <li>Consider touch preps (cytologic preparation avoids crush)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>When to Consider Molecular Studies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Indications</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Morphology and IHC inconclusive</li>
              <li>Suspicion for specific entity with known fusion (e.g., synovial sarcoma,
              Ewing, myxoid liposarcoma)</li>
              <li>Distinguish between benign and malignant (e.g., MDM2 for ALT vs lipoma)</li>
              <li>Small round blue cell tumors (EWSR1, PAX-FOXO1, etc.)</li>
              <li>Prognostic stratification (e.g., alveolar RMS fusion status)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sample Requirements</h4>
            <p className="text-sm text-muted-foreground">
              FISH: works on FFPE. PCR/NGS: fresh or frozen tissue preferred but FFPE often
              adequate. Plan ahead if feasible (save fresh tissue at time of grossing).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bone Tumor Sampling Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Matrix-Rich Areas</h4>
            <p className="text-sm text-muted-foreground">
              Sample areas with osteoid or chondroid matrix. Matrix type is critical for
              diagnosis (osteosarcoma vs chondrosarcoma vs fibrosarcoma).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Biopsy Tract</h4>
            <p className="text-sm text-muted-foreground">
              In resections post-neoadjuvant therapy, sample the biopsy tract (may contain
              residual tumor). Assess percent necrosis for grading response to therapy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Decalcification Impact</h4>
            <p className="text-sm text-muted-foreground">
              Strong acid decalcification can damage DNA/RNA. For suspected cases needing
              molecular studies, use EDTA or save separate non-decalcified tissue if possible.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Proper triage and sampling maximize diagnostic accuracy. Sample viable tumor,
            recognize heterogeneity, assess margins carefully, and preserve tissue for
            ancillary studies when needed.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
