import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/reservation', element: <Reservation /> },
    ],
  },
];

export default routes;
