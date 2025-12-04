import { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

interface ModuleLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export default function ModuleLayout({ title, description, children }: ModuleLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}
