import Navbar from './NavBar';
import Home from './Home';
import Create from './create';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  const title ='welcome to my first app';
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
         <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/create">
            <Create/>
          </Route>
          <Route exact path = "/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
