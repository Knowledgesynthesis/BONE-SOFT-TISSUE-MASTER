import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function MuscleNerve() {
  return (
    <ModuleLayout
      title="Muscle & Nerve Sheath Tumors"
      description="Smooth muscle, skeletal muscle, and nerve sheath neoplasms"
    >
      <Card>
        <CardHeader>
          <CardTitle>Smooth Muscle Tumors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Leiomyoma</h4>
            <p className="text-sm text-muted-foreground">
              Benign smooth muscle tumor. Intersecting fascicles of spindle cells with
              eosinophilic cytoplasm and blunt-ended ("cigar-shaped") nuclei. Minimal
              atypia, rare mitoses. SMA and desmin positive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Leiomyosarcoma</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Fascicles of atypical spindle cells</li>
              <li>Moderate to marked nuclear atypia</li>
              <li>Mitotic activity (criteria vary by site)</li>
              <li>Eosinophilic cytoplasm</li>
              <li>SMA and desmin positive (desmin often patchy)</li>
              <li>h-Caldesmon positive (specific smooth muscle marker)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Grading Challenge</h4>
            <p className="text-sm text-muted-foreground">
              Distinguishing leiomyoma from leiomyosarcoma requires assessing atypia,
              mitotic count, and necrosis. Criteria differ by anatomic site (uterus vs
              soft tissue vs cutaneous).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Rhabdomyosarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Embryonal Rhabdomyosarcoma</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Small round to spindle primitive cells</li>
              <li>Variable rhabdomyoblastic differentiation (strap cells, tadpole cells)</li>
              <li>Myxoid or cellular stroma</li>
              <li>Cambium layer in botryoid variant (submucosal condensation)</li>
              <li>Desmin, MyoD1, and myogenin positive</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Alveolar Rhabdomyosarcoma</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Discohesive cells forming alveolar-like spaces</li>
              <li>Uniform round cells with eccentric nuclei</li>
              <li>Fibrovascular septa</li>
              <li>PAX3-FOXO1 or PAX7-FOXO1 fusion</li>
              <li>Worse prognosis than embryonal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pleomorphic Rhabdomyosarcoma</h4>
            <p className="text-sm text-muted-foreground">
              Rare. Adults. Highly pleomorphic cells with rhabomyoblastic differentiation.
              Desmin/MyoD1/myogenin positive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Most common soft tissue sarcoma in children. Head/neck, genitourinary tract,
              extremities.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Schwannoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Antoni A areas: compact spindle cells with palisading (Verocay bodies)</li>
              <li>Antoni B areas: loose, hypocellular, myxoid</li>
              <li>Thick-walled hyalinized vessels</li>
              <li>Encapsulated</li>
              <li>S100 strongly and diffusely positive</li>
              <li>No neurofilament staining (distinguishes from neurofibroma)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Variants</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Cellular schwannoma: hypercellular Antoni A, may lack Verocay bodies</li>
              <li>Melanotic schwannoma: pigmented, associated with Carney complex</li>
              <li>Ancient schwannoma: degenerative atypia, cystic change, calcification</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Benign. Can occur sporadically or in NF2. Vestibular schwannoma (acoustic neuroma)
              is classic. Malignant transformation is exceedingly rare.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Neurofibroma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Wavy spindle cells in loose collagenous or myxoid stroma</li>
              <li>Shredded carrot-like collagen bundles</li>
              <li>Admixed mast cells</li>
              <li>S100 positive (but often patchy, less intense than schwannoma)</li>
              <li>Neurofilament highlights entrapped axons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Types</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Localized (cutaneous): solitary, sporadic or NF1</li>
              <li>Diffuse: plexiform growth, often NF1-associated</li>
              <li>Plexiform neurofibroma: pathognomonic for NF1, involves nerve plexus</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Benign. Plexiform neurofibromas in NF1 have risk of transformation to MPNST.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Malignant Peripheral Nerve Sheath Tumor (MPNST)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Fascicles of atypical spindle cells</li>
              <li>Alternating cellularity ("marbling" pattern)</li>
              <li>Perivascular accentuation</li>
              <li>High mitotic rate, necrosis</li>
              <li>S100 often weak or focal (compared to schwannoma)</li>
              <li>Loss of H3K27me3 (trimethylation) in many cases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              ~50% arise in NF1 patients (often from plexiform neurofibroma). Can arise
              post-radiation or de novo. Aggressive with poor prognosis.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Variants</h4>
            <p className="text-sm text-muted-foreground">
              Epithelioid MPNST, Triton tumor (with rhabdomyoblastic differentiation).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Desmin/MyoD1/myogenin confirm skeletal muscle differentiation. S100 is key for
            nerve sheath tumors. Fascicular spindle patterns with SMA/desmin suggest smooth
            muscle.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
