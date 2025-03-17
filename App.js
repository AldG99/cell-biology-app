import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox, View, Text } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Ignorar advertencias específicas que no afectan el funcionamiento
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // Ignorar advertencia por ScrollView anidados
  'AsyncStorage has been extracted from react-native', // Ignorar advertencia de AsyncStorage
]);

// Mantener la pantalla de splash visible mientras cargamos recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Simular carga de recursos (puedes añadir carga real de fuentes, etc.)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Aquí puedes cargar fuentes personalizadas si las necesitas
        // await Font.loadAsync({
        //   'custom-font': require('./assets/fonts/custom-font.ttf'),
        // });
      } catch (e) {
        console.warn(e);
      } finally {
        // Indicar que la app está lista
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Ocultar la pantalla de splash cuando la app esté lista
  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <AppNavigator />
    </View>
  );
}
