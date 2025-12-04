import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Fibrous() {
  return (
    <ModuleLayout
      title="Fibrous & Fibro-Osseous Tumors"
      description="Fibroblastic and myofibroblastic neoplasms"
    >
      <Card>
        <CardHeader>
          <CardTitle>Fibroma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Non-Ossifying Fibroma / Fibrous Cortical Defect</h4>
            <p className="text-sm text-muted-foreground">
              Common benign fibrous lesion. Storiform pattern with spindle cells, hemosiderin,
              and foam cells. Metaphyseal location in long bones. Often incidental finding
              in children/adolescents.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Desmoplastic Fibroma</h4>
            <p className="text-sm text-muted-foreground">
              Rare intraosseous counterpart of soft tissue fibromatosis. Bland fibroblasts
              in collagenous stroma. Locally aggressive but no metastatic potential.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Desmoid-Type Fibromatosis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Long sweeping fascicles of bland spindle cells</li>
              <li>Collagenous stroma</li>
              <li>Infiltrative margins</li>
              <li>Minimal cellularity and mitotic activity</li>
              <li>May entrap muscle or adipose tissue</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              CTNNB1 (beta-catenin) mutations or APC gene alterations. Nuclear beta-catenin
              by IHC.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Behavior</h4>
            <p className="text-sm text-muted-foreground">
              Locally aggressive with high recurrence rate. Does not metastasize. Can occur
              sporadically or in FAP (familial adenomatous polyposis).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fibrosarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Adult Fibrosarcoma</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Herringbone pattern (classic but not always present)</li>
              <li>Fascicles of atypical spindle cells</li>
              <li>Variable cellularity and mitotic activity</li>
              <li>Collagenous matrix</li>
              <li>Diagnosis of exclusion (must rule out other spindle cell sarcomas)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Note</h4>
            <p className="text-sm text-muted-foreground">
              "Pure" fibrosarcoma is rare. Many lesions previously called fibrosarcoma are
              now reclassified with modern IHC and molecular techniques.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fibrous Dysplasia (Recap)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Fibro-Osseous Lesion</h4>
            <p className="text-sm text-muted-foreground">
              Irregular "Chinese-letter" trabeculae of woven bone in fibrous stroma.
              Developmental/genetic rather than neoplastic. GNAS mutation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ossifying Fibroma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Benign fibro-osseous lesion. Fibrous stroma with woven bone and/or cementum-like
              material. Well-circumscribed. Typically in jaw bones (mandible/maxilla).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Distinction from Fibrous Dysplasia</h4>
            <p className="text-sm text-muted-foreground">
              Ossifying fibroma is more circumscribed and may shell out surgically. Fibrous
              dysplasia blends with surrounding bone.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Myofibroblastic Tumors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Inflammatory Myofibroblastic Tumor (IMT)</h4>
            <p className="text-sm text-muted-foreground">
              Myofibroblastic spindle cells with inflammatory infiltrate (lymphocytes,
              plasma cells, eosinophils). ALK rearrangements in ~50%. Intermediate biologic
              potential (rare metastasis).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Myofibroma / Myofibromatosis</h4>
            <p className="text-sm text-muted-foreground">
              Biphasic pattern: peripheral myoid zones and central primitive zones with
              hemangiopericytoma-like vasculature. Benign. Seen in infants/children.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Fibrous tumors range from bland fibromatosis to high-grade sarcoma. Pattern
            (herringbone, storiform) and cytologic features guide classification.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
