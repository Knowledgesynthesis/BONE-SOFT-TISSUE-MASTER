import { useState } from 'react'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import useStore from '@/store/useStore'

interface Question {
  id: string
  question: string
  options: string[]
  correct: string
  rationale: string
  category: string
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'A 15-year-old presents with a metaphyseal lesion showing cloud-like density on radiograph and lace-like eosinophilic matrix histologically. Most likely diagnosis?',
    options: ['Enchondroma', 'Osteosarcoma', 'Ewing sarcoma', 'Chondrosarcoma'],
    correct: 'Osteosarcoma',
    rationale: 'Cloud-like density suggests osteoid matrix. Lace-like eosinophilic matrix = osteoid. Age and metaphyseal location support osteosarcoma.',
    category: 'Bone Tumors'
  },
  {
    id: 'q2',
    question: 'What is the hallmark molecular feature of atypical lipomatous tumor / well-differentiated liposarcoma?',
    options: ['EWSR1-FLI1 fusion', 'MDM2 amplification', 'SS18-SSX fusion', 'FUS-DDIT3 fusion'],
    correct: 'MDM2 amplification',
    rationale: 'MDM2 and CDK4 amplification (detected by FISH) is diagnostic for ALT/WDL and distinguishes it from lipoma.',
    category: 'Molecular'
  },
  {
    id: 'q3',
    question: 'A soft tissue mass shows abundant myxoid stroma with chicken-wire capillary network and lipoblasts. Most consistent diagnosis?',
    options: ['Nodular fasciitis', 'Myxoid liposarcoma', 'Myxofibrosarcoma', 'Intramuscular myxoma'],
    correct: 'Myxoid liposarcoma',
    rationale: 'Chicken-wire vasculature + lipoblasts = myxoid liposarcoma. Associated with FUS-DDIT3 fusion.',
    category: 'Fat Tumors'
  },
  {
    id: 'q4',
    question: 'What is the key feature that distinguishes myositis ossificans from osteosarcoma?',
    options: ['Presence of osteoid', 'Mitotic activity', 'Zonation pattern', 'Atypia'],
    correct: 'Zonation pattern',
    rationale: 'Myositis ossificans shows zonation: mature bone at periphery, immature center. Osteosarcoma lacks organized zonation and shows infiltrative growth.',
    category: 'Pitfalls'
  },
  {
    id: 'q5',
    question: 'A 12-year-old has a diaphyseal lesion with onion-skin periosteal reaction. Biopsy shows small round blue cells that are CD99+, NKX2.2+. Most likely molecular finding?',
    options: ['SS18-SSX fusion', 'EWSR1-FLI1 fusion', 'PAX3-FOXO1 fusion', 'MDM2 amplification'],
    correct: 'EWSR1-FLI1 fusion',
    rationale: 'Clinical, imaging, and IHC findings support Ewing sarcoma. EWSR1-FLI1 (or EWSR1-ERG) fusion is characteristic.',
    category: 'Small Round Blue Cell'
  },
  {
    id: 'q6',
    question: 'Which IHC marker shows nuclear staining and is highly specific for solitary fibrous tumor?',
    options: ['CD34', 'STAT6', 'S100', 'Desmin'],
    correct: 'STAT6',
    rationale: 'Nuclear STAT6 is highly specific and sensitive for solitary fibrous tumor (NAB2-STAT6 fusion). CD34 is positive but less specific.',
    category: 'IHC'
  },
  {
    id: 'q7',
    question: 'Chondroid matrix on imaging typically appears as:',
    options: ['Cloud-like density', 'Ring-and-arc calcifications', 'Permeative pattern', 'Sunburst pattern'],
    correct: 'Ring-and-arc calcifications',
    rationale: 'Ring-and-arc or popcorn calcifications are characteristic of chondroid matrix (cartilaginous tumors).',
    category: 'Radiology'
  },
  {
    id: 'q8',
    question: 'A biphasic tumor with spindle and epithelial components, TLE1+, EMA+, shows what fusion?',
    options: ['EWSR1-WT1', 'SS18-SSX', 'FUS-DDIT3', 'COL1A1-PDGFB'],
    correct: 'SS18-SSX',
    rationale: 'Biphasic pattern + TLE1/EMA positivity suggests synovial sarcoma. SS18-SSX (SYT-SSX) fusion is diagnostic.',
    category: 'Spindle Cell Patterns'
  },
  {
    id: 'q9',
    question: 'Loss of INI1 (SMARCB1) nuclear staining is characteristic of which tumors?',
    options: ['Osteosarcoma and chondrosarcoma', 'Rhabdoid tumor and epithelioid sarcoma', 'Lipoma and liposarcoma', 'Schwannoma and neurofibroma'],
    correct: 'Rhabdoid tumor and epithelioid sarcoma',
    rationale: 'Loss of INI1 expression supports malignant rhabdoid tumor, epithelioid sarcoma (proximal type), and some epithelioid MPNSTs.',
    category: 'Molecular'
  },
  {
    id: 'q10',
    question: 'What is the primary reason to avoid strong acid decalcification in bone biopsies?',
    options: ['It takes too long', 'It damages DNA/RNA for molecular studies', 'It causes tissue shrinkage', 'It enhances autofluorescence'],
    correct: 'It damages DNA/RNA for molecular studies',
    rationale: 'Strong acid decalcification can degrade nucleic acids, compromising molecular testing. EDTA is gentler but slower.',
    category: 'Triage'
  }
]

