import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertCircle } from 'lucide-react'

export default function Cartilage() {
  return (
    <ModuleLayout
      title="Cartilage-Forming Tumors"
      description="Chondroid matrix-producing neoplasms"
    >
      <Card>
        <CardHeader>
          <CardTitle>Chondroid Matrix Recognition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <p className="text-sm text-muted-foreground">
              Basophilic or amphophilic hyaline matrix. Lobulated architecture. Chondrocytes
              within lacunae. May be hyaline, myxoid, or calcified.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Radiologic Correlation</h4>
            <p className="text-sm text-muted-foreground">
              Ring-and-arc or stippled calcifications. Lobulated appearance.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enchondroma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Lobules of hyaline cartilage</li>
              <li>Small bland chondrocytes</li>
              <li>No permeation of bone trabeculae</li>
              <li>Minimal cellularity</li>
              <li>Uniform nuclei</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Common benign tumor. Small bones of hands/feet or metaphyses of long bones.
              Usually asymptomatic, incidental finding. Multiple enchondromas: Ollier disease
              or Maffucci syndrome.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Osteochondroma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Concept</h4>
            <p className="text-sm text-muted-foreground">
              Cartilage-capped bony projection continuous with underlying bone marrow.
              More of a developmental lesion than true neoplasm.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Histology</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Cartilage cap (should be thin in adults, &lt;1 cm)</li>
              <li>Orderly endochondral ossification</li>
              <li>Continuity with host bone</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Note</h4>
            <p className="text-sm text-muted-foreground">
              Malignant transformation to secondary chondrosarcoma is rare but can occur,
              especially if cartilage cap thickens in adulthood.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <CardTitle>Chondrosarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Grading Challenge</h4>
            <p className="text-sm text-muted-foreground">
              Distinguishing low-grade chondrosarcoma from enchondroma can be difficult
              and often relies on radiologic correlation (size, location, bone destruction).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Grade 1 (Low-Grade)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Increased cellularity compared to enchondroma</li>
              <li>Mild nuclear atypia</li>
              <li>Permeation of bone trabeculae</li>
              <li>Myxoid change common</li>
              <li>Rare binucleate cells</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Grade 2 (Intermediate)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Moderate cellularity and atypia</li>
              <li>More nuclear pleomorphism</li>
              <li>Mitotic figures may be present</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Grade 3 (High-Grade)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>High cellularity</li>
              <li>Marked pleomorphism</li>
              <li>Mitotic activity</li>
              <li>May have dedifferentiated areas (high-grade spindle cell sarcoma adjacent
              to low-grade chondrosarcoma)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              Most are IDH1/IDH2 mutations. Dedifferentiated chondrosarcoma may show TP53
              alterations.
            </p>
          </div>
          <div className="bg-amber-500/10 p-3 rounded-md">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Pitfall Alert: Reactive cartilage (e.g., in callus) can appear cellular and
              atypical. Clinical and radiologic correlation is essential. Permeation of
              existing bone is a key feature of chondrosarcoma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Cartilaginous Lesions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Chondroblastoma</h4>
            <p className="text-sm text-muted-foreground">
              Epiphyseal location. Sheets of chondroblasts with well-defined cytoplasmic
              borders ("chicken-wire" calcification). S100+. May have secondary ABC.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Chondromyxoid Fibroma</h4>
            <p className="text-sm text-muted-foreground">
              Rare. Lobulated myxoid and chondroid areas with hypocellular centers and
              hypercellular periphery. Bland cytology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clear Cell Chondrosarcoma</h4>
            <p className="text-sm text-muted-foreground">
              Rare low-grade variant. Clear cells resembling chondroblastoma but
              epiphyseal location and older age group.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mesenchymal Chondrosarcoma</h4>
            <p className="text-sm text-muted-foreground">
              Biphasic: small round blue cells with islands of well-differentiated cartilage.
              Aggressive. HEY1-NCOA2 fusion.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Chondroid matrix narrows the differential dramatically. Grading cartilaginous
            tumors requires integration of histology, radiology, and clinical context.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
