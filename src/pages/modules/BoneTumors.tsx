import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function BoneTumors() {
  return (
    <ModuleLayout
      title="Bone-Forming Tumors"
      description="Osteoid-producing neoplasms from benign to malignant"
    >
      <Card>
        <CardHeader>
          <CardTitle>Osteoid Matrix Recognition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <p className="text-sm text-muted-foreground">
              Pink/eosinophilic unmineralized bone matrix. May appear lace-like, trabecular,
              or cloud-like. Direct production by tumor cells (not just trapped reactive bone).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Radiologic Correlation</h4>
            <p className="text-sm text-muted-foreground">
              Dense, cloud-like sclerotic appearance on imaging. May show periosteal reaction
              in aggressive lesions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Osteoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Dense mature compact bone. Typically arises in skull/facial bones. Very slow
              growing. Essentially normal bone architecture.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Benign, non-aggressive. May be associated with Gardner syndrome if multiple.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Osteoid Osteoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Characteristic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Small central nidus (usually &lt;2 cm)</li>
              <li>Interconnecting trabecular osteoid</li>
              <li>Vascular fibrous stroma with osteoblasts</li>
              <li>Surrounding sclerotic reactive bone</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Classically causes night pain relieved by aspirin. Most common in long bones,
              especially femur. Young patients (2nd-3rd decade).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Osteoblastoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Similar histology to osteoid osteoma but larger (typically &gt;2 cm). More
              architectural variability. May show epithelioid osteoblasts or "aggressive"
              features but still benign behavior in most cases.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-sm text-muted-foreground">
              Posterior elements of spine and sacrum are common. Can occur in any bone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Variants</h4>
            <p className="text-sm text-muted-foreground">
              Aggressive osteoblastoma: epithelioid cells, lacy osteoid, may have local
              recurrence but rare metastasis.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Osteosarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Diagnostic Criteria</h4>
            <p className="text-sm text-muted-foreground">
              Malignant mesenchymal tumor producing osteoid. Requires direct osteoid production
              by malignant cells (not just reactive bone).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Conventional (High-Grade) Osteosarcoma</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Highly atypical cells with hyperchromatic nuclei</li>
              <li>Abundant mitoses including atypical forms</li>
              <li>Osteoid production (lace-like or coarse)</li>
              <li>May have chondroblastic or fibroblastic areas</li>
              <li>Infiltrative growth, permeative pattern</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subtypes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Osteoblastic: abundant osteoid matrix</li>
              <li>Chondroblastic: malignant cartilage component</li>
              <li>Fibroblastic: spindle cell areas with less matrix</li>
              <li>Telangiectatic: cystic blood-filled spaces, minimal matrix</li>
              <li>Small cell: resembles Ewing but produces osteoid</li>
              <li>Low-grade central: well-differentiated, resembles fibrous dysplasia</li>
              <li>Parosteal: surface low-grade lesion</li>
              <li>Periosteal: surface intermediate-grade lesion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              Most are complex karyotypes. Specific subtypes: MDM2/CDK4 amplification in
              parosteal and low-grade central osteosarcoma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Peak incidence in adolescents (2nd decade). Metaphysis of long bones
              (distal femur, proximal tibia). Aggressive with metastatic potential
              (lung is most common site).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Start with matrix: Is osteoid present? Then assess cytologic atypia and
            infiltrative growth to distinguish benign from malignant bone-forming tumors.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
