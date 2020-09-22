import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => {
  return import('./screens/Home');
});

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
