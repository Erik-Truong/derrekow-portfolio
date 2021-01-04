import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post/:slug' component={SinglePost} />
        <Route path='/post' exact component={Post} />
        <Route path='/project' component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;