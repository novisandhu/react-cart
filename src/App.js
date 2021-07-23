import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';

const App = () => {
    return(
        <>
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                {/* <Route path="/about" component={About}></Route> */}
                <Route path="/products" component={Products}></Route>
            </Switch>
        </Router>
        </>
    )
}

export default App;