const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import {BookApp} from './pages/BookApp.jsx'
import {AppHeader} from './cmps/AppHeader.jsx'
import {About} from './pages/About.jsx'
import {Home} from './pages/Home.jsx'
import { BookDetails } from './pages/BookDetails.jsx';

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>

            <main>
                <Switch>
                    {/* <Route exact path="/book/edit/" component={Books} /> */}
                    <Route exact path="/book/:bookId" component={BookDetails} />
                    <Route exact path="/book" component={BookApp} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </Router>
    )
}

