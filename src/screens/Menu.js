import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';

import axios from 'axios';

import { geralStyles } from '../styles/GeralStyles';
import { styles } from '../styles/MenuStyles';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { logout } from '../services/auth';

export function MenuScreen({navigation}) {
  const [fontsLoaded] = useFonts({Inter_700Bold});

  if (!fontsLoaded) {
      return null;
  }


  return (
    <View style={styles.container}>
			<View style={geralStyles.topBar}>
				<Text style={geralStyles.topBarText}>Menu</Text>
        <View style={geralStyles.logoutBar}>
          <TouchableOpacity onPress={() => {
            logout() 
            navigation.replace("Login")
          }}>
            <Image
              source={require('../assets/images/logout.png')}
              style={geralStyles.logoutImg}
            />
          </TouchableOpacity>
        </View>
			</View>
       <TouchableOpacity onPress={() => {navigation.navigate("Usuarios")  }}>
          <Text style={styles.button}>Usuários</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate("Tarefas")  }}>
          <Text style={styles.button}>Tarefas</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {navigation.navigate("Devs")  }}>
          <Text style={styles.button}>Desenvolvedores</Text>
        </TouchableOpacity>
    </View>
  );
}
