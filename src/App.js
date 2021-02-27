import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CreatePostForm from './components/CreatePostForm';
import Posts from './components/Posts';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/createPost" component={CreatePostForm}/>
        </Switch>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
