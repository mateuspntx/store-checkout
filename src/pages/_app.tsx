import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { wrapper } from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store: any = useStore();

  return (
    <PersistGate persistor={store._persist}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </PersistGate>
  );
};

export default wrapper.withRedux(MyApp);
