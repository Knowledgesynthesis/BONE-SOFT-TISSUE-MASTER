import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlertTriangle } from 'lucide-react'

export default function Pitfalls() {
  return (
    <ModuleLayout
      title="Pitfalls & Dangerous Mimics"
      description="Common diagnostic traps and how to avoid them"
    >
      <Card className="bg-destructive/10 border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <CardTitle>Approach to Avoiding Pitfalls</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Golden Rules</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Always correlate with clinical history and imaging</li>
              <li>Recognize organized patterns in reactive lesions (e.g., zonation)</li>
              <li>Be cautious with limited tissue (small biopsies, crush artifact)</li>
              <li>Use IHC and molecular studies when morphology is ambiguous</li>
              <li>When in doubt, seek consultation</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Myositis Ossificans vs Osteosarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Central areas of myositis ossificans can show alarming cytologic atypia and
              mitoses, mimicking osteosarcoma. Small biopsies from the center can lead to
              misdiagnosis.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Recognize the <strong>zonation pattern</strong>: mature bone at periphery,
              immature center</li>
              <li>Check imaging: peripheral calcification/ossification favors myositis ossificans</li>
              <li>Clinical history: recent trauma, rapid growth over weeks</li>
              <li>Osteosarcoma: infiltrative, disorganized osteoid, permeative growth</li>
              <li>Avoid biopsy of only the central immature zone</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Nodular Fasciitis vs Sarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Nodular fasciitis is a reactive myofibroblastic proliferation that shows brisk
              mitotic activity and rapid growth, raising concern for sarcoma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Classic "tissue culture" appearance with myxoid stroma</li>
              <li>Extravasated RBCs, feathery microcystic change</li>
              <li>Mitoses present but no atypical forms</li>
              <li>Clinical: rapid growth over weeks, small size (typically &lt;3 cm)</li>
              <li>Self-limited, does not recur</li>
              <li>USP6 rearrangement can be confirmatory</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>MDM2 Pitfalls in Lipomatous Tumors</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Over-reliance on MDM2 IHC alone (without FISH) can lead to false positives.
              Weak or focal MDM2 staining can occur in lipomas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>MDM2 <strong>amplification by FISH</strong> is the gold standard (not just IHC)</li>
              <li>IHC can be helpful but should be strong and diffuse to suggest amplification</li>
              <li>Histology matters: look for atypical stromal cells, lipoblasts, variation
              in adipocyte size</li>
              <li>Clinical context: retroperitoneal location raises concern for WDL</li>
              <li>Confirm with FISH if diagnosis impacts management</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Enchondroma vs Low-Grade Chondrosarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Histologic overlap makes this distinction very difficult, especially in small
              biopsies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Integration with imaging is essential</li>
              <li>Enchondroma: small bones of hands/feet, incidental, small size</li>
              <li>Low-grade chondrosarcoma: axial skeleton or proximal long bones, larger,
              bone destruction, soft tissue mass</li>
              <li>Histology: permeation of existing bone trabeculae favors chondrosarcoma</li>
              <li>Increased cellularity, binucleate cells, myxoid change favor chondrosarcoma</li>
              <li>When in doubt, clinical-radiologic-pathologic conference</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Reactive Cartilage Mimicking Malignancy</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Reactive cartilage in fracture callus or myositis ossificans can appear
              hypercellular and atypical.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Clinical history: trauma, recent surgery</li>
              <li>Organized pattern with zonation (myositis ossificans)</li>
              <li>Lack of true permeation of bone</li>
              <li>Associated fracture healing features</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Small Biopsy Over-Interpretation</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Limited tissue sampling can miss heterogeneity, show only crushed artifact,
              or sample non-diagnostic areas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Recognize limitations: qualify diagnosis ("...at least..." or "...compatible with...")</li>
              <li>Avoid definitive high-grade sarcoma diagnosis on crush artifact alone</li>
              <li>Consider repeat biopsy if inadequate</li>
              <li>Use ancillary studies (IHC, molecular) to maximize information</li>
              <li>Correlate with imaging to ensure biopsy sampled the target lesion</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Misreading Myxoid Stroma Patterns</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Many entities (benign and malignant) can have myxoid stroma. Assuming all
              myxoid lesions are benign (or all are malignant) is dangerous.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Assess vasculature: chicken-wire (myxoid lipo), curvilinear (myxofibrosarcoma)</li>
              <li>Look for lipoblasts (myxoid liposarcoma)</li>
              <li>Evaluate cellularity and atypia</li>
              <li>Benign: intramuscular myxoma (very hypocellular), nodular fasciitis
              (tissue culture, self-limited)</li>
              <li>Use molecular studies: DDIT3 (myxoid lipo), FUS (low-grade fibromyxoid sarcoma)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Radiation-Induced Atypia vs Sarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Post-radiation changes can show bizarre atypical fibroblasts that mimic sarcoma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Clinical history: prior radiation field</li>
              <li>Radiation atypia: enlarged hyperchromatic nuclei but <strong>no mitoses</strong></li>
              <li>Vascular changes (intimal fibrosis, hyalinization)</li>
              <li>Radiation-induced sarcoma: high-grade, mitotically active, infiltrative</li>
              <li>Timing: radiation sarcoma typically years after radiation (latency period)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Ancient Schwannoma vs Sarcoma</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">The Pitfall</h4>
            <p className="text-sm text-muted-foreground">
              Ancient schwannoma shows degenerative atypia, nuclear hyperchromasia, and
              can appear worrisome.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">How to Avoid</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Look for classic schwannoma features: Verocay bodies, Antoni A/B,
              thick-walled vessels</li>
              <li>Degenerative atypia is smudgy, not mitotically active</li>
              <li>S100 strongly and diffusely positive</li>
              <li>Encapsulation</li>
              <li>Lack of infiltrative growth or true pleomorphism with mitoses</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Pitfalls are common in BST pathology. Always integrate clinical, radiologic,
            and pathologic findings. Recognize organized patterns in reactive lesions.
            When morphology is ambiguous, use ancillary studies and consultation.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
