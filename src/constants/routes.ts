import HomePage from '../Pages/HomePage';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';
import Pages from './paths';

const Routes = [
  {
    path: Pages.Home,
    exact: true,
    component: HomePage,
  },
  {
    path: Pages.Page1,
    exact: true,
    component: Page1,
  },
  {
    path: Pages.Page2,
    exact: true,
    component: Page2,
  },
  {
    path: Pages.Page3,
    exact: true,
    component: Page3,
  },
];

export default Routes;
