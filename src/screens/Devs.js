
import React, { useState, useEffect } from 'react';
import { Linking, StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/DevsStyles';
import { geralStyles } from '../styles/GeralStyles';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

export function DevsScreen({navigation}) {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({Inter_700Bold});

  const ROUTE = `http://127.0.0.1:3000`
  const API_URL = 'http://127.0.0.1:3000/devs'

  const fetchDevs = async (id = '') => {
    try {
      const response = await axios.get(API_URL);
      setDevs(response.data.data); // Salva o JSON no estado
    } catch (error) {
      setDevs('')
      console.error("Erro ao buscar desenvolvedores:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // Renderiza cada item da lista
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

      <View style={geralStyles.topBar}>
        <View style={geralStyles.homeBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require('../assets/images/home.png')}
            style={geralStyles.homeImg}
          />
          </TouchableOpacity>
        </View>
        <View style={geralStyles.innerTop2}>
          <Text style={geralStyles.topBarText}>Devs</Text>
        </View>
      </View>
    
      <FlatList
        data={devs}
        keyExtractor={(item) => item.idDev.toString()} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
