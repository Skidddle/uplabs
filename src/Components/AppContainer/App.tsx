import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../../constants/routes';

const App: React.FC = () => {
  return (
    <Switch>
      {Routes.map((item) => (
        <Route exact={item.exact} component={item.component} path={item.path} />
      ))}
    </Switch>
  );
};

export default App;
