import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Radiology() {
  return (
    <ModuleLayout
      title="Radiology Correlation"
      description="Schematic radiologic patterns and histology correlation (conceptual)"
    >
      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Why Radiology Matters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Radiologic findings provide essential context for bone and soft tissue lesions.
              Matrix mineralization pattern, location, margins, and periosteal reaction help
              narrow the differential before the microscope.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Integration Principle</h4>
            <p className="text-sm text-muted-foreground">
              Radiology + Clinical + Histology = Diagnosis. Never interpret histology in
              isolation for BST lesions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Matrix Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Osteoid (Cloud-Like, Dense)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Amorphous, fluffy, cloud-like density</li>
              <li>Suggests bone-forming tumors: osteosarcoma, osteoblastoma, osteoid osteoma</li>
              <li>Can be patchy or dense</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Chondroid (Ring-and-Arc, Stippled)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Rings, arcs, or comma-like calcifications</li>
              <li>Popcorn-like calcification (mature)</li>
              <li>Suggests cartilaginous tumors: enchondroma, chondrosarcoma, osteochondroma</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">No Matrix / Lytic</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Purely lytic (destructive) without visible matrix</li>
              <li>Broad differential: Ewing sarcoma, lymphoma, metastasis, myeloma,
              non-ossifying fibroma, aneurysmal bone cyst</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Periosteal Reactions (Aggressive vs Benign)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Benign / Slow-Growing</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Solid periosteal reaction</li>
              <li>Smooth, continuous</li>
              <li>Suggests slow process (e.g., chronic osteomyelitis, benign lesion)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Aggressive Patterns</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>Sunburst:</strong> radiating spicules, classic for osteosarcoma</li>
              <li><strong>Codman triangle:</strong> periosteum lifted off bone, suggests
              aggressive process (osteosarcoma, Ewing, infection)</li>
              <li><strong>Onion-skin (lamellated):</strong> layered periosteal response, seen
              in Ewing sarcoma, osteomyelitis</li>
              <li><strong>Permeative / moth-eaten:</strong> multiple small lytic holes,
              aggressive (Ewing, lymphoma, metastasis, osteosarcoma)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location & Age Correlation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Epiphysis (End of Bone)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Chondroblastoma (young patients)</li>
              <li>Giant cell tumor (skeletally mature, extends to subarticular bone)</li>
              <li>Clear cell chondrosarcoma (rare)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Metaphysis</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Osteosarcoma (distal femur, proximal tibia - "around the knee")</li>
              <li>Chondrosarcoma</li>
              <li>Non-ossifying fibroma (eccentric cortical lesion)</li>
              <li>Fibrous dysplasia</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Diaphysis (Shaft)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Ewing sarcoma (children/adolescents)</li>
              <li>Fibrous dysplasia</li>
              <li>Enchondroma (especially in small bones of hand/feet)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Flat Bones / Axial Skeleton</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Ewing sarcoma (pelvis)</li>
              <li>Chondrosarcoma (pelvis, ribs)</li>
              <li>Plasmacytoma / myeloma</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Soft Tissue Mass Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Fatty Mass (CT/MRI)</h4>
            <p className="text-sm text-muted-foreground">
              Well-defined fat-density lesion suggests lipoma. Heterogeneous fat with septa
              or nodular areas raises concern for ALT/liposarcoma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cystic / Fluid-Filled</h4>
            <p className="text-sm text-muted-foreground">
              Ganglion cyst, synovial cyst, or tenosynovial giant cell tumor. Aneurysmal bone
              cyst (fluid-fluid levels).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Solid Soft Tissue Mass</h4>
            <p className="text-sm text-muted-foreground">
              Broad differential. Size &gt;5 cm, deep location, and heterogeneous enhancement
              raise concern for sarcoma. MRI characteristics (T1, T2 signal) can suggest
              cellularity, hemorrhage, myxoid stroma.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Specific Radiologic-Pathologic Correlations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Small Lucent Nidus with Sclerosis</h4>
            <p className="text-sm text-muted-foreground">
              Osteoid osteoma. Night pain relieved by aspirin.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Soap-Bubble / Expansile Lytic Lesion</h4>
            <p className="text-sm text-muted-foreground">
              Aneurysmal bone cyst, giant cell tumor, telangiectatic osteosarcoma (aggressive
              features distinguish from benign).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ground-Glass Appearance</h4>
            <p className="text-sm text-muted-foreground">
              Fibrous dysplasia. "Chinese-letter" trabeculae on histology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Peripheral Mineralization in Soft Tissue</h4>
            <p className="text-sm text-muted-foreground">
              Myositis ossificans (zonation pattern). Rule out soft tissue osteosarcoma
              (infiltrative, disorganized).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Always integrate imaging with histology. Ring-and-arc calcification + chondroid
            matrix = cartilaginous lesion. Sunburst periosteal reaction + osteoid = likely
            osteosarcoma. Location and age refine the differential.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
