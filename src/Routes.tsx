import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/reservation',
    element: <Reservation />,
  },
];

export default routes;
