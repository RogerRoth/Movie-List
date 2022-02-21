import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Sriracha_400Regular } from '@expo-google-fonts/sriracha';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Sriracha_400Regular
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' backgroundColor='transparent' />
      <Routes />
    </ThemeProvider>
  );
}