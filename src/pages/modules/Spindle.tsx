import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Spindle() {
  return (
    <ModuleLayout
      title="Spindle Cell Tumor Patterns"
      description="Pattern-based approach to spindle cell lesions"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Approach to Spindle Cell Tumors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Pattern Recognition Strategy</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Identify the architectural pattern</li>
              <li>Assess cytologic features (bland vs atypical)</li>
              <li>Look for matrix production</li>
              <li>Evaluate growth pattern (circumscribed vs infiltrative)</li>
              <li>Apply IHC panel based on differential</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fascicular Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Long, parallel bundles of spindle cells. Cells oriented in same direction
              within fascicles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Smooth muscle tumors (leiomyoma, leiomyosarcoma)</li>
              <li>Nerve sheath tumors (schwannoma Antoni A)</li>
              <li>Fibromatosis (desmoid)</li>
              <li>Low-grade fibromyxoid sarcoma</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Next Steps</h4>
            <p className="text-sm text-muted-foreground">
              Check for smooth muscle (SMA, desmin, h-caldesmon) or nerve sheath (S100)
              differentiation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storiform Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Pinwheel or cartwheel arrangement. Cells radiate from central points creating
              a matted appearance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Dermatofibrosarcoma protuberans (DFSP)</li>
              <li>Solitary fibrous tumor</li>
              <li>Undifferentiated pleomorphic sarcoma (formerly MFH)</li>
              <li>Non-ossifying fibroma</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key IHC</h4>
            <p className="text-sm text-muted-foreground">
              DFSP: CD34+, PDGFB rearrangement (COL1A1-PDGFB). Solitary fibrous tumor:
              STAT6 nuclear expression (NAB2-STAT6 fusion).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Herringbone Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Alternating fascicles creating a zigzag or V-shaped pattern. Cells change
              direction abruptly.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Fibrosarcoma (classic pattern but rare as pure entity)</li>
              <li>Malignant peripheral nerve sheath tumor (MPNST) - focal</li>
              <li>Synovial sarcoma (monophasic) - can show this</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Note</h4>
            <p className="text-sm text-muted-foreground">
              True fibrosarcoma is diagnosis of exclusion. Rule out other entities with
              IHC and molecular studies.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Myxoid Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Abundant pale basophilic myxoid stroma with low cellularity and delicate
              vasculature.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Myxoid liposarcoma (chicken-wire vessels, lipoblasts, DDIT3 fusion)</li>
              <li>Low-grade fibromyxoid sarcoma (whorled growth, MUC4+, FUS rearrangement)</li>
              <li>Myxofibrosarcoma (pleomorphic nuclei, curvilinear vessels)</li>
              <li>Nodular fasciitis (tissue-culture appearance, self-limited)</li>
              <li>Intramuscular myxoma (bland, hypocellular)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Many benign and malignant lesions can have myxoid stroma. Careful assessment
              of vasculature, cellularity, and atypia is essential.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fibrohistiocytic Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Combination of spindle cells and histiocyte-like cells. Storiform areas may
              be present.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Undifferentiated pleomorphic sarcoma (formerly malignant fibrous histiocytoma)</li>
              <li>Non-ossifying fibroma (benign)</li>
              <li>Plexiform fibrohistiocytic tumor</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Biphasic Pattern</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Two distinct cell populations or architectural components.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Synovial sarcoma (epithelial and spindle, SS18-SSX fusion)</li>
              <li>Carcinosarcoma (malignant epithelial + mesenchymal)</li>
              <li>Biphasic leiomyosarcoma (epithelioid + spindle)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key IHC for Synovial Sarcoma</h4>
            <p className="text-sm text-muted-foreground">
              TLE1, EMA, keratin (focal), BCL2. SS18 (SYT) rearrangement by FISH or
              SS18-SSX fusion by RT-PCR/NGS.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inflammatory Background</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">
              Spindle cells with prominent inflammatory infiltrate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Associated Entities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Inflammatory myofibroblastic tumor (ALK+ in ~50%)</li>
              <li>Nodular fasciitis</li>
              <li>Inflammatory fibrosarcoma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Pattern recognition provides the framework. Then layer in cytologic atypia,
            matrix, and IHC to refine the differential and reach a diagnosis.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
