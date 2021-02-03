import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { store } from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
