import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import AppRouter from './AppRouter';

import * as Sentry from '@sentry/react-native';
import {SENTRY_DSN} from '@env';

import useTheme from './hooks/ui/useTheme';
import {Themes} from './styles';
import {Theme} from '@react-navigation/native';

const AppContainer = styled.View<{theme: Themes}>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

Sentry.init({
  dsn: SENTRY_DSN,
});

const App: React.FC = () => {
  const theme: Theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
