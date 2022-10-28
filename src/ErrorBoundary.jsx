import React, {Component} from 'react'
import PageNotFound from './PageNotFound'
import {NavLink} from "react-router-dom"


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <PageNotFound />
          <NavLink className="back" to ="/"> Home</NavLink>
        </div>
      );
    }

    return this.props.children; 
  }
}
export default ErrorBoundary
