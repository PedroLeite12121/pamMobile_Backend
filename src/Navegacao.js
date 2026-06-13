import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { UsuariosScreen } from './screens/Usuarios';


import { TarefasScreen } from './screens/Tarefas';
import { DevsScreen } from './screens/Devs';
import { MenuScreen } from './screens/Menu';
import { LoginScreen } from './screens/Login';
import { CadastroScreen } from './screens/Cadastro'
const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Cadastro"
          component={CadastroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Usuarios"
          component={UsuariosScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Tarefas"
          component={TarefasScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Devs"
          component={DevsScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}