import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  render() {
  const { hasError } = this.state
    if(hasError) {
      return <h1>OOOPPS!!!! SOMETHING WENT WRONG</h1>
    }
  return this.props.children
  }
}

export default ErrorBoundary