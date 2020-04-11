import React from 'react';
import './App.css';
import NavPage from './components/NavPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavPage />
        {/* https://www.youtube.com/watch?v=Law7wfdg_ls */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
