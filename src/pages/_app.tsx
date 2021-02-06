import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { store, persistor } from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default MyApp;
