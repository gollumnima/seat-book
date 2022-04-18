import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
};

export default App;
