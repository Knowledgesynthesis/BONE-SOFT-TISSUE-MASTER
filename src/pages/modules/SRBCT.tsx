import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function SRBCT() {
  return (
    <ModuleLayout
      title="Small Round Blue Cell Tumors"
      description="Differential diagnosis of small round cell neoplasms"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Approach to Small Round Blue Cell Tumors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Systematic Evaluation</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Age of patient (pediatric vs adult)</li>
              <li>Location (bone vs soft tissue)</li>
              <li>Morphology (monotonous vs pleomorphic, rosettes, nesting)</li>
              <li>IHC panel for lineage determination</li>
              <li>Molecular/cytogenetic studies</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key IHC Panel</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>CD99 (Ewing, CIC-rearranged, lymphoblastic lymphoma)</li>
              <li>Desmin, MyoD1, myogenin (rhabdomyosarcoma)</li>
              <li>NKX2.2, FLI1 (Ewing family)</li>
              <li>WT1, EMA (desmoplastic small round cell tumor)</li>
              <li>CD45, TdT (lymphoma, leukemia)</li>
              <li>Synaptophysin, chromogranin (neuroblastoma, neuroendocrine)</li>
              <li>INI1 (SMARCB1) loss (rhabdoid, epithelioid sarcoma)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Ewing Sarcoma Family</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Sheets of uniform small round blue cells</li>
              <li>Scant cytoplasm (may have clear cytoplasm due to glycogen)</li>
              <li>Finely dispersed chromatin</li>
              <li>Minimal pleomorphism</li>
              <li>Homer-Wright rosettes (rare)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">IHC</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>CD99 (MIC2): strong membranous staining (sensitive but not specific)</li>
              <li>NKX2.2: nuclear (more specific)</li>
              <li>FLI1: nuclear</li>
              <li>Keratin: may be focally positive</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              EWSR1 rearrangement in ~85%. Most common: EWSR1-FLI1 (85% of Ewing).
              Less common: EWSR1-ERG, FUS-ERG, and other partners. Translocation t(11;22).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Peak incidence in adolescents/young adults. Diaphyseal or flat bone location
              (pelvis, femur). Aggressive. Onion-skin periosteal reaction on imaging.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CIC-Rearranged Sarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Undifferentiated round cell sarcoma with CIC-DUX4 fusion. Morphologically
              overlaps with Ewing but tends to be more pleomorphic. CD99+ but EWSR1
              negative. Aggressive behavior.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Rhabdomyosarcoma (Recap)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Embryonal Subtype</h4>
            <p className="text-sm text-muted-foreground">
              Small round to spindle cells, variable rhabdomyoblastic differentiation.
              Desmin, MyoD1, myogenin positive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Alveolar Subtype</h4>
            <p className="text-sm text-muted-foreground">
              Discohesive small round cells with alveolar spaces. PAX3/PAX7-FOXO1 fusions.
              Myogenic markers positive.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lymphoblastic Lymphoma / Leukemia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Monotonous lymphoblasts with scant cytoplasm. Fine chromatin. May involve
              bone or soft tissue.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">IHC</h4>
            <p className="text-sm text-muted-foreground">
              CD45 (leukocyte common antigen), TdT, CD99, CD3 (T-cell) or CD10/CD19
              (B-cell). Flow cytometry helpful.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Desmoplastic Small Round Cell Tumor (DSRCT)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Nests of small round blue cells</li>
              <li>Prominent desmoplastic stroma</li>
              <li>Sharply defined nests separated by fibrous tissue</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">IHC</h4>
            <p className="text-sm text-muted-foreground">
              Polyphenotypic: Desmin (dot-like paranuclear), Keratin, EMA, WT1 (C-terminal)
              positive. This combination is distinctive.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              EWSR1-WT1 fusion. Translocation t(11;22).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Young males. Abdominal/pelvic mass (peritoneum). Aggressive with poor prognosis.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mesenchymal Chondrosarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Biphasic Pattern</h4>
            <p className="text-sm text-muted-foreground">
              Small round blue cells with islands of well-differentiated hyaline cartilage.
              HEY1-NCOA2 fusion. Can occur in bone or soft tissue.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Neuroblastoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              Small round blue cells with Homer-Wright rosettes, neuropil, ganglion cell
              differentiation (in ganglioneuroblastoma). Synaptophysin, chromogranin, CD56
              positive. PHOX2B nuclear staining.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Young children. Adrenal gland or paraspinal/retroperitoneal. Can metastasize
              to bone, mimicking primary bone tumor.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Small Cell Osteosarcoma</h4>
            <p className="text-sm text-muted-foreground">
              Small round cells BUT produces osteoid matrix. Must distinguish from Ewing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Poorly Differentiated Synovial Sarcoma</h4>
            <p className="text-sm text-muted-foreground">
              Can have small round cell areas. TLE1, keratin, EMA may be positive. SS18-SSX
              fusion.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Small round blue cells require comprehensive IHC panel and molecular studies.
            CD99 is sensitive for Ewing but not specific. Look for lineage-specific markers
            and characteristic fusions.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
