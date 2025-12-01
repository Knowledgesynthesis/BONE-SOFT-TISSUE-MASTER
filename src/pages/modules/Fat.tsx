import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertCircle } from 'lucide-react'

export default function Fat() {
  return (
    <ModuleLayout
      title="Adipocytic Tumors"
      description="Benign and malignant fat-forming neoplasms"
    >
      <Card>
        <CardHeader>
          <CardTitle>Lipoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <p className="text-sm text-muted-foreground">
              Mature adipocytes of uniform size. No lipoblasts. No significant atypia.
              Minimal or no fibrous septa. Well-circumscribed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Variants</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Angiolipoma: numerous small vessels, may be painful</li>
              <li>Spindle cell/pleomorphic lipoma: CD34+ spindle cells, "rope-like" collagen</li>
              <li>Hibernoma: brown fat tumor, multivacuolated cells</li>
              <li>Lipoblastoma: pediatric, immature fat with myxoid stroma, PLAG1 rearrangement</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <CardTitle>Atypical Lipomatous Tumor / Well-Differentiated Liposarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Terminology Note</h4>
            <p className="text-sm text-muted-foreground">
              "Atypical lipomatous tumor" (ALT) is used for extremity/superficial trunk
              lesions due to excellent prognosis with complete excision. "Well-differentiated
              liposarcoma" (WDL) is used for retroperitoneal/deep-seated lesions where
              complete excision is difficult.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Variation in adipocyte size</li>
              <li>Atypical stromal cells (hyperchromatic nuclei)</li>
              <li>Lipoblasts may be present</li>
              <li>Fibrous septa with atypical cells</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subtypes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Adipocytic (lipoma-like): predominant mature fat with scattered atypia</li>
              <li>Sclerosing: prominent fibrosis</li>
              <li>Inflammatory: lymphoplasmacytic infiltrate</li>
              <li>Spindle cell: atypical spindle cells (may progress to dedifferentiation)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              MDM2 and CDK4 amplification (hallmark feature). MDM2 IHC and FISH are diagnostic.
              Supernumerary ring and giant marker chromosomes.
            </p>
          </div>
          <div className="bg-amber-500/10 p-3 rounded-md">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Pitfall Alert: Variation in adipocyte size alone is not enough for diagnosis.
              Must have atypical stromal cells. MDM2 amplification confirms diagnosis and
              distinguishes from lipoma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Dedifferentiated Liposarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Concept</h4>
            <p className="text-sm text-muted-foreground">
              High-grade non-lipogenic sarcoma arising in association with well-differentiated
              liposarcoma. Typically abrupt transition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Histology</h4>
            <p className="text-sm text-muted-foreground">
              Juxtaposition of well-differentiated liposarcoma and high-grade spindle cell or
              pleomorphic sarcoma. Dedifferentiated component may show heterologous
              differentiation (bone, cartilage, muscle).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              Retains MDM2/CDK4 amplification in both components.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Myxoid Liposarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Abundant myxoid stroma</li>
              <li>Characteristic "chicken-wire" or arborizing capillary network</li>
              <li>Uniform small round to oval cells</li>
              <li>Lipoblasts at varying stages of differentiation</li>
              <li>Round cell component indicates higher grade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              FUS-DDIT3 or EWSR1-DDIT3 fusion (majority are FUS-DDIT3). Translocation
              t(12;16) or t(12;22).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Deep soft tissues of extremities (thigh). May have extrapulmonary metastases
              (bone, soft tissue) in addition to lung.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Pleomorphic Liposarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              High-grade pleomorphic sarcoma with pleomorphic lipoblasts. Marked nuclear
              atypia, high mitotic rate. Diagnosis requires identification of lipoblasts
              (multivacuolated cells with scalloped hyperchromatic nuclei).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Aggressive behavior with high metastatic potential. Older adults.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            MDM2 amplification conceptually supports ALT/WDL. Chicken-wire vasculature
            suggests myxoid liposarcoma with DDIT3 fusion. Lipoblasts are key for diagnosing
            liposarcoma.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
