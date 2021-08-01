import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import PageRender from './customRouter/PageRender';
import PrivateRouter from './customRouter/PrivateRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          {/* <Route exact path="/" component={auth.token ? Home : Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
