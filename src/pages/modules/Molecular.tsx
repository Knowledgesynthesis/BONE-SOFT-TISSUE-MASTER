import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Molecular() {
  return (
    <ModuleLayout
      title="Molecular & Genetic Concepts"
      description="High-level overview of fusions, amplifications, and molecular alterations"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Molecular Testing in BST Pathology</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Why Molecular Testing?</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Confirm diagnosis (especially in morphologically ambiguous cases)</li>
              <li>Distinguish between entities with overlapping histology</li>
              <li>Prognostic information</li>
              <li>Therapeutic targeting (emerging)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Common Modalities</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>FISH (fluorescence in situ hybridization): rearrangements and amplifications</li>
              <li>RT-PCR: detect specific fusion transcripts</li>
              <li>NGS (next-generation sequencing): comprehensive profiling</li>
              <li>IHC surrogates: MDM2, STAT6, INI1/SMARCB1, H3K27me3</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Gene Fusions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">EWSR1-FLI1 (and EWSR1-ERG)</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Ewing sarcoma<br />
              <strong>Translocation:</strong> t(11;22) (EWSR1-FLI1 is most common)<br />
              <strong>Note:</strong> EWSR1 can partner with other genes; FUS-ERG is alternative
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">SS18-SSX (formerly SYT-SSX)</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Synovial sarcoma<br />
              <strong>Translocation:</strong> t(X;18)<br />
              <strong>Variants:</strong> SS18-SSX1, SS18-SSX2 (SSX2 may have better prognosis)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">FUS-DDIT3 (and EWSR1-DDIT3)</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Myxoid liposarcoma<br />
              <strong>Translocation:</strong> t(12;16) for FUS-DDIT3; t(12;22) for EWSR1-DDIT3<br />
              <strong>Note:</strong> FUS-DDIT3 is more common
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">EWSR1-WT1</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Desmoplastic small round cell tumor<br />
              <strong>Translocation:</strong> t(11;22)<br />
              <strong>IHC surrogate:</strong> C-terminal WT1 positive
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">COL1A1-PDGFB</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Dermatofibrosarcoma protuberans (DFSP)<br />
              <strong>Translocation:</strong> t(17;22) (often as supernumerary ring chromosome)<br />
              <strong>IHC:</strong> CD34 positive
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">NAB2-STAT6</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Solitary fibrous tumor<br />
              <strong>IHC surrogate:</strong> Nuclear STAT6 (highly specific and sensitive)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">HEY1-NCOA2</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Mesenchymal chondrosarcoma
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">PAX3-FOXO1 or PAX7-FOXO1</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Alveolar rhabdomyosarcoma<br />
              <strong>Note:</strong> PAX3-FOXO1 associated with worse prognosis
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Amplifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">MDM2 and CDK4 Amplification</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumors:</strong> Atypical lipomatous tumor (ALT) / well-differentiated
              liposarcoma, dedifferentiated liposarcoma, parosteal osteosarcoma, low-grade
              central osteosarcoma<br />
              <strong>Detection:</strong> FISH (MDM2 amplification is hallmark), IHC (MDM2 and
              CDK4 overexpression, but IHC less specific than FISH)<br />
              <strong>Note:</strong> Both components of dedifferentiated liposarcoma retain
              MDM2/CDK4 amplification
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loss of Protein Expression (IHC Surrogates)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">INI1 (SMARCB1) Loss</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumors:</strong> Malignant rhabdoid tumor, epithelioid sarcoma
              (particularly proximal-type), epithelioid MPNST, myoepithelial tumors<br />
              <strong>IHC:</strong> Complete loss of nuclear INI1 staining in tumor cells
              (retained in normal/stromal cells as internal control)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">H3K27me3 (Trimethylation) Loss</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Malignant peripheral nerve sheath tumor (MPNST)<br />
              <strong>IHC:</strong> Loss of H3K27me3 supports MPNST (though not 100% sensitive
              or specific)<br />
              <strong>Molecular:</strong> Often associated with PRC2 complex alterations
              (SUZ12, EED mutations)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">SMARCA4 (BRG1) Loss</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> SMARCA4-deficient thoracic sarcoma (and other
              SMARCA4-deficient neoplasms)
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Point Mutations & Copy Number Alterations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">IDH1 / IDH2 Mutations</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumors:</strong> Enchondroma, chondrosarcoma (low to intermediate grade),
              dedifferentiated chondrosarcoma<br />
              <strong>Note:</strong> Common in cartilaginous tumors
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">GNAS Mutation</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Fibrous dysplasia (not a true neoplasm but developmental)<br />
              <strong>Note:</strong> Activating mutations in GNAS
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">CTNNB1 (Beta-Catenin) Mutations</h4>
            <p className="text-sm text-muted-foreground">
              <strong>Tumor:</strong> Desmoid-type fibromatosis<br />
              <strong>IHC:</strong> Nuclear beta-catenin<br />
              <strong>Note:</strong> APC gene alterations can also cause fibromatosis (FAP-related)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">TP53 Mutations</h4>
            <p className="text-sm text-muted-foreground">
              Common in many high-grade sarcomas. Not lineage-specific.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Complex Karyotypes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Concept</h4>
            <p className="text-sm text-muted-foreground">
              Many high-grade sarcomas have complex, non-recurrent chromosomal alterations
              rather than specific translocations. Examples: undifferentiated pleomorphic
              sarcoma, pleomorphic liposarcoma, most conventional osteosarcomas,
              leiomyosarcoma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Implication</h4>
            <p className="text-sm text-muted-foreground">
              Diagnosis relies more on morphology, IHC for lineage markers, and exclusion
              of entities with specific fusions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Molecular testing refines diagnosis. Fusions (EWSR1, SS18, DDIT3) define specific
            entities. MDM2 amplification confirms ALT/WDL. Loss of INI1 or H3K27me3 supports
            specific sarcomas. Not all sarcomas have defining molecular features.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
