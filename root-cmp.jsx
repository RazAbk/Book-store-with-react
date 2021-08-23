const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import {Books} from './pages/Books.jsx'
import {AppHeader} from './cmps/AppHeader.jsx'
import {About} from './pages/About.jsx'
import {Home} from './pages/Home.jsx'

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <main>
                <Switch>
                    <Route exact path="/book" component={Books} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </Router>
    )
}

