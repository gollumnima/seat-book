import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import routes from 'Routes';
import theme from 'styles/theme';

const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
};

export default App;
