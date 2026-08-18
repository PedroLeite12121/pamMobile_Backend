
import React, { useState, useEffect } from 'react';
import { Linking, StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/Devs_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavBar } from '../component/NavBar';
import { TopBar } from '../component/TopBar';

export function DevsScreen({navigation}) {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({Inter_700Bold});
  const ROUTE = `https://tasklist-backend-t8ce.onrender.com`

  const fetchDevs = async () => {
    const API_URL = 'https://tasklist-backend-t8ce.onrender.com/devs'

    try {
      const response = await axios.get(API_URL);
      setDevs(response.data.saved); 
    } catch (error) {
      setDevs('')
      console.error("Erro ao buscar desenvolvedores:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardImg}>
        <Image
          source={{ uri: `${ROUTE}${item.img}` }}
          style={{ width: 80, height: 80, borderRadius: 15 }}
        />
      </View>

      <View style={styles.cardText}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.details}>Função: {item.funcao}</Text>
        
        <View style={styles.githubSection}>
          <TouchableOpacity onPress={() => Linking.openURL(item.link_github)}>
            <Image
              source={require('../assets/images/github.png')}
              style={styles.githubImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator size="large" color="#4c9dfa" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <TopBar title={"Devs"}></TopBar>
    
      <FlatList
        data={devs}
        keyExtractor={(item) => item.idDev.toString()} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <NavBar navigation={navigation}></NavBar>
            
    </SafeAreaView>
  );
}
