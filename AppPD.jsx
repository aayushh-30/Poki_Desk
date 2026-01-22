import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { DarkTheme } from './src/PD/utils/ColorScheme/Dark.js';
import { LightTheme } from './src/PD/utils/ColorScheme/Light.js';
import Home from './src/PD/screens/Home.jsx';
import Profile from './src/PD/screens/Profile.jsx';
import TypeDetailsScreen from './src/PD/screens/PokimonGridViews.jsx';
import PokemonDetail from './src/PD/screens/PokemonProfile.jsx';

const Stack = createNativeStackNavigator()
const AppPD = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? DarkTheme : LightTheme;
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerShown = "false"
        >
          <Stack.Screen
            name="Home"
            component={Home}
            headerShown = "false"
            options={{
              title: 'Home Screen',
              headerShown: false,
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="PokiGrid"
            component={TypeDetailsScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{ 
              headerShown: false,
              animation: "fade_from_bottom",
              animationDuration: 5000
             }}
            name="PokimonProfile"
            component={PokemonDetail}
            
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppPD;

const styles = StyleSheet.create({});
