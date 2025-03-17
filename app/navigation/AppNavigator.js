import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar pantallas
import HomeScreen from '../screens/HomeScreen';
import CellDetailScreen from '../screens/CellDetailScreen';
import QuizScreen from '../screens/QuizScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Aprendizaje de Células',
          }}
        />
        <Stack.Screen
          name="CellDetail"
          component={CellDetailScreen}
          options={({ route }) => ({
            title: route.params.title || 'Detalle de Célula',
          })}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: 'Quiz de Células',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