export default function Assessment() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const { setCurrentScore, clearCurrentScore } = useStore()

  const handleStart = () => {
    setStarted(true)
    setCurrentIndex(0)
    setAnswers({})
    setShowResults(false)
    clearCurrentScore()
  }

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: answer }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      finishQuiz()
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const finishQuiz = () => {
    const correct = questions.filter(q => answers[q.id] === q.correct).length
    setCurrentScore({ correct, total: questions.length })
    setShowResults(true)
  }

  const currentQuestion = questions[currentIndex]
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : undefined

  if (!started) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assessment</h1>
            <p className="text-muted-foreground mt-1">Test your BST pathology knowledge</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>BST Pathology Quiz</CardTitle>
            <CardDescription>
              10 questions covering key concepts in bone and soft tissue pathology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Format</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>10 multiple-choice questions</li>
                <li>Covers matrix recognition, tumor types, molecular features, and pitfalls</li>
                <li>Immediate feedback with rationales</li>
                <li>Session-only scoring (not saved)</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Your answers and score are session-only and will not be tracked or stored.
                This is purely for educational practice.
              </p>
            </div>

            <Button onClick={handleStart} size="lg" className="w-full md:w-auto">
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const score = useStore.getState().currentScore
    const percentage = score ? Math.round((score.correct / score.total) * 100) : 0

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Quiz Results</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Score (This Session Only)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {percentage}%
              </div>
              <p className="text-muted-foreground">
                {score?.correct} out of {score?.total} correct
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Review Answers:</h4>
              {questions.map((q, idx) => {
                const userAnswer = answers[q.id]
                const isCorrect = userAnswer === q.correct
                return (
                  <Card key={q.id} className={isCorrect ? 'border-green-500/30' : 'border-destructive/30'}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <CardTitle className="text-base">Question {idx + 1}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{q.question}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <span className="text-sm font-semibold">Your answer: </span>
                        <span className={`text-sm ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                          {userAnswer || 'Not answered'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div>
                          <span className="text-sm font-semibold">Correct answer: </span>
                          <span className="text-sm text-green-600 dark:text-green-400">{q.correct}</span>
                        </div>
                      )}
                      <div className="bg-muted/50 p-3 rounded-md mt-2">
                        <p className="text-sm text-muted-foreground">
                          <strong>Rationale:</strong> {q.rationale}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex gap-4">
              <Button onClick={handleStart}>Retake Quiz</Button>
              <Link to="/">
                <Button variant="outline">Return Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground italic text-center">
              Results are session-only and not stored. Retake as many times as you like!
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Quiz</h1>
            <p className="text-sm text-muted-foreground">
              Question {currentIndex + 1} of {questions.length}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {Object.keys(answers).length} answered
        </div>
      </div>

      <div className="w-full bg-secondary h-2 rounded-full">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <div className="text-sm text-muted-foreground mb-2">{currentQuestion.category}</div>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === option
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <span className="text-sm">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
