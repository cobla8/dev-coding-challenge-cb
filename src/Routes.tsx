import * as React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import TrendingResults from './pages/TrendingResults'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route
                    exact
                    path="/trending-results"
                    component={TrendingResults}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
