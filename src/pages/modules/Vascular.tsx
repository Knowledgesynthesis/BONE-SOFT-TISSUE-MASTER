import ModuleLayout from '@/components/ModuleLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Vascular() {
  return (
    <ModuleLayout
      title="Vascular & Perivascular Tumors"
      description="Benign and malignant vascular neoplasms"
    >
      <Card>
        <CardHeader>
          <CardTitle>Hemangioma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Types</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Capillary hemangioma: small, well-formed capillaries</li>
              <li>Cavernous hemangioma: dilated thin-walled vessels</li>
              <li>Venous hemangioma: thick-walled vessels</li>
              <li>Epithelioid hemangioma: epithelioid endothelial cells, can be worrisome</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Bone Hemangioma</h4>
            <p className="text-sm text-muted-foreground">
              Common in vertebrae and skull. Dilated vascular channels. Benign.
              Characteristic "corduroy" or "jail-bar" appearance on imaging.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Intermediate Vascular Lesions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Kaposi Sarcoma (Concept)</h4>
            <p className="text-sm text-muted-foreground">
              Spindle cell proliferation with slit-like vascular spaces. Associated with HHV-8.
              Can be patch, plaque, or nodular stage. Immunosuppressed patients (HIV,
              transplant) or endemic.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hemangioendothelioma</h4>
            <p className="text-sm text-muted-foreground">
              Intermediate biologic potential. Epithelioid hemangioendothelioma has epithelioid
              cells with intracytoplasmic lumina. WWTR1-CAMTA1 or YAP1-TFE3 fusions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle>Angiosarcoma</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histologic Features</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Irregular, anastomosing vascular channels</li>
              <li>Multilayered atypical endothelial cells</li>
              <li>Dissection of tissue planes</li>
              <li>Solid areas with sheet-like growth</li>
              <li>Mitotic activity, necrosis</li>
              <li>May show epithelioid features</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">IHC</h4>
            <p className="text-sm text-muted-foreground">
              CD31, CD34, ERG, FLI1 positive (vascular markers). Keratin may be focally
              positive in epithelioid variants.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Aggressive. Can occur post-radiation, in chronic lymphedema (Stewart-Treves
              syndrome), or de novo. Scalp/face in elderly, or deep soft tissues.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Perivascular Epithelioid Cell Tumors (PEComa)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Defining Features</h4>
            <p className="text-sm text-muted-foreground">
              Epithelioid to spindle cells with clear to eosinophilic cytoplasm. Perivascular
              distribution. Co-expression of melanocytic (HMB45, Melan-A) and smooth muscle
              (SMA, desmin) markers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Family Members</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Angiomyolipoma (kidney, liver): triphasic with vessels, smooth muscle, fat</li>
              <li>Lymphangioleiomyomatosis (LAM): lung cysts in women</li>
              <li>Clear cell "sugar" tumor of lung</li>
              <li>PEComa NOS: soft tissue or visceral organs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Molecular</h4>
            <p className="text-sm text-muted-foreground">
              TSC1/TSC2 inactivation in tuberous sclerosis-associated lesions. TFE3 fusions
              in some sporadic cases.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Glomus Tumor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Histology</h4>
            <p className="text-sm text-muted-foreground">
              Uniform round cells with eosinophilic cytoplasm, distinct cell borders, and
              round nuclei. Perivascular arrangement. Minimal atypia in classic cases.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical</h4>
            <p className="text-sm text-muted-foreground">
              Subungual location is classic (very painful). Can occur in soft tissue. SMA+.
              Most are benign but rare malignant variants exist.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground italic">
            Vascular markers (CD31, ERG) confirm endothelial differentiation. Irregular
            anastomosing channels with atypia suggest angiosarcoma. PEComas show dual
            melanocytic and smooth muscle differentiation.
          </p>
        </CardContent>
      </Card>
    </ModuleLayout>
  )
}
