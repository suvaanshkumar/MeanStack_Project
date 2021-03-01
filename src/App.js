import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CreatePostForm from './components/posts/CreatePostForm';
import Posts from './components/posts/Posts';
import Login from './components/authorization/Login/Login';
import Signup from './components/authorization/Signup/Signup';
<<<<<<< Updated upstream
import Categories from './components/categories/Categories';
import ContactForm from './components/ContactForm';
=======
import  TweetList from './components/socials/TweetList'
>>>>>>> Stashed changes

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/createPost" component={CreatePostForm}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/home" component={Home}/>
          <Route path="/signup" component={Signup}/>
<<<<<<< Updated upstream
          <Route path="/contactUs" component={ContactForm}/>
=======
          <Route path="/browse" component={TweetList}/>
>>>>>>> Stashed changes
        </Switch>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
