import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
