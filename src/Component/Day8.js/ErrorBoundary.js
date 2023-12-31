import React from 'react';
export default class ErrorBoundary extends React.Component
{
  state={
    hasError:false
  }
  static  getDerivedStateFromError(error)
  {  
    return{
      hasError: true
     }
  }

  render()
  {
    if(this.state.hasError===true)
    {
        return<h1>Something went wrong </h1>
    }
    return this.props.children

  }
}