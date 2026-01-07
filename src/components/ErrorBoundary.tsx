import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <p className="text-muted-foreground mb-4">
              Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90"
            >
              Recargar
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

