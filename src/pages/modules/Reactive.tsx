import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertCircle } from 'lucide-react'

export default function Reactive() {
  return (
    <ModuleLayout
      title="Reactive & Non-Neoplastic Processes"
      description="Benign reactive conditions that can mimic neoplasia"
    >
      <Card>
        <CardHeader>
          <CardTitle>Fracture Healing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Stages of Fracture Repair</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Hematoma formation (immediate)</li>
              <li>Fibrovascular callus (days to weeks)</li>
              <li>Cartilaginous/bony callus (weeks to months)</li>
              <li>Remodeling (months to years)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <p className="text-sm text-muted-foreground">
              Granulation tissue, reactive woven bone formation, cartilage, and organizing
              hemorrhage. May show active osteoblasts but maintains organized maturation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-500/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <CardTitle>Myositis Ossificans</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Classic Zonal Pattern (Key Feature)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Central zone: immature fibroblastic proliferation, may appear atypical</li>
              <li>Middle zone: osteoid formation</li>
              <li>Peripheral zone: mature bone (zonation pattern)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Context</h4>
            <p className="text-sm text-muted-foreground">
              Typically occurs after trauma to muscle. Develops over weeks. Peripheral
              calcification/ossification is characteristic.
            </p>
          </div>
          <div className="bg-amber-500/10 p-3 rounded-md">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Pitfall Alert: Central atypia can mimic sarcoma, but organized zonation with
              peripheral maturation distinguishes myositis ossificans from osteosarcoma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nodular Fasciitis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Myofibroblastic proliferation in a loose myxoid stroma</li>
              <li>Tissue culture-like appearance</li>
              <li>Mitoses may be present but no atypical forms</li>
              <li>Extravasated red blood cells</li>
              <li>Feathery or microcystic change</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Behavior</h4>
            <p className="text-sm text-muted-foreground">
              Self-limited reactive process. Rapid growth over weeks. Typically small (1-3 cm).
              Does not recur after excision.
            </p>
          </div>
          <div className="bg-amber-500/10 p-3 rounded-md">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Pitfall Alert: Active proliferation can raise concern for sarcoma, but
              myxoid stroma, tissue culture pattern, and clinical context favor reactive.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fibrous Dysplasia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Characteristic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Irregular "Chinese-letter" or "alphabet soup" trabeculae</li>
              <li>Woven bone without osteoblastic rimming</li>
              <li>Fibrous stroma with bland spindle cells</li>
              <li>May have cystic change or cartilage</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              GNAS mutation. Not a neoplasm but a developmental anomaly.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Osteomyelitis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Acute Osteomyelitis</h4>
            <p className="text-sm text-muted-foreground">
              Neutrophilic infiltrate, bone necrosis, marrow edema. May see bacterial colonies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Chronic Osteomyelitis</h4>
            <p className="text-sm text-muted-foreground">
              Fibrosis, lymphoplasmacytic infiltrate, reactive bone formation. Sequestra
              (necrotic bone fragments) may be present.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Post-Radiation Changes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Findings</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Bizarre fibroblasts with enlarged hyperchromatic nuclei</li>
              <li>Vascular changes: intimal fibrosis, telangiectasias</li>
              <li>Atypical cells but no mitoses</li>
              <li>Hyalinized stroma</li>
            </ul>
          </div>
          <div className="bg-amber-500/10 p-3 rounded-md">
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
              Pitfall Alert: Radiation atypia can be striking, but lack of mitotic activity
              and clinical history distinguish it from radiation-induced sarcoma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Reactive processes often show alarming features. Clinical context, organized
            patterns (like zonation), and lack of infiltration help distinguish them from
            true malignancy.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
