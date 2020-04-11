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
          <Route path="/ndango/" exact strict component={Home} />
          <Route path="/ndango/about" exact strict component={About} />
          <Route path="/ndango/contact" exact strict component={Contact} />
          <Route path="/ndango/projects" exact strict component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
