import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Sevices'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
     
      {/* <Test/> */}
        <BrowserRouter>
    <NavBar/>
      <Switch>
       
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/services' component={Services}/>
       
        <Redirect to='/'/>
      </Switch>
        </BrowserRouter>
      
      
        <Footer/>
    </div>
  );
}

export default App;
