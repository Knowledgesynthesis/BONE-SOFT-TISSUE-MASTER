import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Normal() {
  return (
    <ModuleLayout
      title="Normal Bone & Soft Tissue"
      description="Foundational anatomy and histology of bone, cartilage, muscle, fat, and nerve"
    >
      <Card>
        <CardHeader>
          <CardTitle>Bone Anatomy & Osteoid Formation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Bone Structure</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Cortical (compact) bone: dense outer layer</li>
              <li>Trabecular (cancellous) bone: inner spongy network</li>
              <li>Periosteum: outer fibrous covering</li>
              <li>Endosteum: inner lining of medullary cavity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Osteoid Matrix</h4>
            <p className="text-sm text-muted-foreground">
              Unmineralized bone matrix composed primarily of type I collagen. Produced by
              osteoblasts before mineralization. Appears as pink/eosinophilic material that
              may show a lace-like pattern.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Cells</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Osteoblasts: bone-forming cells</li>
              <li>Osteocytes: mature bone cells within lacunae</li>
              <li>Osteoclasts: multinucleated bone-resorbing cells</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cartilage Structure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Cartilage Types</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Hyaline cartilage: articular surfaces, growth plates</li>
              <li>Fibrocartilage: intervertebral discs, menisci</li>
              <li>Elastic cartilage: ear, epiglottis</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Chondroid Matrix</h4>
            <p className="text-sm text-muted-foreground">
              Basophilic matrix composed of type II collagen and proteoglycans. Chondrocytes
              reside in lacunae within the matrix. May show territorial (pericellular) and
              interterritorial zones.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Muscle, Tendon, Fat & Nerve Basics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Skeletal Muscle</h4>
            <p className="text-sm text-muted-foreground">
              Multinucleated fibers with peripheral nuclei. Cross-striations visible.
              Organized into fascicles separated by perimysium.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Smooth Muscle</h4>
            <p className="text-sm text-muted-foreground">
              Spindle-shaped cells with central nuclei. No striations. Found in vessel walls
              and visceral organs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Adipose Tissue</h4>
            <p className="text-sm text-muted-foreground">
              White fat: unilocular adipocytes with peripheral nuclei. Brown fat: multilocular
              with central nuclei (less common in adults).
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Peripheral Nerve</h4>
            <p className="text-sm text-muted-foreground">
              Nerve fascicles with axons, myelin sheaths, and supporting Schwann cells.
              Surrounded by perineurium and epineurium.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tendons & Ligaments</h4>
            <p className="text-sm text-muted-foreground">
              Dense regular connective tissue with parallel collagen bundles and elongated
              fibroblasts. Minimal vascularity.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Normal Marrow Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Age-Related Changes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Infants/children: primarily red (hematopoietic) marrow</li>
              <li>Adults: yellow (fatty) marrow predominates in appendicular skeleton</li>
              <li>Red marrow persists in axial skeleton (vertebrae, pelvis, sternum)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Normal Composition</h4>
            <p className="text-sm text-muted-foreground">
              Mix of hematopoietic cells, adipocytes, and stromal elements. Normal myeloid:
              erythroid ratio approximately 3:1 to 4:1.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Understanding normal histology is essential for recognizing reactive changes and
            neoplastic processes. Use this foundation to build pattern recognition skills.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
