import React from 'react'
import './App.css'
import Router from './Routes'

function App(): JSX.Element {
    return (
        <div>
            <div className="overlay" id="overlay" />
            <Router />
            <div className="app" />
        </div>
    )
}

export default App
