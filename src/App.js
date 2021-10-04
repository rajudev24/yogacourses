import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Trainers from './Components/Trainers/Trainers';
import Courses from './Components/Courses/Courses';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/trainer'>
            <Trainers></Trainers>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
