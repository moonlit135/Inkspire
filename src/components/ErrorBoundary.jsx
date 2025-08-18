import React from 'react';
import { AlertCircle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true, 
      error: error.toString() 
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 max-w-2xl mx-auto mt-8 bg-amber-50 border border-amber-200 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-amber-800 mb-2">
                Something went wrong
              </h3>
              <p className="text-amber-700 text-sm mb-3">
                We're having trouble loading this content. Please try refreshing the page or contact support if the issue persists.
              </p>
              {this.state.error && (
                <details className="mt-3 text-xs text-amber-600">
                  <summary className="cursor-pointer font-medium">Error details</summary>
                  <pre className="mt-2 p-2 bg-amber-100 rounded overflow-auto">
                    {this.state.error}
                  </pre>
                </details>
              )}
            </div>
          </div>
          <h3 className="font-bold">Something went wrong</h3>
          <p className="text-sm">{this.state.error?.message || 'An unknown error occurred'}</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 rounded text-sm"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
