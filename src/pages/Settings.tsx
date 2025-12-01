import { Moon, Sun, Info, AlertTriangle } from 'lucide-react'
import useStore from '@/store/useStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function Settings() {
  const { theme, toggleTheme } = useStore()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your app preferences
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose your preferred theme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="font-medium">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            <CardTitle>About This App</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Bone & Soft Tissue Master</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A mobile-first, offline-ready educational platform dedicated to Bone and Soft
              Tissue Pathology (BST) as taught in pathology residency BST rotations and
              surgical pathology rotations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Coverage</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This app covers normal bone & soft tissue histology, reactive vs neoplastic
              processes, bone-forming and cartilage-forming tumors, fibrous and adipocytic
              tumors, vascular tumors, nerve-related tumors, spindle cell tumor differentials,
              small round blue cell tumors, matrix interpretation, radiologic correlation,
              IHC panels, molecular fusions, and diagnostic pitfalls.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Educational Approach</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The app emphasizes pattern recognition, matrix-driven differentials, and
              integration of morphology, immunohistochemistry, and molecular features.
              All content is synthetic and illustration-based for educational purposes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Version</h4>
            <p className="text-sm text-muted-foreground">1.0.0</p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-destructive/50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Important Disclaimers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              Educational Use Only
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This application is designed solely for educational purposes. It is NOT intended
              for use in clinical diagnosis, patient care, or treatment decisions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              Synthetic Content
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All content, cases, and examples in this app are 100% synthetic and
              non-identifiable. No real patient data, images, or protected health information
              (PHI) is used.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              Not a Diagnostic Tool
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This app does not provide medical advice, diagnosis, or treatment recommendations.
              Always consult qualified healthcare professionals and follow established clinical
              guidelines for patient care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              No Data Tracking
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This app does not track, store, or transmit any user data. All quiz responses
              and scores are session-only and are not saved or persisted.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              Reference Material
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While this app is designed to align conceptually with standard pathology
              references and WHO classification categories, users should always consult
              primary literature and official guidelines for the most current and accurate
              information.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2 text-destructive">
              Illustrations Only
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All visual content consists of schematic illustrations, icons, and cartoon
              diagrams. No real histology images or radiologic images are used.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
